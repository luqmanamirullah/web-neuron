<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portofolio extends Model
{
    protected $table = 'portofolios';
    protected $fillable = [
        'name', 'customer_name', 'desc', 'category', 'image', 'link', 'our_solution', 'details', 'created_at'
    ];

    public function portofolioTechnology()
    {
        return $this->hasMany(PortofolioTechnology::class);
    }

    public function deliverables()
    {
        return $this->hasMany(Deliverable::class);
    }

    public function handles()
    {
        return $this->hasMany(Handle::class);
    }

    public function technologies()
    {
        return $this->belongsToMany(Technology::class, 'portofolio_technologies', 'portofolio_id', 'technologies_id');
    }
}
