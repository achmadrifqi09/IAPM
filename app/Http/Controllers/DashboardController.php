<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $lastedMessages = Message::orderBy('created_at', 'DESC')
            ->select(['name', 'email', 'message', 'created_at'])
            ->take(5)
            ->get();

        return Inertia::render('Admin/Dashboard/index', [
            'lastedMessages' => $lastedMessages,
            'test' => 'test'
        ]);
    }
}
