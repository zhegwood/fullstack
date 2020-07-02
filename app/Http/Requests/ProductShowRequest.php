<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductShowRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'id' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'id.required' => 'Product not found.',
            'id.integer' => 'Product not found.',
        ];
    }
}
