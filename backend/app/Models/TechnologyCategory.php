<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TechnologyCategory extends Model
{
    use HasFactory;
    protected $table = 'technology_categories';

    protected $fillable = [
        'name',
    ];

    public function technologies()
    {
        return $this->hasMany(Technology::class, 'technology_category_id');
    }
}
