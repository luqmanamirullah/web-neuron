<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignToTableHome extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('home', function (Blueprint $table) {
            $table->unsignedBigInteger('certificate_id');
            $table->unsignedBigInteger('testimonial_id');
            $table->unsignedBigInteger('cta_contact_id');
            $table->foreign('certificate_id')->references('id')->on('certificate');
            $table->foreign('testimonial_id')->references('id')->on('testimonial');
            $table->foreign('cta_contact_id')->references('id')->on('cta_contact');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('home', function (Blueprint $table) {
            $table->dropForeign('home_certificate_id_foreign');
            $table->dropForeign('home_testimonial_id_foreign');
            $table->dropForeign('home_cta_contact_id_foreign');
            $table->dropColumn('certificate_id');
            $table->dropColumn('testimonial_id');
            $table->dropColumn('cta_contact_id');
        });
    }
}
