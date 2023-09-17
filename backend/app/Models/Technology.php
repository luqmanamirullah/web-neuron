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
    ];

    public function portofolioTechnology()
    {
        return $this->hasMany(PortofolioTechnology::class);
    }
}
