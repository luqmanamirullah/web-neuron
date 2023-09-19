<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobPlusValue extends Model
{
    use HasFactory;
    protected $table = 'job_plus_value';

    protected $fillable = [
        'name',
        'jobs_id',
    ];

    public function job()
    {
        return $this->belongsTo(Job::class, 'jobs_id');
    }
}
