<?php

namespace App\Http\Controllers;

use App\Mail\NotifyContactMail;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\Message;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Mail;
use Throwable;

class ContactController extends Controller
{
    public function sendMail(Request $request)
    {
        $verifyStatus = $this->verifyReCaptcha($request['token']);
        $mail = Contact::where('primary_contact', '=', 'Yes')->first();
        if (!$verifyStatus) {
            return back()->withErrors(['Invalid reCaptcha']);
        }

        $details = [
            'name' => $request['name'],
            'email' => $request['email'],
            'message' => $request['message']
        ];

        try {
            $this->storeMessage($request->only(['name', 'email', 'message']));
            Mail::to($mail['contact'])->send(new NotifyContactMail($details));
            return back()->with('success', 'Email has been sent');
        } catch (Throwable $e) {
            return back()->withErrors(["We're sorry we failed to send the email, Please try again later or contact us with a different contact"]);
        }
    }

    public function storeMessage($message)
    {
        if (!$message) {
            return false;
        }

        try {
            Message::create($message);
        } catch (QueryException $e) {
            return $e;
        }
    }

    public function verifyReCaptcha($token)
    {
        $verifyEndPoint = env('VITE_RECAPTCHA_END_POINT');
        $secretKey = env('VITE_RECAPTCHA_SECRET_KEY');

        $responseJson = Http::post($verifyEndPoint . '?secret=' . $secretKey . '&response=' . $token);
        $response = json_decode($responseJson);

        if (!$response->success) {
            return false;
        }

        return true;
    }

    public function store(Request $request)
    {
        $validateContact = $this->contactValidation($request);

        try {
            Contact::create($validateContact);
            return back()->with('success', 'Contact has been added');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function setPrimaryContact($id)
    {
        $contact = Contact::find($id);
        $oldPrimaryContact = Contact::where('primary_contact', '=', 'Yes')->first();

        if (!$contact) return back()->withErrors(['error' => 'Invalid action, data not found']);
        if ($contact->contact_type !== 'Email') return back()->withErrors(['error' => 'The primary contact must be of type email']);

        if ($oldPrimaryContact) $oldPrimaryContact->update(['primary_contact' => 'No']);

        try {
            $contact->update(['primary_contact' => 'Yes']);
            return back()->with('success', 'Successfully changed the primary contact');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }



    public function update(Request $request, $id)
    {
        $validateContact = $this->contactValidation($request);
        $updatedContact = Contact::find($id);

        if (!$updatedContact) {
            return back()->withErrors(['error' => 'Invalid action, data not found']);
        }

        try {
            $updatedContact->update($validateContact);
            return back()->with('success', 'Contact has been updated');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }


    public function destroy($id)
    {
        $deletedContact = Contact::find($id);
        if (!$deletedContact) {
            return back()->withErrors(['error' => 'Invalid action, data not found']);
        }

        try {
            $deletedContact->delete();
            return back()->with('success', 'The contact has been deleted');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function createErrorMessage($contactType)
    {
        $errorMessage = [
            'contact_type.required' => 'Contact type must be filled in',
            'contact.required' => 'Contact must be filled in'
        ];
        switch ($contactType) {
            case 'Email':
                $errorMessage['contact.regex'] = 'Invalid email format';
                break;
            case 'WhatsApp':
                $errorMessage['contact.regex'] = 'Invalid phone number format';;
                break;
            case 'Telephone':
                $errorMessage['contact.regex'] = 'Invalid phone number format';;
                break;
            case 'Telegram':
                $errorMessage['contact.regex'] = 'Invalid username format';
                break;
        }

        return $errorMessage;
    }

    public function contactValidation($request)
    {
        $rules = [
            'contact_type' => 'required'
        ];

        switch ($request->contact_type) {
            case 'Email':
                $rules['contact'] = 'required|regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
                break;
            case 'WhatsApp':
                $rules['contact'] = ['required', 'regex:/^(\+62|62|0)8[1-9][0-9]{6,9}$/'];
                break;
            case 'Telephone':
                $rules['contact'] = ['required', 'regex:/^(\+62|62|0)8[1-9][0-9]{6,9}$/'];
                break;
            case 'Telegram':
                $rules['contact'] = 'required|regex:/^[a-zA-Z0-9]+$/';
                break;
        }

        $errorMessage = $this->createErrorMessage($request->contact_type);
        return $request->validate($rules, $errorMessage);
    }
}
