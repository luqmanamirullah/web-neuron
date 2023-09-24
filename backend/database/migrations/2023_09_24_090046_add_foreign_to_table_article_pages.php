<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignToTableArticlePages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('article_pages', function (Blueprint $table) {
            $table->unsignedBigInteger('cta_contact_id');
            $table->foreign('cta_contact_id')->references('id')->on('cta_contact');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('article_pages', function (Blueprint $table) {
            $table->dropForeign('article_pages_cta_contact_id_foreign');
            $table->dropColumn('cta_contact_id');
        });
    }
}
