<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE testimonial AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('testimonial')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('testimonial')->insert([
            [
                'desc' => '“ Delighted with Neuronworks! Timely delivery, strong tech support, clear communication. Theyre more than developers – trusted consultants who understand our needs ”',
                'name' => 'Tennie Chrisantiana',
                'star' => '5',
                'job' => 'Senior Engineer Billing & Reassurance at Telin Malaysia',
                'image' => 'http://127.0.0.1:8000/img/home/profile.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'desc' => '“ Neuronworks provided us with top-notch development services. Their expertise and dedication to our project were exceptional. Highly recommended. ”',
                'name' => 'John Doe',
                'star' => '4',
                'job' => 'CEO at XYZ Company',
                'image' => 'http://127.0.0.1:8000/img/home/profile.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'desc' => '“ We had a great experience working with Neuronworks. Their team is highly skilled and professional. We look forward to future collaborations. ”',
                'name' => 'Jane Smith',
                'star' => '3',
                'job' => 'Marketing Manager at ABC Corp',
                'image' => 'http://127.0.0.1:8000/img/home/profile.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'desc' => '“ Neuronworks is a reliable partner for our development needs. Their team consistently delivers high-quality solutions. We appreciate their expertise. ”',
                'name' => 'Alice Johnson',
                'star' => '2',
                'job' => 'Product Manager at Tech Innovators Inc.',
                'image' => 'http://127.0.0.1:8000/img/home/profile.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'desc' => '“ Exceptional service from Neuronworks! They go above and beyond to meet our requirements and deadlines. Highly satisfied with their work. ”',
                'name' => 'Michael Brown',
                'star' => '1',
                'job' => 'CTO at Global Tech Solutions',
                'image' => 'http://127.0.0.1:8000/img/home/profile.png',
                'home_id' => '1',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
