@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Add Portofolio</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('portofolio') }}">Portofolio</a></li>
                    <li class="breadcrumb-item active">Add Portofolio</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->

    <div id="success-message" class="mt-3">
        @if(session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif
    </div>

    <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <form action="{{ route('portofolio-store') }}" method="post" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="category">Category</label>
                            <select class="form-control" id="category" name="category" required>
                                <option value="Web App">Web App</option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="Workflow Management System">Workflow Management System</option>
                                <option value="System Integrator">System Integrator</option>
                                <option value="Business Intelligence">Business Intelligence</option>
                                <option value="CRM App">CRM App</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="customer_name">Customer Name</label>
                            <input type="text" class="form-control" id="customer_name" name="customer_name" required>
                        </div>

                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea class="form-control" id="desc" name="desc" required></textarea>
                        </div>

                        <div class="form-group">
                            <label for="details">Detail</label>
                            <input type="text" class="form-control" id="details" name="details" required></input>
                        </div>

                        <div class="form-group">
                            <label for="our_solution">Solution</label>
                            <textarea class="ckeditor form-control" id="our_solution" name="our_solution"></textarea>
                        </div>

                        <div class="form-group ">
                            <label for="technologies">Technologies</label>
                            <select multiple class="form-control" id="technologies" name="technologies[]">
                                @foreach ($technologies as $technology)
                                    <option value="{{ $technology->id }}">{{ $technology->name }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="form-group" id="deliverables-container">
                            <div class="d-flex">
                                <label for="deliverables">Deliverables</label>
                                <button type="button" class="btn btn-primary ml-auto" id="button-deliverable">Add Deliverables</button>
                            </div>
                            <input type="text" class="form-control" id="deliverables" name="deliverables[]" placeholder="Deliverable 1">
                            <input type="text" class="form-control" id="deliverables" name="deliverables[]" placeholder="Deliverable 2">
                        </div>

                        <div class="form-group" id="handles-container">
                            <div class="d-flex">
                                <label for="handles">Handles</label>
                                <button type="button" class="btn btn-primary ml-auto" id="button-handle">Add Handles</button>
                            </div>
                            <input type="text" class="form-control" id="handles" name="handles[]" placeholder="Handle 1">
                            <input type="text" class="form-control" id="handles" name="handles[]" placeholder="Handle 2">
                        </div>

                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control-file" id="image" name="image" required>
                        </div>
                        <a href="{{ URL::previous() }}" class="btn btn-primary">Back</a>
                        <button type="submit" class="btn btn-primary float-right">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    ClassicEditor
        .create( document.querySelector( '#our_solution' ) )
        .then( editor => {
            console.log( our_solution );
        })
        .catch( error => {
            console.error( error );
        } );
</script>
<script>
    $(document).ready(function () {
        var handlesContainer = $('#handles-container');
        
        $('#button-handle').click(function () {
            var newInput = $('<input type="text" class="form-control" name="handles[]" placeholder="Handle">');
            handlesContainer.append(newInput);
        });
    });
</script>
<script>
    $(document).ready(function () {
        var handlesContainer = $('#deliverables-container');
        
        $('#button-deliverable').click(function () {
            var newInput = $('<input type="text" class="form-control" name="deliverables[]" placeholder="Deliverable">');
            handlesContainer.append(newInput);
        });
    });
</script>
@endsection