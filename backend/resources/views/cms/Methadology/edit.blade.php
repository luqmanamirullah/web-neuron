@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Edit Methadology</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('portofolio') }}">Portofolio</a></li>
                    <li class="breadcrumb-item active">Edit Methadology</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->

    <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('methadology-update', $methodology->id) }}" method="post" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}
                        
                        <div class="form-group">
                            <label for="category_name">Name</label>
                            <input type="text" class="form-control" id="category_name" name="category_name" value="{{ $methodology->category_name }}" required>
                        </div>

                        <div class="form-group">
                            <label for="category_title">Title</label>
                            <input type="text" class="form-control" id="category_title" name="category_title" value="{{ $methodology->category_title }}" required>
                        </div>

                        <div class="form-group">
                            <label for="flow_image">Image</label>
                            <input type="file" class="form-control-file" id="flow_image" name="flow_image">
                            <img src="{{ asset($methodology->flow_image) }}" alt="{{ $methodology->category_name }}" class="mt-2" style="max-width: 200px;">
                        </div>
                        <a href="{{ URL::previous() }}" class="btn btn-primary">Back</a>
                        <button type="submit" class="btn btn-primary float-right">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection