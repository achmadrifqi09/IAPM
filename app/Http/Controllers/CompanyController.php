<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\DevelopmentHistory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\QueryException;

class CompanyController extends Controller
{
    public function index()
    {
        $histories = DevelopmentHistory::select(['id', 'year', 'history_description', 'image'])
            ->orderBy('year', 'DESC')
            ->get();
        $companyData = Company::first();

        return Inertia::render('Admin/Company/index', [
            'histories' => $histories,
            'companyData' => $companyData
        ]);
    }

    public function update(Request $request)
    {
        $validateData = $request->validate([
            '*' => 'required|min:10'
        ], [
            '*.required' => 'The field cannot be empty',
            '*.min' => array_key_first($request->input()) . ' ' . 'must contain at least 10 characters'
        ]);

        $company = Company::first();
        $company[array_key_first($request->input())] = $validateData[array_key_first($validateData)];
        $company->save();

        return back()->with('success', array_key_first($request->input()) . ' has been update');
    }

    public function historyAdd(Request $request)
    {
        $validateData = $this->validationHistoryDevelopment($request);

        if ($request->hasFile('image')) {
            $storedImage = $this->storeImage($request->file('image'));

            if ($storedImage === false) {
                return back()->withErrors(['error' => 'Service was not successfully found to run the update action']);
            }
            $validateData['image'] = $storedImage;
        }

        try {
            DevelopmentHistory::create($validateData);
            return back()->with('success', 'History development has been added');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function historyUpdate(Request $request, $id)
    {
        $updatedData = DevelopmentHistory::find($id);

        if (!$updatedData) {
            return back()->withErrors(['error', "Can't find data to update"]);
        }

        $validateData = $this->validationHistoryDevelopment($request);

        if ($request->hasFile('image')) {
            $this->deleteImage($updatedData['image']);
            $storedImage = $this->storeImage($request->file('image'));

            if ($storedImage === false) {
                return back()->withErrors(['error' => 'Service was not successfully found to run the update action']);
            }
            $validateData['image'] = $storedImage;
        }


        try {
            $updatedData->update($validateData);
            return back()->with('success', 'History development has been updated');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }


    public function historyDestroy($id)
    {
        $deletedData = DevelopmentHistory::find($id);

        if (!$deletedData) {
            return back()->withErrors(['error', "Can't find data to delete"]);
        }

        try {
            $this->deleteImage($deletedData['image']);
            $deletedData->delete();
            return back()->with('success', 'History development has been deleted');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function validationHistoryDevelopment($request)
    {
        $rules = [
            'year' => ['required', 'numeric', 'min:4'],
            'history_description' => ['required', 'min:10']
        ];
        $errorMessage = [
            'year.required' => 'Year must be filled in',
            'year.numeric' => 'Year must be in number format',
            'year.min' => 'Year must contain 4 characher',
            'history_description.required' => 'History description must be filled in',
            'history_description.min' => 'History description must contain at least 10 character'
        ];

        return $request->validate($rules, $errorMessage);
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
}
