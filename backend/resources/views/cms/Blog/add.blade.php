@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Add Blog</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('blog') }}">Blog</a></li>
                    <li class="breadcrumb-item active">Add Blog</li>
                </ol>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <form action="{{ route('store-blog') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" class="form-control-file" id="image" name="image" required>
                    </div>

                    <div class="form-group">
                        <label for="author">Author</label>
                        <input type="text" class="form-control" id="author" name="author" required>
                    </div>

                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" name="title" required>
                    </div>

                    <div class="form-group">
                        <label for="desc">Description</label>
                        <input type="text" class="form-control" id="desc" name="desc" required>
                    </div>

                    <div class="form-group">
                        <label for="articles_categories_id">Category</label>
                        <select class="form-control" id="articles_categories_id" name="articles_categories_id" required>
                            @foreach($categories as $category)
                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="body">Body</label>
                        <textarea class="ckeditor form-control" id="body" name="body"></textarea>
                    </div>

                    <a href="{{ route('blog') }}" class="btn btn-primary">Back</a>
                    <button type="submit" class="btn btn-primary float-right">Add Blog</button>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    ClassicEditor
        .create( document.querySelector( '#body' ) )
        .then( editor => {
            console.log( body );
        })
        .catch( error => {
            console.error( error );
        } );
</script>
@endsection
