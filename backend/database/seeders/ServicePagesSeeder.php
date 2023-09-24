<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicePagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE service_pages AUTO_INCREMENT=1');
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('service_pages')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('service_pages')->insert([
            'hero_title' => 'We Create Reliable Software',
            'hero_desc' => 'Embark on a journey of boundless possibilities, where the seamless integration of cutting-edge Information Technology solutions transforms your daily tasks into effortless accomplishments.',
            'service_title' => 'Our Services',
            'service_subtitle' => 'Elevate Your Business with Superior Solutions',
            'technology_title' => 'Technology We Work On',
            'technology_desc' => 'Our team thrives on the pulse of the latest tech and best practices, crafting digital solutions that transcend the ordinary',
            'methodology_title' => 'Our Methodology',
            'methodology_subtitle' => 'Crafting Success with Precision',
            'cta_contact_id' => '1',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
