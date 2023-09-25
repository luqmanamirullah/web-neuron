<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CareerPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE career_pages AUTO_INCREMENT=1');
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('career_pages')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('career_pages')->insert([
            'title' => 'Ready to Jump on Board ?',
            'desc' => 'Join Neuron in creating innovative IT solutions in Indonesia and building a connected tomorrow. Together, lets make a difference!',
            'image' => 'http://127.0.0.1:8000/img/career/careerimage.png',
            'cta_contact_id' => '1',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
