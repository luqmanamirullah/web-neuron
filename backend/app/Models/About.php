<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;

    protected $table = 'about';

    protected $fillable = [
        'hero_title',
        'hero_desc',
        'hero_image',
        'activity_image',
        'vision_title',
        'vision_subtitle',
        'vision_desc',
        'vision_image',
        'mission_title',
        'mission_subtitle',
        'mission_desc',
        'mission_image',
        'value_title',
        'value_subtitle',
        'director_title',
        'director_subtitle',
        'strategic_title',
        'strategic_subtitle',
        'cta_contact_id',
    ];

    public function ctaContact()
    {
        return $this->belongsTo(CtaContact::class);
    }

    public function missionLists()
    {
        return $this->hasMany(MissionList::class, 'about_id');
    }

    public function valueLists()
    {
        return $this->hasMany(ValueList::class, 'about_id');
    }

    public function directorLists()
    {
        return $this->hasMany(DirectorList::class, 'about_id');
    }

    public function managementStrategies()
    {
        return $this->hasMany(ManagementStrategy::class, 'about_id');
    }
}
