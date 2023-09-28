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
        $contactId  = Page::where('tag', 'contact-page')->first()->id;
        $blogId  = Page::where('tag', 'blog-page')->first()->id;

        $metas = [
            [
                'id_page' => $homeId,
                'meta_title' => 'Home',
                'meta_description' =>  "Business transformation in the field of technology which is one of the solutions for project management consultants, certification services and business analysis",
                'keywords' => 'Business Analyst, Project Management IT Management, International Training and Certification'
            ], [
                'id_page' => $aboutId,
                'meta_title' => 'About IAPM Elinksolution',
                'meta_description' =>  "Business transformation in the field of technology which is one of the solutions for project management consultants, certification services and business analysis",
                'keywords' => 'Business Analyst, Project Management IT Management, International Training and Certification'
            ], [
                'id_page' => $serviceId,
                'meta_title' => 'Our Service',
                'meta_description' =>  "Business transformation in the field of technology which is one of the solutions for project management consultants, certification services and business analysis",
                'keywords' => 'Business Analyst, Project Management IT Management, International Training and Certification'
            ],
            [
                'id_page' => $contactId,
                'meta_title' => 'Contact',
                'meta_description' =>  "Find out more about IAPM elinksolution with the contact listed",
                'keywords' => 'IAPM elinksolution contact'
            ],
            [
                'id_page' => $blogId,
                'meta_title' => 'Blog',
                'meta_description' =>  "Find information related to Business Analyst, Project Management IT Management, International Training and Certification",
                'keywords' => 'Where to find business, project management and technology information'
            ],
        ];

        foreach ($metas as $value) {
            Meta::create($value);
        }
    }
}
