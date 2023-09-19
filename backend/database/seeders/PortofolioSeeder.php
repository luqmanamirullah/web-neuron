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
                'our_solution' => 'Embark on a journey of achievement with the My SIMETRI web application. Our success is woven into every line of code, as weve harnessed cutting-edge technology to create a seamless queue management system. From intuitive touch screen registration to swift queue number allocation',
                'details' => 'Embark on a journey of achievement with the My SIMETRI web application. Our success is woven into every line of code, as weve harnessed cutting-edge technology to create a seamless queue management system. From intuitive touch screen registration to swift queue number allocation',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
