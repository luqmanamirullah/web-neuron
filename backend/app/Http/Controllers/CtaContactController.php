<?php

namespace App\Http\Controllers;

use App\Models\CtaContact;
use Illuminate\Http\Request;
use App\Http\Resources\CtaContactResource;

class CtaContactController extends Controller
{
    public function getCtaContacts()
    {
        // Ambil data dari tabel cta_contact
        $ctaContacts = CtaContact::all();

        return CtaContactResource::collection($ctaContacts);
    }
}
