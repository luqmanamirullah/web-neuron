<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('about', function (Blueprint $table) {
            $table->id();
            $table->string('hero_title');
            $table->text('hero_desc');
            $table->string('hero_image');
            $table->string('activity_image');
            $table->string('vision_title');
            $table->string('vision_subtitle');
            $table->string('vision_desc');
            $table->string('vision_image');
            $table->string('mission_title');
            $table->string('mission_subtitle');
            $table->string('mission_desc');
            $table->string('mission_image');
            $table->string('value_title');
            $table->string('value_subtitle');
            $table->string('director_title');
            $table->string('director_subtitle');
            $table->string('strategic_title');
            $table->string('strategic_subtitle');
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
        Schema::dropIfExists('about');
    }
}
