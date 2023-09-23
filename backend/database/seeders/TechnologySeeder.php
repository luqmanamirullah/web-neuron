<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE technologies AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('technologies')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('technologies')->insert([
            [
                'name' => 'Flutter',
                'icon' => 'http://127.0.0.1:8000/img/technologies/flutter.png',
                'technology_category_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Fast Api',
                'icon' => 'http://127.0.0.1:8000/img/technologies/fastapi.png',
                'technology_category_id' => '2',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Postgre SQL',
                'icon' => 'http://127.0.0.1:8000/img/technologies/postgre.png',
                'technology_category_id' => '3',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'AWS Web Service',
                'icon' => 'http://127.0.0.1:8000/img/technologies/AWS Web Service.png',
                'technology_category_id' => '4',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
