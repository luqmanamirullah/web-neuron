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
            TechnologyCategorySeeder::class,
            TechnologySeeder::class,
            PortofolioTechnologySeeder::class,
            DeliverableSeeder::class,
            HandleSeeder::class,
            ServiceTechnologySeeder::class,
            ServiceKeySeeder::class,
            JobQualificationSeeder::class,
            JobSeeder::class,
            JobPlusValueSeeder::class,
            SkillRequirementSeeder::class,
            CtaContactSeeder::class,
            NeuronProgramSeeder::class,
            HomeSeeder::class,
            TestimonialSeeder::class,
            HeroTitleListSeeder::class,
            CertificateSeeder::class,
            PartnerSeeder::class,
            ServicePagesSeeder::class,
            AboutSeeder::class,
            MissionListSeeder::class,
            ValueListSeeder::class,
            DirectorListSeeder::class,
            ManagementStrategySeeder::class,
            ManagementStrategyListSeeder::class,
            ArticlePageSeeder::class,
            CareerPageSeeder::class,
        ]);
    }
}
