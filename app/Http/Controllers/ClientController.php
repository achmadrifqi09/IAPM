<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::select(['id', 'client_name', 'image'])->get();
        return Inertia::render('Admin/Client/index', [
            'clients' => $clients
        ]);
    }

    public function store(Request $request)
    {
        $validatedClient = $this->validateClientRequest($request);

        if ($request->file('image')->getSize() > 1000000) return back()->withErrors(['Maximum image file size is 1 Mb']);

        try {
            $validatedClient['image'] =  $this->storeImage($request->file('image'));
            Client::create($validatedClient);

            return redirect('/clients')->with('success', 'Client data has been added');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        $client = Client::find($id);
        if (!$client) return back()->withErrors(['error' => 'Failed to update, data not found']);

        $validatedClient = $this->validateClientRequest($request);

        if ($request->hasFile('image') && $request->file('image')->getSize() > 1000000) return back()->withErrors(['Maximum image file size is 1 Mb']);

        try {
            if ($request->hasFile('image')) {
                $this->deleteImage($client['image']);
                $validatedClient['image'] =  $this->storeImage($request->file('image'));
            }
            $client->update($validatedClient);

            return redirect('/clients')->with('success', 'Client data has been added');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        $client = Client::find($id);
        if (!$client) return back()->withErrors(['error' => 'Failed to delete, data not found']);


        try {
            $this->deleteImage($client['image']);
            $client->delete();
            return redirect('/clients')->with('success', 'Client has been deleted');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }
    public function validateClientRequest($request)
    {
        $rules = [
            'client_name' => ['required', 'min:3'],
            'image' => ['required']
        ];

        $errorMessage = [
            'client_name.required' => 'Client name must be filled in',
            'clien_name.min' => 'Client name must be contain at least 3 character',
            'image.required' => 'Logo must be filled in',
        ];

        return $request->validate($rules, $errorMessage);
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
}
