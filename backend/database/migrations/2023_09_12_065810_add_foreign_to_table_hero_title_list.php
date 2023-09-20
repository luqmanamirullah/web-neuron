<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignToTableHeroTitleList extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('hero_title_list', function (Blueprint $table) {
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
        Schema::table('hero_title_list', function (Blueprint $table) {
            $table->dropForeign('hero_title_list_home_id_foreign');
            $table->dropColumn('home_id');
        });
    }
}
