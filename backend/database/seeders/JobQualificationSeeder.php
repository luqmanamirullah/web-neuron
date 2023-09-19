<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class JobQualificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE jobs_qualification AUTO_INCREMENT=1');
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('jobs_qualification')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('jobs_qualification')->insert([
            'gender' => 'Man/Female',
            'domicile' => 'Bandung',
            'education' => 'S1',
            'major' => 'Informatics Engineering',
            'other' => 'Experience working in the IT world 1 year',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
