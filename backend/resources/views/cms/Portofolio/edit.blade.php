@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Edit Portofolio</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('portofolio') }}">Portofolio</a></li>
                    <li class="breadcrumb-item active">Edit Portofolio</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->

    <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('portofolio-update', $portofolio->id) }}" method="post" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}
                        
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ $portofolio->name }}" required>
                        </div>

                        <div class="form-group">
                            <label for="category">Category</label>
                            <select class="form-control" id="category" name="category" required>
                                <option value="Web App" {{ $portofolio->category == 'Web App' ? 'selected' : '' }}>Web App</option>
                                <option value="Mobile App" {{ $portofolio->category == 'Mobile App' ? 'selected' : '' }}>Mobile App</option>
                                <option value="Workflow Management System" {{ $portofolio->category == 'Workflow Management System' ? 'selected' : '' }}>Workflow Management System</option>
                                <option value="System Integrator" {{ $portofolio->category == 'System Integrator' ? 'selected' : '' }}>System Integrator</option>
                                <option value="Business Intelligence" {{ $portofolio->category == 'Business Intelligence' ? 'selected' : '' }}>Business Intelligence</option>
                                <option value="CRM App" {{ $portofolio->category == 'CRM App' ? 'selected' : '' }}>CRM App</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="customer_name">Customer Name</label>
                            <input type="text" class="form-control" id="customer_name" name="customer_name" value="{{ $portofolio->customer_name }}" required>
                        </div>

                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea class="form-control" id="desc" name="desc" required>{{ $portofolio->desc }}</textarea>
                        </div>

                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control-file" id="image" name="image">
                            <img src="{{ asset($portofolio->image) }}" alt="{{ $portofolio->name }}" class="mt-2" style="max-width: 200px;">
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
