@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Add Product</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('portofolio') }}">Product</a></li>
                    <li class="breadcrumb-item active">Add Product</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
    <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('product-update', $product->id) }}" method="post">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}
                        
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ $product->name }}" required>
                        </div>

                        <div class="form-group">
                            <label for="subtitle">Subtitle</label>
                            <input type="text" class="form-control" id="subtitle" name="subtitle" value="{{ $product->subtitle }}" required>
                        </div>

                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea class="form-control" id="desc" name="desc" required>{{ $product->desc }}</textarea>
                        </div>

                        <div class="form-group">
                            <label for="link">Link</label>
                            <input type="text" class="form-control" id="link" value="{{ $product->link }}" name="link">
                        </div>

                        <a href="{{ URL::previous() }}" class="btn btn-primary">Back</a>
                        <button type="submit" class="btn btn-primary float-right">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection