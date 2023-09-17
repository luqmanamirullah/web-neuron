<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePortofoliosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portofolios', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('category', ['Web App', 'Mobile App', 'Workflow Management System', 'System Integrator', 'Business Intelligence', 'CRM App']);
            $table->string('customer_name');
            $table->text('desc');
            $table->string('link');
            $table->date('date');
            $table->string('image');
            $table->text('our_solution');
            $table->text('details');
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
        Schema::dropIfExists('portofolios');
    }
}
