<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'IAPM Elinksolution',
            'email' => 'achmadrifqi09@gmail.com',
            'password' => bcrypt('IAPMadmin123')
        ]);
    }
}
