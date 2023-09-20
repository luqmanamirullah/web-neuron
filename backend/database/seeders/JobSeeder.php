<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE jobs AUTO_INCREMENT=1');
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('jobs')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('jobs')->insert([
            'name_position' => 'PYTHON PROGRAMMER',
            'location' => 'Bandung',
            'desc' => 'designing a tool that can be useful for improving the user experience on the website.',
            'responsibilities' => 'Maintain existing programs',
            'jobs_qualification_id' => '1',
            'link' => 'https://hrmis.neuron.id/recruitment/register/form',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
