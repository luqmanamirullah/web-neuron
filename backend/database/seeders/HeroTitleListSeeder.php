<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HeroTitleListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE hero_title_list AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('hero_title_list')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('hero_title_list')->insert([
            [
                'title' => 'Simplify',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Growth',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'Improve',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
