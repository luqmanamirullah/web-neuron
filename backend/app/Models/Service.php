<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $table = 'services';

    protected $fillable = [
        'name',
        'desc',
        'image',
    ];

    public function serviceTechnology()
    {
        return $this->hasMany(ServiceTechnology::class, 'services_id', 'id');
    }

    public function serviceKeys()
    {
        return $this->hasMany(ServiceKey::class, 'services_id', 'id');
    }

    public function technologies()
    {
        return $this->belongsToMany(Technology::class, 'service_technologies', 'services_id', 'technologies_id');
    }
}
