<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignManagementStrategyIdToTableManagementStrategyList extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('management_strategy_list', function (Blueprint $table) {
            $table->unsignedBigInteger('management_strategy_id');
            $table->foreign('management_strategy_id')->references('id')->on('management_strategies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('management_strategy_list', function (Blueprint $table) {
            $table->dropForeign('management_strategy_list_management_strategy_id_foreign');
            $table->dropColumn('management_strategy_id');
        });
    }
}