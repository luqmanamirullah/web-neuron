<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deliverable extends Model
{
    use HasFactory;
    protected $table = 'deliverables';
    protected $fillable = [
        'name',
        'portofolio_id',
    ];

    public function portofolio()
    {
        return $this->belongsTo(Portofolio::class, 'portofolio_id', 'id');
    }
}
