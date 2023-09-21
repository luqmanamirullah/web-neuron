<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class JobPlusValueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE job_plus_value AUTO_INCREMENT=1');
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('job_plus_value')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('job_plus_value')->insert([
            [
                'name' => 'Memiliki sertifikat',
                'jobs_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Minimal presiden',
                'jobs_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
