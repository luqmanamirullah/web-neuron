<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
    protected $table = 'technologies';

    protected $fillable = [
        'name',
        'icon',
        'technology_category_id',
    ];

    public function portofolioTechnology()
    {
        return $this->hasMany(PortofolioTechnology::class);
    }

    public function ServiceTechnology()
    {
        return $this->hasMany(ServiceTechnology::class);
    }

    public function technologyCategory()
    {
        return $this->belongsTo(TechnologyCategory::class, 'technology_category_id');
    }
}
