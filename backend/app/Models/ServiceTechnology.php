<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceTechnology extends Model
{
    use HasFactory;

    protected $table = 'service_technologies';

    protected $fillable = [
        'services_id',
        'technologies_id',
    ];

    public function technology()
    {
        return $this->belongsTo(Technology::class, 'technologies_id', 'id');
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'services_id', 'id');
    }
}
