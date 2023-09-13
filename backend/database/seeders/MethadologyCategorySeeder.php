<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MethadologyCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE methodology_categories AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('methodology_categories')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('methodology_categories')->insert([
            [
                'category_icon' => null,
                'category_title' => 'How To Develope Software On Time',
                'category_name' => 'On Time',
                'flow_image' => 'http://127.0.0.1:8000/img/methodology/chart.png',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'category_icon' => null,
                'category_title' => 'How To Develope The Software Being Reliable & Zero Bug',
                'category_name' => 'Zero Bug',
                'flow_image' => 'http://127.0.0.1:8000/img/methodology/tes.webp',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
