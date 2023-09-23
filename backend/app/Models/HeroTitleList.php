<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroTitleList extends Model
{
    use HasFactory;

    protected $table = 'hero_title_list';

    protected $fillable = [
        'title',
        'home_id',
    ];

    public function home()
    {
        return $this->belongsTo(Home::class, 'home_id');
    }
}
