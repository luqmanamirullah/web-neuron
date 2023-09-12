<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE users AUTO_INCREMENT=1');
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('users')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('users')->insert([
            [
                'firstname' => 'super',
                'lastname' => 'admin',
                'email' => 'superadmin@gmail.com',
                'password' => Hash::make("superadmin"),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'role_id' => '1'
            ],
            [
                'firstname' => 'admin',
                'lastname' => 'saja',
                'email' => 'admin@gmail.com',
                'password' => Hash::make("admin"),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'role_id' => '2'
            ],
            [
                'firstname' => 'HCM',
                'lastname' => '/HRD',
                'email' => 'HCM@gmail.com',
                'password' => Hash::make("hrc"),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'role_id' => '3'
            ],
            [
                'firstname' => 'Ikhsan',
                'lastname' => 'Nurul Haq',
                'email' => 'sannhaq@gmail.com',
                'password' => Hash::make("admin"),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'role_id' => '2'
            ]
        ]);
    }
}
