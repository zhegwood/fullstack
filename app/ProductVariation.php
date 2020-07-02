<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductVariation extends Model
{
    use SoftDeletes;

    public $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public function product()
    {
        return $this->belongsTo('App\Product');
    }
}
