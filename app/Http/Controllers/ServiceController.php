<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\QueryException;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::select(['service_name', 'image', 'short_description', 'id'])->get();
        return Inertia::render('Admin/Service/index', [
            'services' => $services
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Service/Form', [
            'mode' => 'create'
        ]);
    }

    public function store(Request $request)
    {
        $validatedService = $this->serviceValidation($request);

        if (!$request->hasFile('image')) {
            return back()->withErrors(['error' => 'Service Image must be filled in']);
        }
        $storedImage = $this->storeImage($request->file('image'));
        $validatedService['image'] = $storedImage;

        try {
            Service::create($validatedService);
            return back()->with('success', 'Service has been added');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function edit($id)
    {

        $updatedService = Service::find($id);

        if (!$updatedService) {
            return back()->withErrors(['error' => 'Service was not successfully found to run the update action']);
        }

        return Inertia::render('Admin/Service/Form', [
            'mode' => 'update',
            'service' => $updatedService
        ]);
    }

    public function update(Request $request, $id)
    {
        $updatedService = Service::find($id);

        if (!$updatedService) {
            return back()->withErrors(['error' => 'Service was not successfully found to run the update action']);
        }

        $newServiceData = $this->serviceValidation($request);

        if ($request->hasFile('image')) {
            $this->deleteImage($updatedService['image']);
            $storedImage = $this->storeImage($request->file('image'));

            if ($storedImage === false) {
                return back()->withErrors(['error' => 'Service was not successfully found to run the update action']);
            }
            $newServiceData['image'] = $storedImage;
        }

        try {
            $updatedService->update($newServiceData);
            return back()->with('success', 'Service has been updated');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function destroy($id)
    {
        $deletedService = Service::find($id);

        if (!$deletedService) {
            return back()->withErrors(['error' => 'Service was not successfully found to run the update action']);
        }

        try {
            $this->deleteImage($deletedService['image']);
            $deletedService->delete();
            return redirect('/service-products')->with('success', 'Service has been deleted');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function storeImage($image)
    {
        $fileName = time() . null . $image->getClientOriginalName();
        if ($image) {
            $image->storeAs('images', $fileName);
            return $fileName;
        }

        return false;
    }

    public function deleteImage($image)
    {
        if (Storage::exists('images/' . $image)) {
            Storage::delete('images/' . $image);
            return true;
        }
        return false;
    }

    public function serviceValidation($request)
    {
        return $request->validate([
            'service_name' => 'required|min:6',
            'short_description' => 'required',
            'description' => 'required'

        ], [
            'service_name.required' => 'Service name must be filled in',
            'service_name.min' => 'Service name must be at least 6 characters',
            'service_description.required' => 'Service description must be filled in'
        ]);
    }
}
