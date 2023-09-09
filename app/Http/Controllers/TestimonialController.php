<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::all();
        return Inertia::render('Admin/Testimonial/index', [
            'testimonials' => $testimonials
        ]);
    }

    public function create(Request $request)
    {
        $validateTestimonial = $this->testimonialValidation($request);

        try {
            Testimonial::create($validateTestimonial);
            return redirect('/testimonials')->with('success', 'Testimonial has been added');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }



    public function update(Request $request, $id)
    {
        $updatedTestimonial = Testimonial::find($id);


        if (!$updatedTestimonial) {
            return back()->withErrors(['error' => 'Update testimonial failed, failed to find data to update']);
        }

        $newTestimonialData = $this->testimonialValidation($request);

        try {
            $updatedTestimonial->update($newTestimonialData);
            return redirect('/testimonials')->with('success', 'Testimonial has been updated');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function destroy($id)
    {
        $deletedTestimonial = Testimonial::find($id);
        if (!$deletedTestimonial) {
            return back()->withErrors(['error' => 'Update testimonial failed, failed to find data to update']);
        }

        try {
            $deletedTestimonial->delete();
            return back()->with('success', 'Testimonial has been deleted');
        } catch (QueryException $e) {
            return back()->withErrors(['error' => $e->errorInfo]);
        }
    }

    public function testimonialValidation($request)
    {
        $rules = [
            'name' => 'required|min:3',
            'position' => 'required|min:3',
            'quote' => 'required|min:6'
        ];

        $errorMessage = [
            'name.required' => 'Name is required',
            'name.min' => 'Name must be at least 3 character',
            'position.required' => 'Position is required',
            'position.min' => 'Position must be at least 3 character',
            'quote.required' => 'Quote is required',
            'quote.min' => 'Quote must be at least 6 character'
        ];
        return $request->validate($rules, $errorMessage);
    }
}
