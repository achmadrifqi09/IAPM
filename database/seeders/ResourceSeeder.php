<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\Section;
use App\Models\Resource;

class ResourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $homeId = Page::where('tag', 'home-page')->first()->id;
        $aboutId  = Page::where('tag', 'about-page')->first()->id;
        $serviceId  = Page::where('tag', 'service-page')->first()->id;

        $resources = [
            [
                'title' => 'Creating ideas, innovations in Business and Technology within Global Frameworks!',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.',
                'button_label' => 'Discover a Service',
                'button_url' => '/services',
                'id_page' => $homeId,
                'id_section' => Section::where('tag', 'home-hero')->first()->id
            ],
            [
                'title' => 'Successful Project & Business Lecturing',
                'id_page' => $homeId,
                'id_section' => Section::where('tag', 'successful-project')->first()->id
            ],
            [
                'title' => 'Technology is important for your business development',
                'description' => 'Including Global Framework certified, those are key point to drive your business Growth exponentially',
                'id_page' => $homeId,
                'id_section' => Section::where('tag', 'capability')->first()->id
            ],
            [
                'title' => 'Services We Offer',
                'description' => 'We provide a variety of services that are integrated with the global framework',
                'button_label' => 'Explore All',
                'button_url' => '/services',
                'id_page' => $homeId,
                'id_section' => Section::where('tag', 'service-overview')->first()->id
            ],
            [
                'title' => 'What do they say about us?',
                'id_page' => $homeId,
                'id_section' => Section::where('tag', 'testimonial')->first()->id
            ],
            [
                'title' => 'Our Service',
                'description' => 'Business transformation carried out By applying an international standard framework to each service, Thus the experience of the solution provided is ensured in accordance with Global industry standardization.',
                'id_page' => $serviceId,
                'id_section' => Section::where('tag', 'service')->first()->id
            ],
            [
                'title' => 'About IAPM Elinksolution',
                'id_page' => $aboutId,
                'id_section' => Section::where('tag', 'about')->first()->id
            ],
            [
                'title' => 'Vision',
                'id_page' => $aboutId,
                'id_section' => Section::where('tag', 'vision')->first()->id
            ],
            [
                'title' => 'Mission',
                'id_page' => $aboutId,
                'id_section' => Section::where('tag', 'mission')->first()->id
            ],
            [
                'title' => 'History Of Development',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'id_page' => $aboutId,
                'id_section' => Section::where('tag', 'history-of-development')->first()->id
            ],
        ];

        foreach ($resources as $resource) {
            Resource::create($resource);
        }
    }
}
