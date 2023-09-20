<?php

namespace App\Models;

use App\Models\JobQualification;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_position',
        'location',
        'desc',
        'responsibilities',
        'link',
        'jobs_qualification_id',
    ];

    
    public function jobQualification()
    {
        return $this->belongsTo(JobQualification::class, 'jobs_qualification_id', 'id');
    }

    public function jobPlusValues()
    {
        return $this->hasMany(JobPlusValue::class, 'jobs_id');
    }

    public function skillRequirements()
    {
        return $this->hasMany(SkillRequirement::class, 'jobs_id');
    }
}
