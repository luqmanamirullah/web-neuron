<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOurSolutionAndDetailsToPortofoliosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::table('portofolios', function (Blueprint $table) {
        //     $table->text('our_solution');
        //     $table->text('details');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('portofolios', function (Blueprint $table) {
            //
        });
    }
}
