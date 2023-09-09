<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\DevelopmentHistory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([CompanySeeder::class, DevelopmentHistorySeeder::class, PageSeeder::class, SectionSeeder::class, ResourceSeeder::class]);
    }
}
