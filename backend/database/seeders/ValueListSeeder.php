<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ValueListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE value_lists AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('value_lists')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('value_lists')->insert([
            [
                'title' => 'INNOVATION FOR SOLUTIONS',
                'desc' => ' Every challenge is an opportunity, and every solution is a step toward progress.',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'CUSTOMER SATISFACTION',
                'desc' => 'Delivering Professional Service with a Focus on Win-Win Solutions, Ensuring Rapid Responses within 24 Hours.',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'RELIABLE APPLICATION',
                'desc' => 'We are committed to always focusing and being disciplined in adhering to scientific principles in developing reliable software to create zero-bug software.',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'EFFECTIVE TEAMWORK',
                'desc' => 'An Environment of Collaborative Excellence, Mutual Respect, and Common Objectives',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'INNOVATE IN TECHNOLOGICAL ADVANCES',
                'desc' => 'Explore emerging technologies and ideate creative solutions.',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'RESPONSIBILITY AND  PRIORITY IN EVERY PROJECT',
                'desc' => 'Accountable for every aspect of a project',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
