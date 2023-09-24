<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    use HasFactory;

    protected $table = 'home';

    protected $fillable = [
        'hero_title1',
        'hero_title2',
        'hero_title3',
        'hero_desc',
        'about_project',
        'about_experience',
        'about_desc',
        'about_title',
        'about_ilustration',
        'neuron_program_id',
        'cta_contact_id',
        'title_service',
        'title_project',
        'title_product',
        'title_partner',
        'title_articles',
        'title_certificate',
    ];

    public function neuronProgram()
    {
        return $this->belongsTo(NeuronProgram::class);
    }

    public function ctaContact()
    {
        return $this->belongsTo(CtaContact::class);
    }

    public function testimonials()
    {
        return $this->hasMany(Testimonial::class, 'home_id');
    }

    public function heroTitleLists()
    {
        return $this->hasMany(HeroTitleList::class, 'home_id');
    }

    public function certificates()
    {
        return $this->hasMany(Certificate::class, 'home_id');
    }

    public function partners()
    {
        return $this->hasMany(Partner::class, 'home_id');
    }
}
