<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsQualificationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs_qualification', function (Blueprint $table) {
            $table->id();
            $table->enum('gender', ['Laki-Laki', 'Perempuan']);
            $table->string('domicile');
            $table->enum('education', ['SMK', 'SMA', 'D1', 'D2', 'D3', 'D4', 'S1', 'S2', 'S3']);
            $table->string('major');
            $table->text('other');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs_qualification');
    }
}
