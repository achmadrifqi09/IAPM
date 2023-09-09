<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::create([
            'vision' => 'The vision of IAPM e-Link Solution Indonesia is "Making IAPM e-Link Solution Indonesia a reliable partner with global solutions in the field of Project Management, Business Analysis, and Information Technology Management that are quality and reliable"',
            'mission' => 'IAPM e-Link Solution Indonesia mission is "Establish harmonious cooperation with investors, clients and partners, improving skills, interpretation, humanist personnel, honest, transparent, educate clients, provide analysis of handling Project, Business and Information Technology problems in a manner Fast and precise, prioritizing the quality of service solutions. Framework implementation internationally certified: International Association of Project Managers (IAPM) Europe, International Institute of Business Analyst (IIBA) and ISO/IEC standardization 27001"',
            'description' => 'IAPM e-Link Solution Indonesia is the company business transformation professionals in the field of Information Technology become a solution company project management consultants, certification services, business analysts, and of course still is a reliable consulting company in the field of information technology that became the core business of the corporation a decade ago. Business transformation carried out By applying an international standard framework to each service, Thus the experience of the solution provided is ensured under Industry standardization is global.',
        ]);
    }
}
