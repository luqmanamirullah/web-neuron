<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignServiceIdToPortfolioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('portofolios', function (Blueprint $table) {
            // $table->foreignId('service_id')->references('id')->on('services');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('portofolios', function (Blueprint $table) {
            // $table->dropForeign('portofolios_service_id_foreign');
            // $table->dropColumn('service_id');

        });
    }
}