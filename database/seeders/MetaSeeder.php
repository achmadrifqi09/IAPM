<?php

namespace Database\Seeders;

use App\Models\Meta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Page;

class MetaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $homeId = Page::where('tag', 'home-page')->first()->id;
        $aboutId  = Page::where('tag', 'about-page')->first()->id;
        $serviceId  = Page::where('tag', 'service-page')->first()->id;

        $metas = [
            [
                'id_page' => $homeId,
                'meta_title' => 'PT IAPM Elinksolution',
                'meta_description' =>  "Business transformation in the field of technology which is one of the solutions for project management consultants, certification services and business analysis"
            ], [
                'id_page' => $aboutId,
                'meta_title' => 'About IAPM Elinksolution',
                'meta_description' =>  "Business transformation in the field of technology which is one of the solutions for project management consultants, certification services and business analysis"
            ], [
                'id_page' => $serviceId,
                'meta_title' => 'Our Service',
                'meta_description' =>  "Business transformation in the field of technology which is one of the solutions for project management consultants, certification services and business analysis"
            ]
        ];

        foreach ($metas as $value) {
            Meta::create($value);
        }
    }
}
