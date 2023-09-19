<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobQualification extends Model
{
    use HasFactory;
    protected $table = 'jobs_qualification';

    protected $fillable = [
        'gender',
        'domicile',
        'education',
        'major',
        'other',
    ];

    public function jobs()
    {
        return $this->hasMany(Job::class, 'jobs_qualification_id');
    }
}
