<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignMethodologyCategoriesIdToTableMethodologyLists extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('methodology_lists', function (Blueprint $table) {
            $table->unsignedBigInteger('methodology_categories_id');
            $table->foreign('methodology_categories_id')->references('id')->on('methodology_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('methodology_lists', function (Blueprint $table) {
            $table->dropForeign('methodology_lists_methodology_categories_id_foreign');
            $table->dropColumn('methodology_categories_id');
        });
    }
}
