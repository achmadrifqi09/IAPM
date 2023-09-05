<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class WebAssetController extends Controller
{
    public function index()
    {
        $files = File::all();
        return Inertia::render('Admin/Asset/index', [
            'files' => $files
        ]);
    }

    public function create(Request $request)
    {

        $validatedAsset = $this->validationAsset($request);

        if (!$request->hasFile('file')) {
            return back()->withErrors(['error' => 'File must be filled in']);
        }

        $assetFile = $this->storeFile($request->file('file'), $request->file_type);

        $validatedAsset['file'] = $assetFile;
        File::create($validatedAsset);

        return redirect('/web-assets')->with('success', 'Asset file has been added');
    }

    public function update(Request $request, $id)
    {
        $updatedAsset = File::find($id);

        if (!$updatedAsset) {
            return back()->withErrors(['error' => 'Update web asset failed, failed to find data to update']);
        }

        $validatedAsset = $this->validationAsset($request);
        if ($request->hasFile('file')) {
            $deleteAssetStatus = $this->deleteFile($updatedAsset->file);
            if ($deleteAssetStatus) {
                $assetFile = $this->storeFile($request->file('file'), $request->file_type);
                $validatedAsset['file'] = $assetFile;
            } else {
                return back()->withErrors(['error' => "Can't find the old asset that will be updated"]);
            }
        } else {
            $validatedAsset['file'] = $request->asset_file;
        }

        $updatedAsset->update($validatedAsset);
        return redirect('/web-assets')->with('success', 'Asset has been updated');
    }

    public function storeFile($file, $fileType)
    {
        $fileName = time() . null . $file->getClientOriginalName();
        if ($fileType === 'Image') {
            $file->storeAs('images', $fileName);
            return $fileName;
        } else if ($fileType === 'Video') {
            $file->storeAs('videos', $fileName);
            return $fileName;
        }
        return false;
    }

    public function deleteFile($file)
    {
        if (Storage::exists('images/' . $file)) {
            Storage::delete('images/' . $file);
            return true;
        } else if (Storage::exists('videos/' . $file)) {
            Storage::delete('videos/' . $file);
            return true;
        }
        return false;
    }

    public function destroy($id)
    {
        $deletedAsset = File::find($id);

        if (!$deletedAsset) {
            return back()->withErrors(['error' => 'Web asset was not successfully found to run the delete action']);
        }

        $this->deleteFile($deletedAsset->file);
        $deletedAsset->delete();
        return back()->with('success', 'Web Asset has been deleted');
    }

    public function validationAsset($request)
    {
        $rules = [
            'file_name' => 'required|min:3',
            'file_type' => ['required', 'in:Video,Image']
        ];

        $errorMessage = [
            'file_name.required' => 'Asset filename is requried',
            'file_name.min' => 'Asset filename must be at least 3 characters',
            'file_type.required' => 'File type is requried',
        ];
        return $request->validate($rules, $errorMessage);
    }
}
