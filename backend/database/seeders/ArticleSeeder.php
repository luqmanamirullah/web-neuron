<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE articles AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('articles')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('articles')->insert([
            [
                'title' => 'KAFKA Keajaiban Di Backend',
                'image' => 'http://127.0.0.1:8000/img/blog/kafka.jpeg',
                'desc' => 'Saat ini, semua orang yang menggunakan aplikasi Cloud mengharapkan respons real time.Dan Kafka adalah keajaiban di Backend',
                'body' => 'Apa itu KAFKA?, Apache Kafka merupakan platform terdistribusi untuk data streaming. Pada dasarnya, Apache Kafka merupakan sistem publish/subscribe messaging, dimana terdapat satu atau lebih sistem yang men-generate data untuk suatu topik tertentu secara real-time di Apache Kafka (disebut sebagai Producers).
                Kemudian, topik tersebut dapat dibaca oleh satu atau lebih sistem yang membutuhkan data-data dari topik tersebut secara real-time (disebut sebagai Consumers).',
                'author' => 'Fauzan',
                'user_id' => 1,
                'articles_categories_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'KAFKA Keajaiban Di Backend',
                'image' => 'http://127.0.0.1:8000/img/blog/kafka.jpeg',
                'desc' => 'Saat ini, semua orang yang menggunakan aplikasi Cloud mengharapkan respons real time.Dan Kafka adalah keajaiban di Backend',
                'body' => 'Apa itu KAFKA?, Apache Kafka merupakan platform terdistribusi untuk data streaming. Pada dasarnya, Apache Kafka merupakan sistem publish/subscribe messaging, dimana terdapat satu atau lebih sistem yang men-generate data untuk suatu topik tertentu secara real-time di Apache Kafka (disebut sebagai Producers).
                Kemudian, topik tersebut dapat dibaca oleh satu atau lebih sistem yang membutuhkan data-data dari topik tersebut secara real-time (disebut sebagai Consumers).',
                'author' => 'Fauzan',
                'user_id' => 1,
                'articles_categories_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'title' => 'KAFKA Keajaiban Di Backend',
                'image' => 'http://127.0.0.1:8000/img/blog/kafka.jpeg',
                'desc' => 'Saat ini, semua orang yang menggunakan aplikasi Cloud mengharapkan respons real time.Dan Kafka adalah keajaiban di Backend',
                'body' => 'Apa itu KAFKA?, Apache Kafka merupakan platform terdistribusi untuk data streaming. Pada dasarnya, Apache Kafka merupakan sistem publish/subscribe messaging, dimana terdapat satu atau lebih sistem yang men-generate data untuk suatu topik tertentu secara real-time di Apache Kafka (disebut sebagai Producers).
                Kemudian, topik tersebut dapat dibaca oleh satu atau lebih sistem yang membutuhkan data-data dari topik tersebut secara real-time (disebut sebagai Consumers).',
                'author' => 'Fauzan',
                'user_id' => 1,
                'articles_categories_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
