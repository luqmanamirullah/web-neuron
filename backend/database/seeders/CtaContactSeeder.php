<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CtaContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE cta_contact AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('cta_contact')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('cta_contact')->insert([
            'title' => 'Transform Today, Conquer Tomorrow',
            'desc' => 'Let us help you with your digital transformation to boost productivity and fortify your daily activities and business worth.',
            'link' => null,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
