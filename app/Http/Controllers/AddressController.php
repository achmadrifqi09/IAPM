<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;
use Illuminate\Database\QueryException;

class AddressController extends Controller
{
    public function store(Request $request)
    {
        $validateAddress = $this->addressValidation($request);

        try {
            Address::create($validateAddress);
            return back()->with('success', 'Address has been added');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function update(Request $request, $id)
    {
        $validateAddress = $this->addressValidation($request);
        $updatedAddress = Address::find($id);

        if (!$updatedAddress) {
            return back()->withErrors(['error' => 'Invalid action, data not found']);
        }

        try {
            $updatedAddress->update($validateAddress);
            return back()->with('success', 'Address has been updated');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function destroy($id)
    {
        $deletedAddress = Address::find($id);

        if (!$deletedAddress) {
            return back()->withErrors(['error' => 'Invalid action, data not found']);
        }


        try {
            $deletedAddress->delete();
            return back()->with('success', 'Address has been deleted');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function addressValidation($request)
    {
        return $request->validate([
            'address' => 'required|min:15',
        ], [
            'address.required' => 'Address must be filled in',
            'address.min' => 'The address must have at least 15 characters'
        ]);
    }
}
