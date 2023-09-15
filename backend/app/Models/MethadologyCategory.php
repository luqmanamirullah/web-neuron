<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MethadologyCategory extends Model
{
    protected $table = 'methodology_categories';
    
    protected $fillable = [
        'category_icon',
        'category_title',
        'category_name',
        'flow_image',
    ];
}
