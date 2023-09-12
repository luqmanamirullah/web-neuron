<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('ALTER TABLE roles AUTO_INCREMENT=1');
        
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('roles')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('roles')->insert([
            [
                'role_name' => 'super_admin',
                'desc' => 'Can access all',
                'created_at' => Carbon::now(),
            ],

            [
                'role_name' => 'admin',
                'desc' => 'Can access all',
                'created_at' => Carbon::now(),
            ],

            [
                'role_name' => 'HCM',
                'desc' => 'Can access career',
                'created_at' => Carbon::now(),
            ],
        ]);
    }
}
