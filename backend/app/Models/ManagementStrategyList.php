<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManagementStrategyList extends Model
{
    use HasFactory;

    protected $table = 'management_strategy_list';

    protected $fillable = [
        'title',
        'desc',
        'management_strategy_id',
    ];

    public function managementStrategy()
    {
        return $this->belongsTo(ManagementStrategy::class, 'management_strategy_id');
    }
}
