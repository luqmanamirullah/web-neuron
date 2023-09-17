<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortofolioTechnology extends Model
{
    protected $table = 'portofolio_technologies';

    protected $fillable = [
        'portofolio_id',
        'technologies_id',
    ];

    public function technology()
    {
        return $this->belongsTo(Technology::class, 'technologies_id', 'id');
    }

    public function portofolio()
    {
        return $this->belongsTo(Portofolio::class, 'portofolio_id', 'id');
    }
}
