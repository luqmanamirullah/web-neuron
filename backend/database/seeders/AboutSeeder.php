<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE about AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('about')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('about')->insert([
            'hero_title' => 'Transform Your Idea Into Best Product Digital Solutions',
            'hero_desc' => 'PT Neuronworks Indonesia: Your IT Solution Partner. From inception to impact, we drive business forward in the rapidly evolving tech landscape. With 100+ successful national and regional projects, including international clients like Telkomcel Timor Leste and Telin Malaysia."',
            'hero_image' => 'http://127.0.0.1:8000/img/about/home_image.jpg',
            'activity_image' => 'http://127.0.0.1:8000/img/about/Neuron Activity.png',
            'vision_title' => 'Our Vision',
            'vision_subtitle' => 'Pioneering the Future of Digital Excellence',
            'vision_desc' => 'Improving customer performance by making improvements. Improvements and progress in all corners of the customers business processes through superior and best IT solutions.',
            'vision_image' => 'http://127.0.0.1:8000/img/about/vission_image.jpg',
            'mission_title' => 'Our Missions',
            'mission_subtitle' => 'Fueling Digital Innovation',
            'mission_desc' => 'Discover our companys core missions that drive us forward. From empowering innovation to fostering sustainability, explore how were dedicated to making a positive impact on our world:',
            'mission_image' => 'http://127.0.0.1:8000/img/about/mission_image.jpg',
            'value_title' => 'Our Values',
            'value_subtitle' => 'Foundation of Our Core Values',
            'director_title' => 'Our Great Founder',
            'director_subtitle' => 'Board of Directors',
            'strategic_title' => 'Our Strategic Plan for Management',
            'strategic_subtitle' => 'Navigating the Path to Software Excellence',
            'cta_contact_id' => '1',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
