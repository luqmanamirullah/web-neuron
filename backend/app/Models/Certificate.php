<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;

    protected $table = 'certificate';

    protected $fillable = [
        'image',
        'home_id',
    ];

    public function home()
    {
        return $this->belongsTo(Home::class, 'home_id');
    }
}
