<?php

namespace App\Models;

use App\Models\Article;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ArticleCategory extends Model
{
    protected $table = 'articles_categories';

    protected $fillable = ['name'];

    public function article()
    {
        return $this->hasMany(Article::class);
    }
}
