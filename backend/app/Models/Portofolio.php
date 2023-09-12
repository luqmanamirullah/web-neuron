<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portofolio extends Model
{
    protected $table = 'portofolios';
    protected $fillable = [
        'name', 'customer_name', 'desc', 'category', 'image', 'link'
    ];
}
