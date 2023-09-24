<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ValueList extends Model
{
    use HasFactory;

    protected $table = 'value_lists';

    protected $fillable = [
        'title',
        'desc',
        'about_id',
    ];

    public function about()
    {
        return $this->belongsTo(About::class, 'about_id');
    }
}
