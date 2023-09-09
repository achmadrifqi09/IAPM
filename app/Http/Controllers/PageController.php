<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Page;
use App\Models\Resource;
use Illuminate\Database\QueryException;

class PageController extends Controller
{
    public function homeEditor()
    {
        $pageDatas = $this->resourceMapping($this->getPageDataFromDB('home-page'));
        $assets = $this->getAssetData();
        return Inertia::render('Admin/PageEditor/HomeEditor', [
            'datas' => $pageDatas,
            'assets' => $assets
        ]);
    }

    public function aboutEditor()
    {
        $pageDatas = $this->resourceMapping($this->getPageDataFromDB('about-page'));
        $assets = $this->getAssetData();
        return Inertia::render('Admin/PageEditor/AboutEditor', [
            'datas' => $pageDatas,
            'assets' => $assets
        ]);
    }

    public function serviceEditor()
    {
        $pageDatas = $this->resourceMapping($this->getPageDataFromDB('service-page'));

        return Inertia::render('Admin/PageEditor/ServiceEditor', [
            'datas' => $pageDatas,
        ]);
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

    public function update(Request $request)
    {
        $request->validate([
            '*.title' => 'required',
            '*.id_page' => 'required',
            '*.id_section' => 'required',
            '*.id_resource' => 'required',
            '*.ordinal_number' => 'required',
            '*.section_tag' => 'required'
        ]);


        if (!$this->checkDataInDB($request)) {
            return back()->withErrors(['error', 'There is data that is not available in the database']);
        }

        $datas = $request->input();
        try {
            $hashFails = false;
            foreach ($datas as $newDataValue) {
                $updateResourceStatus = $this->updateResource($newDataValue, $newDataValue['id_resource']);
                if (!$updateResourceStatus) {
                    $hashFails = true;
                }
            }
            $message = !$hashFails ?  'Page data has been updated' :
                'The data was successfully updated, but there was data that could not be updated';
            $pageId = $datas[array_key_first($request->input())]['id_page'];

            $urlRedirect =  $this->getRedirectUrl($pageId);
            return redirect($urlRedirect)->with('success', $message);
        } catch (QueryException) {
            return back()->withErrors(['error', 'Error while updating']);
        }
    }

    public function getRedirectUrl($pageId)
    {
        $page = Page::find($pageId);
        switch ($page['tag']) {
            case 'home-page':
                return '/pages/home-page';
            case 'about-page':
                return '/pages/about-page';
            case 'service-page':
                return '/pages/service-page';
        }
    }


    public function updateResource($newData, $id)
    {
        $updatedResource = Resource::find($id);

        if (!$updatedResource) {
            return false;
        }

        $updatedResource->update($this->formatingResourceField($newData));
        return true;
    }

    public function formatingSectionField($data)
    {
        return [
            'section_name' => $data['section_name'],
            'ordinal_number' => $data['ordinal_number'],
            'id_page' => $data['id_page'],
            'tag' => $data['section_tag']
        ];
    }


    public function formatingResourceField($data)
    {
        return [
            'title' => $data['title'],
            'description' => $data['description'],
            'button_label' => $data['button_label'],
            'button_url' => $data['button_url'],
            'id_asset' => $data['id_asset'],
            'id_page' => $data['id_page'],
            'id_section' => $data['id_section'],
        ];
    }

    public function checkDataInDB($request)
    {
        foreach ($request->input() as $updatedData) {
            $updatedData = Resource::find($updatedData['id_resource']);
            if (!$updatedData) {
                return false;
            }
        }
        return true;
    }
}
