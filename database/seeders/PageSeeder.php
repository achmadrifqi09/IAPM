<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Page;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pages = [
            ['page_name' => 'Home', 'tag' => 'home-page'],
            ['page_name' => 'About Us', 'tag' => 'about-page'],
            ['page_name' => 'Service Product', 'tag' => 'service-page'],
        ];
        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
