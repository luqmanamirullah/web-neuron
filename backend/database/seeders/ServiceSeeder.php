<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE services AUTO_INCREMENT=1');
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('services')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('services')->insert([
            'name' => 'Web Applcation Solution',
            'desc' => 'Experience the transformation of your digital concepts into captivating reality with NeuronWorks innovative web application solutions. From initial ideation to flawless execution, we specialize in crafting user experiences that are both engaging and functional. Elevate your online footprint with our responsive, elegant, and feature-rich web applications, designed to enhance your digital presence and meet diverse user needs.',
            'image' => 'http://127.0.0.1:8000/img/service/web.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
