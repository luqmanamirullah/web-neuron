<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CertificateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE certificate AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('certificate')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('certificate')->insert([
            [
                'image' => 'http://127.0.0.1:8000/img/certificate/Award Logo.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/certificate/Award Logo.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/certificate/Award Logo.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
