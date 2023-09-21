<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $table = 'testimonial';
    protected $fillable = [
        'desc',
        'name',
        'star',
        'job',
        'image',
        'home_id',
    ];

    public function home()
    {
        return $this->belongsTo(Home::class, 'home_id');
    }
}
