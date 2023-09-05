<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientPageController extends Controller
{
    public function home()
    {
        return Inertia::render('Client/Home/index');
    }

    public function about()
    {
        return Inertia::render('Client/About/index');
    }

    public function service()
    {
        return Inertia::render('Client/Service/index');
    }

    public function serviceDetail($id)
    {
        return Inertia::render('Client/Service/ServiceDetail');
    }

    public function blog()
    {
        return Inertia::render('Client/Blog/index');
    }

    public function blogDetail($id)
    {
        return Inertia::render('Client/Blog/BlogDetail');
    }
}
