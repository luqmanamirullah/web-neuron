<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CareerPages extends Model
{
    use HasFactory;

    protected $table = 'career_pages';

    protected $fillable = [
        'title',
        'desc',
        'image',
    ];

    public function ctaContact()
    {
        return $this->belongsTo(CtaContact::class);
    }
}
