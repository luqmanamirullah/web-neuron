<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_pages', function (Blueprint $table) {
            $table->id();
            $table->string('hero_title');
            $table->string('hero_desc');
            $table->string('service_title');
            $table->string('service_subtitle');
            $table->string('technology_title');
            $table->string('technology_desc');
            $table->string('methodology_title');
            $table->string('methodology_subtitle');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_pages');
    }
}
