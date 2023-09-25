<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

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
            [
                'name' => 'Web Applcation',
                'desc' => 'Experience the transformation of your digital concepts into captivating reality with NeuronWorks innovative web application solutions. From initial ideation to flawless execution, we specialize in crafting user experiences that are both engaging and functional. Elevate your online footprint with our responsive, elegant, and feature-rich web applications, designed to enhance your digital presence and meet diverse user needs.',
                'image' => 'http://127.0.0.1:8000/img/service/webSolution.png',
                'isTopService' => 'true',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Mobile Application',
                'desc' => 'Reach your customers where they are with NeuronWorks groundbreaking mobile application solutions. Embrace the mobile era by leveraging our expertise in optimizing solutions for various platforms. Our designs blend aesthetic appeal with advanced functionality, ensuring your mobile app becomes an irresistible magnet for user engagement.',
                'image' => 'http://127.0.0.1:8000/img/service/mobileSolution.png',
                'isTopService' => 'true',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Workflow Management System',
                'desc' => 'NeuronWorks Workflow Management System (WMS) is a software solution that helps organizations to manage and automate their business processes. It is a powerful tool that enables organizations to define, execute, monitor and refine their workflows. It is a flexible and scalable solution that can be customized to meet the needs of any organization.',
                'image' => 'http://127.0.0.1:8000/img/service/wmsSolution.png',
                'isTopService' => 'true',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'System Integration',
                'desc' => 'NeuronWorks System Integration services help you integrate multiple systems and applications in order to support your business processes and achieve your business goals. We have the expertise to integrate diverse systems and applications, including legacy systems, to help you achieve optimal business performance.',
                'image' => 'http://127.0.0.1:8000/img/service/siSolution.png',
                'isTopService' => 'true',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Bussiness Intelligence',
                'desc' => 'NeuronWorks Business Intelligence (BI) solutions help you make better business decisions by providing you with the right information at the right time. We have the expertise to design and implement BI solutions that will help you gain valuable insights into your business and make better decisions.',
                'image' => 'http://127.0.0.1:8000/img/service/biSolution.png',
                'isTopService' => 'true',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}