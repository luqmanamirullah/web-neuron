<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignsToTableServiceTechnologies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('service_technologies', function (Blueprint $table) {
            $table->unsignedBigInteger('services_id');
            $table->unsignedBigInteger('technologies_id');
            $table->foreign('services_id')->references('id')->on('services');
            $table->foreign('technologies_id')->references('id')->on('technologies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('service_technologies', function (Blueprint $table) {
            $table->dropForeign('service_technologies_services_id_foreign');
            $table->dropForeign('service_technologies_technologies_id_foreign');
            $table->dropColumn('services_id');
            $table->dropColumn('technologies_id');
        });
    }
}
