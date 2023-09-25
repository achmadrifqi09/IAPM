<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use App\Models\Category;
use App\Models\Company;
use App\Models\DevelopmentHistory;
use App\Models\Page;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Models\Meta;
use App\Models\Service;
use App\Models\Testimonial;
use Inertia\Inertia;

class ClientPageController extends Controller
{
    public function home()
    {
        $pageDatas = $this->getPageDataFromDB('home-page');
        $assets = $this->getAssetData();
        $services = Service::select(['id', 'image', 'service_name'])->get();
        $testimonials = Testimonial::select(['name', 'position', 'quote'])->get();
        // $clients => 

        return Inertia::render('Client/Home/index', [
            'datas' => $pageDatas,
            'assets' => $assets,
            'services' => $services,
            'testimonials' => $testimonials
        ]);
    }

    public function about()
    {
        $pageDatas = $this->resourceMapping($this->getPageDataFromDB('about-page'));
        $assets = $this->getAssetData();
        $companyDesc = Company::select(['vision', 'mission', 'description'])->first();
        $histories = DevelopmentHistory::select(['id', 'year', 'history_description', 'image'])->orderBy('year', 'DESC')->get();

        return Inertia::render('Client/About/index', [
            'datas' => $pageDatas,
            'assets' => $assets,
            'company' => $companyDesc,
            'histories' => $histories
        ]);
    }

    public function service()
    {
        $pageDatas = $this->resourceMapping($this->getPageDataFromDB('service-page'));
        $services = Service::select(['id', 'image', 'service_name', 'short_description'])->get();
        return Inertia::render('Client/Service/index', [
            'datas' => $pageDatas,
            'services' =>  $services
        ]);
    }

    public function serviceDetail($id)
    {

        $service = Service::find($id);
        $services = Service::where('id', '!=', $id)->select(['id', 'service_name', 'image'])->get();
        if (!$service) {
            return Inertia::render('Error/index');
        }

        return Inertia::render('Client/Service/ServiceDetail', [
            'service' => $service,
            'services' => $services
        ]);
    }

    public function contact()
    {
        return Inertia::render('Client/Contact/index');
    }

    public function blog()
    {
        $posts = Post::with(['post_categories' => function ($query) {
            $query->join('categories', 'categories.id', '=', 'post_categories.id_category');
        }])
            ->where('status', '=', 'Published')
            ->orderBy('published_at', 'DESC')
            ->get();

        return Inertia::render('Client/Blog/index', [
            'posts' => $posts,
        ]);
    }

    public function blogDetail($slug)
    {
        $post = Post::where('slug', '=', $slug)
            ->where('status', '=', 'Published')
            ->with(['post_categories', 'visits'])->get()->first();
        if (!$post) {
            return Inertia::render('Error/index');
        }
        $post->visitsCounter()->increment();
        $lastedPosts = Post::where('status', '=', 'Published')
            ->orderBy('published_at', 'DESC')
            ->where('id', '!=', $post['id'])
            ->select(['slug', 'thumbnail', 'published_at', 'title'])
            ->take(4)
            ->get();

        return Inertia::render('Client/Blog/BlogDetail', [
            'post' => $post,
            'lastedPosts' => $lastedPosts
        ]);
    }

    public function getMetaData($idPage)
    {
        $meta = Meta::where('id_page', '=', $idPage)
            ->select([
                'id AS id_meta',
                'meta_title',
                'meta_description'
            ])->first();
        return $meta;
    }

    public function getPageDataFromDB($pageTag)
    {
        $pageDatas = Page::where('pages.tag', '=', $pageTag)
            ->select(
                [
                    'pages.id AS id_page',
                    'pages.page_name',
                    'sections.id AS id_section',
                    'sections.ordinal_number',
                    'sections.section_name',
                    'sections.tag AS section_tag',
                    'resources.id AS id_resource',
                    'resources.title',
                    'resources.description',
                    'resources.button_label',
                    'resources.button_url',
                    'resources.id_asset',

                ]
            )
            ->join('sections', 'sections.id_page', '=', 'pages.id')
            ->join('resources', 'resources.id_section', '=', 'sections.id')
            ->get();

        $meta = $this->getMetaData($pageDatas[0]['id_page'] ?? "");
        $datas = $this->resourceMapping($pageDatas);
        $datas['meta'] = $meta;
        return $datas;
    }

    public function getAssetData()
    {
        $assets = Asset::select(['id', 'asset_name', 'asset_type', 'file'])->get();
        return $assets;
    }

    public function resourceMapping($data)
    {
        $pageDatas = [];
        foreach ($data as $value) {
            $pageDatas = [...$pageDatas, $value['section_tag'] => $value];
        }
        return $pageDatas;
    }
}
