<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    public function index()
    {
        $sitemap = Sitemap::create()
            ->add(Url::create('/'))
            ->add(Url::create('/about-us'))
            ->add(Url::create('/services'));

        $posts = Post::where('status', '=', 'Published')->get();
        foreach ($posts as $post) {
            $sitemap->add(Url::create("/blogs/{$post->slug}"));
        }

        $sitemap->writeToFile(public_path('sitemap.xml'));
    }
}
