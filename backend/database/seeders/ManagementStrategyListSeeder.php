<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ManagementStrategyListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE management_strategy_list AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('management_strategy_list')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('management_strategy_list')->insert([
            [
                'title' => 'Lean Operations, Mean Savings',
                'desc' => 'Streamlining Processes for Maximum Efficiency',
                'management_strategy_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Time is Money',
                'desc' => 'Maximizing Efficiency for Greater Value',
                'management_strategy_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Quality Unleashed',
                'desc' => 'Elevating Excellence in Everything We Do',
                'management_strategy_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Manage the unit cost of software development',
                'desc' => 'Maximize Efficiency, Minimize Costs',
                'management_strategy_id' => '2',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Value Maximization',
                'desc' => 'Increase your Return on Investment',
                'management_strategy_id' => '2',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Transparency and Accountability',
                'desc' => 'Building Trust through Openness and Responsibility',
                'management_strategy_id' => '2',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Process Optimization',
                'desc' => 'Enhancing Efficiency, Elevating Excellence',
                'management_strategy_id' => '3',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Standardized Operations',
                'desc' => 'Consistency and Quality at Every Step',
                'management_strategy_id' => '3',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'User-Centric Support',
                'desc' => 'Your success is our Top Priority',
                'management_strategy_id' => '3',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Understanding the implementation of technology',
                'desc' => 'Delving Deep into Effortless Integration',
                'management_strategy_id' => '3',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Skill-Centric Workforce',
                'desc' => 'Empowering Excellence at Every Level',
                'management_strategy_id' => '4',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Innovative Culture',
                'desc' => 'Fostering Boundless Creativity and Progress',
                'management_strategy_id' => '4',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Technology Exploration',
                'desc' => 'Pioneering the Digital Frontier',
                'management_strategy_id' => '4',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Mastery of Enabling Technologies',
                'desc' => 'Fostering Limitless Potential',
                'management_strategy_id' => '4',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
