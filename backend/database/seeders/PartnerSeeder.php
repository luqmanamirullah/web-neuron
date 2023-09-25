<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE partners AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('partners')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('partners')->insert([
            [
                'image' => 'http://127.0.0.1:8000/img/partner/bajradaya.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/bimulia.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/jabarenergi.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/jabarrekono.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/jasamarga.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/mandiri.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/mitratel.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/sigmasolusi.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/tekomindonesia.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/telin.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/telkomcel.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/partner/telkomsat.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
