<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ArticleCategory;

class BlogCategoryController extends Controller
{
    public function blogcategories()
    {
        return view('cms.Blog.Categories.categories');
    }

    public function blogcategoriesshow(Request $request)
    {
        $categories = ArticleCategory::all();
        return view('cms.Blog.Categories.categories', compact('categories'));
    }

    public function deleteBlogCategories($id)
    {
        $categories = ArticleCategory::findOrFail($id);
        $categories->delete();

        return redirect()->route('blog-categories')->with('success', 'Blog Category has been deleted successfully.');
    }

    public function create()
    {
        $categories = ArticleCategory::all();
        return view('cms.Blog.Categories.add', compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        // Simpan data blog ke database
        $category = new ArticleCategory([
            'name' => $request->name
        ]);

        $category->save();

        // Redirect ke halaman yang sesuai atau tampilkan pesan sukses
        return redirect()->route('blog-categories')->with('success', 'Blog Categories added successfully.');
    }

    public function edit($id)
    {
        $category = ArticleCategory::findOrFail($id);
        return view('cms.Blog.Categories.edit', compact('category'));
    }

    public function update(Request $request, $id)
    {
        $category = ArticleCategory::findOrFail($id);

        // Validasi data yang akan diupdate
        $validatedData = $request->validate([
            'name' => 'required'
        ]);

        // Update data portofolio
        $category->name = $request->input('name');

        $category->save();

        // Redirect ke halaman portofolio dengan pesan sukses
        return redirect()->route('blog-categories')->with('success', 'Blog category updated successfully.');
    }
}
