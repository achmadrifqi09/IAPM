<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;

class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Blog/index');
    }

    public function create()
    {
        return Inertia::render('Admin/Blog/BlogForm');
    }

    public function store(Request $request)
    {
        $validatePost = $this->validatePost($request);

        if ($request->hasFile('thumbnail')) {
            $postImage = $this->storeImage($request->file('thumbnail'));
            $validatePost['thumbnail'] = $postImage;
        }

        if (!$this->publishingValidation($request)) {
            return back()->withErrors(['error', 'Cannot publish blog posts with blank content']);
        }

        if ($request['status'] === 'Published') {
            $currentDate = Carbon::now();
            $validatePost['published_at'] = $currentDate->toDateTimeString();
        }

        $validatePost['meta_title'] = $request['title'];
        $validatePost['meta_description'] = $request['title'];
        $validatePost['excerpt'] = Str::limit($request['content'], 100);

        try {
            Post::create($validatePost);
            return redirect('/manage-blogs')->with(['success', 'Blog post has been added']);
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function publishingValidation($post)
    {
        if (
            strlen($post['content']) === 0 &&
            $post['status'] === 'Published'
        ) {
            return false;
        }

        return true;
    }

    public function storeImage($image)
    {
        if (!$image) {
            return false;
        }

        $fileName = time() . null . $image->getClientOriginalName();
        $image->storeAs('images', $fileName);
        return $fileName;
    }

    public function deleteImage($image)
    {
        if (!$image) {
            return false;
        }

        Storage::delete('images/' . $image);
        return true;
    }

    public function validatePost($request)
    {
        $rules = [
            'title' => ['required', 'min:10'],
            'status' => ['required', 'in:Published,Draft'],
            'slug' => ['required']
        ];

        $errorMessage = [
            'title.required' => 'Title must be filled in',
            'title.min' => 'The title must contain at least 10 characters',
            'status.in' => 'Status must be Published or Draft',
            'status.required' => 'Status must be filled in',
            'slug.required' => 'Slug must be filled in',

        ];

        return $request->validate($rules, $errorMessage);
    }
}
