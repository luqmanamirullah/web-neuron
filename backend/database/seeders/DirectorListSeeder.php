<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DirectorListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE director_lists AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('director_lists')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('director_lists')->insert([
            [
                'image' => 'http://127.0.0.1:8000/img/about/director.png',
                'name' => 'John Smith',
                'position' => 'Direktur Utama',
                'link' => 'https://www.linkedin.com/home',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/about/director.png',
                'name' => 'Susan Johnson',
                'position' => 'Wakil Direktur Utama',
                'link' => 'https://www.linkedin.com/home',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/about/director.png',
                'name' => 'Michael Davis',
                'position' => 'Direktur Keuangan',
                'link' => 'https://www.linkedin.com/home',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/about/director.png',
                'name' => 'Lisa Rodriguez',
                'position' => 'Direktur Pemasaran',
                'link' => 'https://www.linkedin.com/home',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'image' => 'http://127.0.0.1:8000/img/about/director.png',
                'name' => 'Robert White',
                'position' => 'Direktur Sumber Daya Manusia',
                'link' => 'https://www.linkedin.com/home',
                'about_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
