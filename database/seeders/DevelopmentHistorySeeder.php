<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\DevelopmentHistory;

class DevelopmentHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $histories = [
            [
                'year' => 2014,
                'history_description' => "Online Payment Integrator Cloud Microsoft Azure, Google, Amazon AWS Information Technology System Design Architect"
            ],
            [
                'year' => 2017,
                'history_description' => "Accredited Project Manager and Project Requirement Analyst Certified Informations System Security"
            ],
            [
                'year' => 2020,
                'history_description' => "Certified International Associations of Project Managers, Scrum Master Europe Business Value Oriented Project Manager Enterprise Resource Planning ERP UK ISO/ IEC 27001 2019 Auditor Century Link GDC: Data Center Facility Planning and Management Schneider"
            ],
            [
                'year' => 2022,
                'history_description' => "Financial Analyst and Investing Corporate Cyber Security Capability of Business Analyst - International Institute of Business Analyst (IIBA)"
            ],
            [
                'year' => 2023,
                'history_description' => "ISO/ IEC 27001 2022 Auditor"
            ],
        ];

        foreach ($histories as $history) {
            DevelopmentHistory::create($history);
        }
    }
}
