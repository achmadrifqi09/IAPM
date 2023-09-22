<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Auth/SignIn');
    }

    public function auth(Request $request)
    {

        $credential = $this->signinValidation($request);

        if (Auth::attempt($credential)) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors('There may be something wrong with your email or password');
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
