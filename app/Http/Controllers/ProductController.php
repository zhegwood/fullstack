<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductShowRequest;
use App\Product;

class ProductController extends Controller
{
    public function show(ProductShowRequest $request)
    {
        $product = Product::where('id', $request->input('id'))->with('variations')->first();
        return response()->json($product);
    }
}
