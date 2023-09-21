<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServicePages extends Model
{
    use HasFactory;

    protected $table = 'service_pages';

    protected $fillable = [
        'hero_title',
        'hero_desc',
        'service_title',
        'service_subtitle',
        'technology_title',
        'technology_desc',
        'methodology_title',
        'methodology_subtitle',
        'cta_contact_id',
    ];

    public function ctaContact()
    {
        return $this->belongsTo(CtaContact::class);
    }
}
