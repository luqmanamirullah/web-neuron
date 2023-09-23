<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignHomeIdToTableTestimonial extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('testimonial', function (Blueprint $table) {
            $table->unsignedBigInteger('home_id');
            $table->foreign('home_id')->references('id')->on('home');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('testimonial', function (Blueprint $table) {
            $table->dropForeign('testimonial_home_id_foreign');
            $table->dropColumn('home_id');
        });
    }
}
