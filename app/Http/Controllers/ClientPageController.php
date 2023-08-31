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

    public function about() {
        return Inertia::render('Client/About');
    }
}
