<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->text('description');
            $table->timestamps();
            $table->softDeletes();
        });

        //could use a seeder for this, but I thought it overkill since there's only one product
        $now = gmdate('Y-m-d H:i:s');

        DB::table('products')->insert([
            'title' => 'The Sofa',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae aliquet nec ullamcorper sit amet risus nullam.',
            'created_at' => $now,
            'updated_at' => $now,
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
}
