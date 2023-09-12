<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserPending extends Model
{
    use HasFactory, HasFactory, Notifiable;
    protected $table = 'user_pending';

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
        'profile_picture',
        'token',
        'request_role_id',
    ];

    protected $hidden = [
        'password',
    ];
}
