<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PortofolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE portofolios AUTO_INCREMENT=1');
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('portofolios')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('portofolios')->insert([
            [
                'name' => 'My Telkom',
                'category' => 'CRM App',
                'customer_name' => 'PT. Telkom Indonesia',
                'desc' => 'My.telkom.co.id (MyTelkom) adalah sebuah portal self-services dengan konsep zero touch point (mandiri atau tanpa diperantara petugas) untuk memudahkan dan memberikan ultimate experience bagi pelanggan',
                'link' => null,
                'image' => 'http://127.0.0.1:8000/img/portofolios/mytelkom.png',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'My Indihome',
                'category' => 'Mobile App',
                'customer_name' => 'PT.  Telekomunikasi Indonesia',
                'desc' => 'My IndiHome Apps adalah aplikasi yang diperuntukan untuk Customer Product IndiHome guna meningkatkan Customer Satisfaction dan Loyalitas Pelanggan Produk IndiHome TELKOM. My IndiHome Apps ini memberikan kemudahan dalam melakukan Feasibility indihome fiber, Self Registration, dan Tracking Order. Selain itu disediakan pula fitur Ticket Gangguan yang memungkinkan pelanggan meng-create Ticket Gangguan secara individu dan otomatis tanpa harus melakukan walkin ke Plasa ataupun call in ke 147. Layanan kepada pelanggan akan semakin optimal karena aplikasi juga terhubung secara langsung dengan technisian. Aplikasi ini juga tersedia untuk perangkat Android & IOS.',
                'link' => null,
                'image' => 'http://127.0.0.1:8000/img/portofolios/indihome.png',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'My Simetri',
                'category' => 'CRM App',
                'customer_name' => 'Telkom Indonesia',
                'desc' => 'My SIMETRI, merupakan aplikasi yang digunakan untuk sistem manajemen antrian berbasis Aplikasi Web. My SIMETRI dirancang tidak hanya sebagai alat antri tetapi juga dibuat sebagai pemercepat proses dan peningkatan kenyamanan terhadap konsumen yang datang bisa melakukan pendaftaran dengan cara mudah pada layar sentuh dan mendapatkan print out nomor antrian. Konsumen dapat mengetahui seberapa banyak antrian pada Display Antrian. Sehingga pihak Customer service pun akan dimudahkan dengan adanya tools untuk proses pelayanan kepada pelanggan.',
                'link' => null,
                'image' => 'http://127.0.0.1:8000/img/portofolios/MySimetri.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Telkomcel',
                'category' => 'CRM App',
                'customer_name' => 'PT.  Telekomunikasi Indonesia',
                'desc' => 'TELKOMCEL merupakan merek dagang dari layanan telekomunikasi mobile (seluler) yang diselenggarakan oleh Telekomunikasi Indonesia Internasional, S.A yang berkedudukan dan beroperasi di Timor Leste. Kami membantu TELKOMCEL dalam mengembangkan Aplikasi MyTelkomcel yaitu aplikasi yang memiliki kemampuan dasar untuk mendefinisikan pelanggan secara mandiri dan juga memiliki kemampuan untuk mengelola portofolio pelanggan berdasarkan produk dan layanan TELKOMCEL serta dapat mengakomodasikan layanan CRM seperti sales untuk menangkap order pelanggan terhadap layanan TELKOMCEL.',
                'link' => null,
                'image' => 'http://127.0.0.1:8000/img/portofolios/Telkomcel.jpg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
