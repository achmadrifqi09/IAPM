<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientPageController extends Controller
{
    public function home()
    {
        $pageDatas = $this->resourceMapping($this->getPageDataFromDB('home-page'));
        $assets = $this->getAssetData();

        return Inertia::render('Client/Home/index', [
            'datas' => $pageDatas,
            'assets' => $assets
        ]);
    }

    public function about()
    {
        $pageDatas = $this->resourceMapping($this->getPageDataFromDB('about-page'));
        $assets = $this->getAssetData();
        return Inertia::render('Client/About/index', [
            'datas' => $pageDatas,
            'assets' => $assets
        ]);
    }

    public function service()
    {
        $pageDatas = $this->resourceMapping($this->getPageDataFromDB('service-page'));
        return Inertia::render('Client/Service/index', [
            'datas' => $pageDatas,

        ]);
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


    public function getPageDataFromDB($pageTag)
    {
        $pageDatas = Page::where('pages.tag', '=', $pageTag)
            ->select(
                [
                    'pages.id AS id_page', 'pages.page_name', 'sections.id AS id_section', 'sections.ordinal_number', 'sections.section_name', 'sections.tag AS section_tag', 'resources.id AS id_resource',
                    'resources.title', 'resources.description', 'resources.button_label', 'resources.button_url', 'resources.id_asset'
                ]
            )
            ->join('sections', 'sections.id_page', '=', 'pages.id')
            ->join('resources', 'resources.id_section', '=', 'sections.id')
            ->get();
        return $pageDatas;
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
