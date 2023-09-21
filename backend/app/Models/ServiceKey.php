<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceKey extends Model
{
    use HasFactory;
    protected $table = 'service_key';
    protected $fillable = [
        'name',
        'services_id',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, 'services_id', 'id');
    }
}
