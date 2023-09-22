<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Contact;
use App\Models\Social;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebAttributeController extends Controller
{
    public function index()
    {
        $contacts = Contact::select(['id', 'contact', 'contact_type', 'primary_contact'])->get();
        $addresses = Address::select(['id', 'address'])->get();
        $socials = Social::select(['id', 'username', 'social_type', 'link'])->get();

        return Inertia::render('Admin/WebAttribute/index', [
            'contacts' => $contacts,
            'addresses' => $addresses,
            'socials' => $socials
        ]);
    }
}
