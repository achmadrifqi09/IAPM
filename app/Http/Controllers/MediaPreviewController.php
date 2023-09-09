<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MediaPreviewController extends Controller
{
    public function index(Request $request)
    {
        $types =  [
            'video' => ['mp4', 'ogg'],
            'image' => ['jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'webp']
        ];


        $param = $request->query();
        $params = explode('/', $param['url']);

        $fileExtendsion = explode('.', $params[count($params) - 1]);
        $fileType = in_array($fileExtendsion[count($fileExtendsion) - 1], $types['image']) ? 'Image' : 'Video';


        return Inertia::render('Admin/MediaPreview/index', ['media' => $param, 'type' => $fileType]);
    }
}
