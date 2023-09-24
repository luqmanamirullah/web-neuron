<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignAboutIdToTableValueLists extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('value_lists', function (Blueprint $table) {
            $table->unsignedBigInteger('about_id');
            $table->foreign('about_id')->references('id')->on('about');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('value_lists', function (Blueprint $table) {
            $table->dropForeign('value_lists_about_id_foreign');
            $table->dropColumn('about_id');
        });
    }
}
