<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\Section;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $homeId = Page::where('tag', 'home-page')->first()->id;
        $aboutId  = Page::where('tag', 'about-page')->first()->id;
        $serviceId  = Page::where('tag', 'service-page')->first()->id;


        $sections = [
            [
                'section_name' => 'Hero at home',
                'ordinal_number' => 1,
                'id_page' => $homeId,
                'tag' => 'home-hero'
            ],
            [
                'section_name' => 'Successul project',
                'ordinal_number' => 2,
                'id_page' => $homeId,
                'tag' => 'successful-project'
            ],
            [
                'section_name' => 'Capability',
                'ordinal_number' => 3,
                'id_page' => $homeId,
                'tag' => 'capability'
            ],
            [
                'section_name' => 'Service overview',
                'ordinal_number' => 4,
                'id_page' => $homeId,
                'tag' => 'service-overview'
            ],
            [
                'section_name' => 'Testimonial',
                'ordinal_number' => 5,
                'id_page' => $homeId,
                'tag' => 'testimonial'
            ],
            [
                'section_name' => 'Service header',
                'ordinal_number' => 1,
                'id_page' => $serviceId,
                'tag' => 'service'
            ],
            [
                'section_name' => 'About',
                'ordinal_number' => 1,
                'id_page' => $aboutId,
                'tag' => 'about'
            ],
            [
                'section_name' => 'Vision',
                'ordinal_number' => 2,
                'id_page' => $aboutId,
                'tag' => 'vision'
            ],
            [
                'section_name' => 'Mission',
                'ordinal_number' => 3,
                'id_page' => $aboutId,
                'tag' => 'mission'
            ],
            [
                'section_name' => 'History of development',
                'ordinal_number' => 4,
                'id_page' => $aboutId,
                'tag' => 'history-of-development'
            ],
        ];

        foreach ($sections as $section) {
            Section::create($section);
        }
    }
}
