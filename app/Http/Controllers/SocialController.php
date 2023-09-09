<?php

namespace App\Http\Controllers;

use App\Models\Social;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class SocialController extends Controller
{

    public function store(Request $request)
    {
        $validateSocialMedia = $this->socialMediaValidation($request);


        try {
            Social::create($validateSocialMedia);
            return back()->with('success', 'Social media has been added');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function update(Request $request, $id)
    {
        $validateSocialMedia = $this->socialMediaValidation($request);
        $updatedSocialMedia = Social::find($id);

        if (!$updatedSocialMedia) {
            return back()->withErrors(['error' => 'Invalid action, data not found']);
        }
        
        try {
            $updatedSocialMedia->update($validateSocialMedia);
            return back()->with('success', 'Social media has been updated');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }


    public function destroy($id)
    {
        $deletedData = Social::find($id);

        if (!$deletedData) {
            return back()->withErrors(['errors' => 'Invalid action, data not found']);
        }

        try {
            $deletedData->delete();
            return back()->with('success', 'Social media has been deleted');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function socialMediaValidation($request)
    {
        $rules = [
            'social_type' => 'required|min:3',
            'username' => 'required|min:3',
            'link' => ['required', 'regex: /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/']
        ];

        $errorMessage = [
            'social_type.required' => 'Social media input type must be filled in',
            'social_type.min' => 'Social media type contains at least 3 characters',
            'username.rerquired' => 'Username must be filled in',
            'username.min' => 'Username / Profile name contains at least 3 characters',
            'link.required' => 'Link must be filled in',
            'link.regex' => 'Invalid link format'
        ];

        return $request->validate($rules, $errorMessage);
    }
}
