<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MissionList extends Model
{
    use HasFactory;

    protected $table = 'mission_lists';

    protected $fillable = [
        'name',
        'about_id',
    ];

    public function about()
    {
        return $this->belongsTo(About::class, 'about_id');
    }
}
