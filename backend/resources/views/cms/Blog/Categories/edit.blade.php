@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Edit Blog</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('blog') }}">Blog</a></li>
                    <li class="breadcrumb-item active">Edit Blog</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('blog-categories-update', $category->id) }}" method="post">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ $category->name }}" required>
                        </div>

                        <a href="{{ route('blog-categories') }}" class="btn btn-primary">Back</a>
                        <button type="submit" class="btn btn-primary float-right">Update Blog</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection