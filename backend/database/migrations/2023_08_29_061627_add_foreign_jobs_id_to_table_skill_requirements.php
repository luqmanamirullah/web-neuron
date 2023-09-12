<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignJobsIdToTableSkillRequirements extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('skill_requirements', function (Blueprint $table) {
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
        Schema::table('skill_requirements', function (Blueprint $table) {
            $table->dropForeign('skill_requirements_jobs_id_foreign');
            $table->dropColumn('jobs_id');
        });
    }
}
