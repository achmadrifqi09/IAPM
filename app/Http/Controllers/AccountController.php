<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Carbon;
use App\Models\OnTimePassword;
use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Stmt\Switch_;

class AccountController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return Inertia::render('Admin/Account/index', [
            'user' => $user
        ]);
    }

    public function update(Request $request, $id)
    {

        $user  = User::find($id);
        if (empty($user)) return back()->withErrors(['error' => "Can't find account data"]);

        if ($request['password'] || $request['email']) {
            if ($request['password'] || $request['email'] !== $user['email']) {
                $verificationStatus = $this->validateOtp($request['on_time_password'], $id);
                if (!$verificationStatus) return back()->withErrors(['error' => 'Invalid on time password']);
            }
        }

        if ($request['password'] && !Hash::check($request['old_password'], $user['password'])) return back()
            ->withErrors(['error' => 'The old password is incorrect']);

        $requestWithoutNull = $this->removeNullValue($request);
        $validateUserData = $this->validateRequest($requestWithoutNull);

        if (array_key_exists('password', $validateUserData)) $validateUserData['password'] = bcrypt($validateUserData['password']);

        $user->update($validateUserData);
        return redirect('/account')->with('success', 'Account has been updated');
    }

    public function validateRequest($request)
    {
        $rules = [];
        $errorMessage = [];
        foreach ($request->except('_token') as $key => $value) {

            switch ($key) {
                case 'name':
                    $rules['name'] = 'required|min:6';
                    $errorMessage['name.required'] = 'Name must be filled in';
                    $errorMessage['name.min'] = 'Name must contain 6 characters';
                    break;
                case 'email':
                    $rules['email'] = 'required|regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
                    $errorMessage['email.required'] = 'Email must be filled in';
                    $errorMessage['email.regex'] = 'Invalid email format';
                    break;
                case 'password':
                    $rules['password'] = 'required|confirmed|min:8';
                    $errorMessage['password.required'] = 'Password must be filled in';
                    $errorMessage['password.confirmed'] = 'Confirm password is incorrect';
                    $errorMessage['password.min'] = 'Password must contain 8 characters';
                    break;
                case 'password_confirmation':
                    $rules['password_confirmation'] = 'required|min:8';
                    $errorMessage['password_confirmation.required'] = 'Password confirmation must be filled in';
            }
        }

        return $request->validate($rules, $errorMessage);
    }

    public function removeNullValue($request)
    {
        foreach ($request->except('_token') as $key => $value) {
            if (!$value) {
                $request->request->remove($key);
            }
        }

        return $request;
    }

    public function validateOtp($otp, $userId)
    {

        $verificationData = OnTimePassword::where('user_id', '=', $userId)->first();

        if (empty($verificationData)) {
            return false;
        }

        $currentTime = Carbon::now();
        if ($verificationData['on_time_password'] === $otp) {
            if ($currentTime->isAfter($verificationData['expired_at'])) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}
