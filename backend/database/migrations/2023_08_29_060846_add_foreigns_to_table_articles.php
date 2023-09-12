<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignsToTableArticles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('articles_categories_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('articles_categories_id')->references('id')->on('articles_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->dropForeign('articles_user_id_foreign');
            $table->dropForeign('articles_articles_categories_id_foreign');
            $table->dropColumn('user_id');
            $table->dropColumn('articles_categories_id');
        });
    }
}
