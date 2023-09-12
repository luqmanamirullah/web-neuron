<?php

namespace App\Models;

use App\Models\User;
use App\Models\ArticleCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    protected $table = 'articles';

    protected $fillable = [
        'title',
        'image',
        'desc',
        'body',
        'author',
        'user_id',
        'articles_categories_id'
    ];

    public function articleCategory()
    {
        return $this->belongsTo(ArticleCategory::class, 'articles_categories_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
