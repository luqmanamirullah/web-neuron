<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignJobsIdToTableJobPlusValue extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('job_plus_value', function (Blueprint $table) {
            $table->unsignedBigInteger('jobs_id');
            $table->foreign('jobs_id')->references('id')->on('jobs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('job_plus_value', function (Blueprint $table) {
            $table->dropForeign('job_plus_value_jobs_id_foreign');
            $table->dropColumn('jobs_id');
        });
    }
}
