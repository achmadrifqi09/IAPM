<?php

namespace App\Http\Controllers;

use App\Mail\VerificationMail;
use App\Models\OnTimePassword;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Auth/SignIn');
    }

    public function auth(Request $request)
    {
        $remember = $request['remember'] === 'on' ? true : false;
        $credential = $this->signinValidation($request);

        if (Auth::attempt($credential, $remember)) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors(['error' => 'There may be something wrong with your email or password']);
    }


    public function sendOtp(Request $request)
    {

        $user = User::find($request['user_id']);
        if (!$user) return back()->withErrors(['error' => 'Failed to send otp, cannot find account data']);

        $expiredDate = Carbon::now()->addMinutes(2);
        $verificationDetail = [
            'user_id' => $request['user_id'],
            'on_time_password' => $this->generateOtp(),
            'expired_at' => $expiredDate
        ];

        try {
            if ($this->userHasReceivedOTP($request['user_id'])) {
                $verificationData = OnTimePassword::where('user_id', '=', $request['user_id']);
                $verificationData->update($verificationDetail);
            } else {
                OnTimePassword::create($verificationDetail);
            }

            // Mail::to($user['email'])->send(new VerificationMail($verificationDetail['on_time_password']));
            return back()->with('success', 'OTP has been send');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
        return back();
    }



    public function userHasReceivedOTP($id)
    {

        $data = OnTimePassword::where('user_id', '=', $id)->get();

        return count($data) === 0 ? false : true;
    }

    public function generateOtp()
    {
        return rand(123456, 999999);
    }

    public function signinValidation($request)
    {
        $rules = [
            'email' => 'required|regex:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/',
            'password' => 'required|min:8'
        ];

        $errorMessage = [
            'email.required' => 'Email must be filled in',
            'email.regex' => 'Invalid email format',
            'password.required' => 'Password must be filled in',
            'password.min' => 'Password must be at least 8 characters'
        ];

        return $request->validate($rules, $errorMessage);
    }

    public function logout()
    {
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return redirect('/login');
    }
}
