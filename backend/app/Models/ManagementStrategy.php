<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManagementStrategy extends Model
{
    use HasFactory;

    protected $table = 'management_strategies';

    protected $fillable = [
        'title',
        'about_id',
    ];

    public function about()
    {
        return $this->belongsTo(About::class, 'about_id');
    }

    public function managementStrategyLists()
    {
        return $this->hasMany(ManagementStrategyList::class, 'management_strategy_id');
    }
}
