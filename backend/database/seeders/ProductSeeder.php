<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE products AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('products')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('products')->insert([
            [
                'name' => 'MDOOR HRMIS',
                'subtitle' => 'HR apps to manage your resource easily',
                'link' => 'https://doorhrm.com/',
                'desc' => 'A smart application designed to streamline and optimize HR operations, while simultaneously enhancing employee performance amidst the challenges posed by the COVID-19 pandemic, is crucial to achieving the overarching vision and...',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'SMS MERDEKA',
                'subtitle' => 'Blasting your SMS easily',
                'link' => null,
                'desc' => 'In a fast-paced world where communication is paramount, a reliable and efficient text message app stands as an essential tool that bridges distances and connects individuals seamlessly. Imagine a platform that transcends time zones and geographical boundaries,',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
