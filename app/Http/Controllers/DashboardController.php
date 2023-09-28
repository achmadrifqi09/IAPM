<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\Post;
use App\Models\Service;
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

        $lastedPosts = Post::orderBy('published_at', 'DESC')
            ->select(['id', 'title', 'slug', 'thumbnail', 'status'])
            ->take(5)
            ->get();
        $serviceCount = Service::all()->count();
        $blogCount = Post::where('status', '=', 'Published')->get()->count();
        $emailCount = Message::all()->count();


        return Inertia::render('Admin/Dashboard/index', [
            'lastedMessages' => $lastedMessages,
            'lastedPosts' => $lastedPosts,
            'serviceCount' => $serviceCount,
            'blogCount' => $blogCount,
            'emailCount' => $emailCount
        ]);
    }
}
