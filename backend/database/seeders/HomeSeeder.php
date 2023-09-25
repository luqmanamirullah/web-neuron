<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE home AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('home')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('home')->insert([
            'hero_title1' => 'Enhance Your Business:',
            'hero_title2' => 'With Neuronworks',
            'hero_title3' => 'Software Evolution',
            'hero_desc' => 'Where Vision Transforms into Code Empowering Your Digital Future',
            'hero-link' => null,
            'about_project' => '100+',
            'about_experience' => '15+',
            'about_desc' => 'Evolve with Neuronworks',
            'about_title' => 'Seamlessly achieving digital transformation.',
            'about_link' => null,
            'about_ilustration' => 'http://127.0.0.1:8000/img/home/Illustration.png',
            'neuron_program_id' => '1',
            'cta_contact_id' => '1',
            'title_service' => 'Experience Top-Tier Solutions',
            'title_project' => 'Amazing Transformation Achievements',
            'title_product' => 'Revealing Digital Brilliance',
            'title_partner' => 'Over 100+ businesses have flourished with Neuron by their side',
            'title_articles' => 'Delve into Our Compelling Articles ',
            'title_certificate' => 'A Testament to Trust and Reliability',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
