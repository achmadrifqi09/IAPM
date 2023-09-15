<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        $validateCategory = $this->validationCategory($request);

        try {
            Category::create($validateCategory);
            return redirect('/manage-blogs')->with('success', 'Category has been added');
        } catch (QueryException $e) {

            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function update(Request $request, $id)
    {
        $updatedCategory = Category::find($id);

        if (!$updatedCategory) {
            return back()->withErrors(['error', "Can't find data to update"]);
        }

        $validateCategory = $this->validationCategory($request);

        try {
            $updatedCategory->update($validateCategory);
            return redirect('/manage-blogs')->with('success', 'Category has been updated');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        $deletedData = Category::find($id);

        if (!$deletedData) {
            return back()->withErrors(['error', "Can't find data to delete"]);
        }

        try {
            $deletedData->delete();
            return redirect('/manage-blogs')->with('success', 'Category has been deleted');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    public function validationCategory($request)
    {
        $rules = [
            'category_name' => 'required|min:3'
        ];

        $errorMessage = [
            'category_name.required' => 'Category name must be filled in',
            'category_name.min' => 'Category name must contain at least 3 character'
        ];

        return $request->validate($rules, $errorMessage);
    }
}
