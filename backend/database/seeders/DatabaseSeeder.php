<?php

namespace Database\Seeders;

use Database\Seeders\PortofolioSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            PortofolioSeeder::class,
            ProductSeeder::class,
            ArticleCategorySeeder::class,
            ArticleSeeder::class,
            MethadologyCategorySeeder::class,
            ServiceSeeder::class,
            TechnologySeeder::class,
            PortofolioTechnologySeeder::class,
            DeliverableSeeder::class,
            ServiceTechnologySeeder::class,
            ServiceKeySeeder::class,
        ]);
    }
}
