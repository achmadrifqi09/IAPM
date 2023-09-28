<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\PostCategory;
use Exception;
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
        $categories = Category::select(['id', 'category_name'])->get();
        $posts = Post::with(['visits'])->orderBy('created_at', 'DESC')->select(['id', 'title', 'status', 'slug', 'thumbnail'])->get();
        return Inertia::render('Admin/Blog/index', [
            'categories' => $categories,
            'posts' => $posts
        ]);
    }

    public function create()
    {
        $categories = Category::select(['id', 'category_name'])->get();
        return Inertia::render('Admin/Blog/BlogForm', [
            'categories' => $categories,
            'isUpdate' => false,
        ]);
    }

    public function store(Request $request)
    {
        $postField = $this->postAvailableField($request, false);

        if (key_exists('error', $postField)) return back()->withErrors($postField);

        try {
            $post = Post::create($postField);
            if ($request['categories']) $this->createPostCategory($request['categories'], $post['id']);
            return back()->with('success', 'Blog post has been added');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function edit($id)
    {
        $post = null;
        if ($this->postHasCategories($id)) {
            $post = Post::with('post_categories')->whereHas('post_categories', function ($query) use ($id) {
                $query->where('id_post', '=', $id);
            })->get()->first();
        } else {
            $post = Post::find($id);
        }

        if (!$post) {
            return back()->withErrors(['error' => 'Invalid action, blog post not found']);
        }

        $categories = Category::select(['id', 'category_name'])->get();
        return Inertia::render('Admin/Blog/BlogForm', [
            'categories' => $categories,
            'post' => $post,
            'isUpdate' => true,
        ]);
    }

    public function update(Request $request, $id)
    {
        $postField = $this->postAvailableField($request, true);

        if (key_exists('error', $postField)) return back()->withErrors($postField);

        try {
            $post = Post::find($id);
            if (!$post) return back()->withErrors(['error' => 'Invalid action, blog post not found']);
            if ($request->hasFile('thumbnail')) $this->deleteImage($post->thumbnail);

            $post->update($postField);

            $this->deletePostCategory($id);
            $this->createPostCategory($request['categories'], $id);

            return back()->with('success', 'Blog post has been updated');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }


    public function destroy($id)
    {
        $deletedPost = Post::find($id);

        if (!$deletedPost) {
            return back()->withErrors(['error' => 'Invalid action, blog post not found']);
        }

        $this->deleteImage($deletedPost->thumbnail);
        $this->deletePostCategory($id);

        $deletedPost->delete();
        return back()->with('success', 'Blog post has been deleted');
    }


    public function postAvailableField($request, $isUpdate)
    {
        $validatePost = $this->validatePost($request, $isUpdate);

        if ($request->hasFile('thumbnail')) $validatePost['thumbnail'] = $this->storeImage($request->file('thumbnail'));

        if (!$this->publishingValidation($request)) return [
            'error' => 'Cannot publish blog posts with blank content'
        ];

        if ($request['status'] === 'Published') $validatePost['published_at'] = Carbon::now()->toDateTimeString();


        $validatePost['meta_title'] = $request['meta_title'] ?? $request['title'];
        $validatePost['meta_description'] = strip_tags(Str::limit($request['content'], 100));
        $validatePost['excerpt'] = strip_tags(Str::limit($request['content'], 100));

        return $validatePost;
    }


    public function postHasCategories($idPost)
    {
        $categories = PostCategory::where('id_post', '=', $idPost)->get();
        if ($categories->isNotEmpty()) {
            return true;
        }
        return false;
    }

    public function createPostCategory($categories, $idPost)
    {
        try {
            foreach ($categories as $key => $category) {
                PostCategory::create([
                    'id_post' => $idPost,
                    'id_category' => $category['value'],
                ]);
            }
        } catch (Exception $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function deletePostCategory($idPost)
    {
        $isCategories = $this->postHasCategories($idPost);
        if (!$isCategories) return;
        PostCategory::where('id_post', '=', $idPost)->delete();
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
        if (!$image && !Storage::exists('images/' . $image)) {
            return;
        }

        Storage::delete('images/' . $image);
        return true;
    }

    public function validatePost($request, $isUpdate)
    {
        $rules = [
            'title' => ['required', 'min:10'],
            'status' => ['required', 'in:Published,Draft'],
            'slug' => ['required'],
            'content' => ['nullable'],
            'meta_description' => ['nullable'],
            'published_at' => ['nullable']
        ];

        $errorMessage = [
            'title.required' => 'Title must be filled in',
            'title.min' => 'The title must contain at least 10 characters',
            'status.in' => 'Status must be Published or Draft',
            'status.required' => 'Status must be filled in',
            'slug.required' => 'Slug must be filled in',
            'slug.unique' => 'The title has been used in another post, try changing your title'

        ];

        if (!$isUpdate) {
            $rules['slug'] = ['required', 'unique:posts'];
            $errorMessage['slug.unique'] = 'The title has been used in another post, try changing your title';
        }

        return $request->validate($rules, $errorMessage);
    }
}
