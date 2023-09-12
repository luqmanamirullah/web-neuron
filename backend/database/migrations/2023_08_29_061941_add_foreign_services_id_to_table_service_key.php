<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignServicesIdToTableServiceKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('service_key', function (Blueprint $table) {
            $table->unsignedBigInteger('services_id');
            $table->foreign('services_id')->references('id')->on('services');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('service_key', function (Blueprint $table) {
            $table->dropForeign('service_key_services_id_foreign');
            $table->dropColumn('services_id');
        });
    }
}
