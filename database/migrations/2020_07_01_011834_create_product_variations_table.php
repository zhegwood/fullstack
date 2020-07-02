<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductVariationsTable extends Migration
{
    public function up()
    {
        Schema::create('product_variations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id');
            $table->string('name');
            $table->string('img_url');
            $table->float('full_price', 8, 2);
            $table->float('monthly_price', 8, 2);
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('product_variations', function (Blueprint $table) {
            $table->foreign('product_id')->references('id')->on('products');
        });

        //could use a seeder for this, but I thought it overkill since there's only three product variations
        $now = gmdate('Y-m-d H:i:s');

        DB::table('product_variations')->insert([
            [
                'product_id' => 1,
                'name' => 'Amber',
                'img_url' => 'https://helixsleep-code-challenge.s3.amazonaws.com/sofa-amber.jpg',
                'full_price' => 1450,
                'monthly_price' => 25,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'product_id' => 1,
                'name' => 'Charcoal',
                'img_url' => 'https://helixsleep-code-challenge.s3.amazonaws.com/sofa-charcoal.jpg',
                'full_price' => 1450,
                'monthly_price' => 25,
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'product_id' => 1,
                'name' => 'Red',
                'img_url' => 'https://helixsleep-code-challenge.s3.amazonaws.com/sofa-red.jpg',
                'full_price' => 1450,
                'monthly_price' => 25,
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('product_variations');
    }
}
