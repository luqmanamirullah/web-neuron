<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NeuronProgram extends Model
{
    use HasFactory;

    protected $table = 'neuron_programs';

    protected $fillable = [
        'title',
        'desc',
        'image',
    ];

    public function home()
    {
        return $this->hasOne(Home::class, 'neuron_program_id');
    }
}
