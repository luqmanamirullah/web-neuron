<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToTablePortofolioTechnologies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('portofolio_technologies', function (Blueprint $table) {
            $table->unsignedBigInteger('portofolio_id');
            $table->unsignedBigInteger('technologies_id');
            $table->foreign('portofolio_id')->references('id')->on('portofolios');
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
        Schema::table('portofolio_technologies', function (Blueprint $table) {
            $table->dropForeign('portofolio_technologies_portofolio_id_foreign');
            $table->dropForeign('portofolio_technologies_technologies_id_foreign');
            $table->dropColumn('portofolio_id');
            $table->dropColumn('technologies_id');
        });
    }
}
