<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CtaContact extends Model
{
    use HasFactory;

    protected $table = 'cta_contact';

    protected $fillable = [
        'title',
        'desc',
        'link',
    ];

    public function home()
    {
        return $this->hasOne(Home::class, 'cta_contact_id');
    }

    public function servicePages()
    {
        return $this->hasOne(ServicePages::class, 'cta_contact_id');
    }

    public function about()
    {
        return $this->hasOne(About::class, 'cta_contact_id');
    }
}
