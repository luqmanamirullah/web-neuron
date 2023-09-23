<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignTechnologyCategoryIdToTableTechnologies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('technologies', function (Blueprint $table) {
            $table->unsignedBigInteger('technology_category_id');
            $table->foreign('technology_category_id')->references('id')->on('technology_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('technologies', function (Blueprint $table) {
            $table->dropForeign('technologies_technology_category_id_foreign');
            $table->dropColumn('technology_category_id');
        });
    }
}
