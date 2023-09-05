<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File as FacadesFile;
use Illuminate\Support\Facades\Storage;

class AssetRoutesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke($asset)
    {
        if (FacadesFile::exists(storage_path('app/images/' . $asset))) {
            $path = "images/$asset";
            return response()->file(
                Storage::path($path)
            );
        } else if (FacadesFile::exists(storage_path('app/images/' . $asset))) {
            $path = "videos/$asset";
            return response()->file(
                Storage::path($path)
            );
        }
    }
}
