<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientPageController extends Controller
{
    public function home()
    {
        return Inertia::render('Client/Home');
    }
}
