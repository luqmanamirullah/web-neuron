<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticlePageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE article_pages AUTO_INCREMENT=1');
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('article_pages')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('article_pages')->insert([
            'title' => 'Exploring New Horizons',
            'desc' => 'Embark on a journey of discovery with our captivating blog, where knowledge meets fascination, and curiosity becomes your compass.',
            'image' => 'http://127.0.0.1:8000/img/blog/blogpages.png',
            'cta_contact_id' => '1',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
