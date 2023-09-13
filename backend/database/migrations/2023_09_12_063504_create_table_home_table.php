<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableHomeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home', function (Blueprint $table) {
            $table->id();
            $table->string('hero_title1');
            $table->string('hero_title2');
            $table->string('hero_desc');
            $table->string('hero-link');
            $table->integer('about_project');
            $table->integer('about_experience');
            $table->string('about_desc');
            $table->string('about_title');
            $table->string('about_link');
            $table->string('about_ilustration');
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
        Schema::dropIfExists('home');
    }
}
