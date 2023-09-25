<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NeuronProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE neuron_programs AUTO_INCREMENT=1');

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('neuron_programs')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('neuron_programs')->insert([
            'title' => 'NEURON 3.0: Ignite Your Leadership Journey',
            'desc' => 'Experience NEURON 3.0, the hub of innovation. We dont just reshape projects; we empower individuals to lead – themselves, their teams, and our business. Uncover your potential in our dynamic, forward-thinking Neuronworks environment – where together, we craft the future.',
            'image' => 'https://www.youtube.com/embed/Zvc3DgDhzhw',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
