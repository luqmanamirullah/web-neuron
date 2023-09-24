<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DirectorList extends Model
{
    use HasFactory;

    protected $table = 'director_lists';

    protected $fillable = [
        'image',
        'name',
        'position',
        'link',
        'about_id',
    ];

    public function about()
    {
        return $this->belongsTo(About::class, 'about_id');
    }
}
