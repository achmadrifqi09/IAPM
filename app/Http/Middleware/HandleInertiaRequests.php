<?php

namespace App\Http\Middleware;

use App\Models\Address;
use App\Models\Contact;
use App\Models\Social;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $contacts = Contact::select(['contact_type', 'contact'])->get();
        $addresses = Address::select(['address'])->get();
        $socials = Social::select(['link'])->get();
        return array_merge(parent::share($request), [
            'attributes' => [
                'contacts' => $contacts,
                'addresses' => $addresses,
                'socials' => $socials
            ],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
            ],
        ]);
    }
}
