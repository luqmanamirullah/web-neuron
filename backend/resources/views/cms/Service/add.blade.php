@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Add Service</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('portofolio') }}">Service</a></li>
                    <li class="breadcrumb-item active">Add Service</li>
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
                    <form action="{{ route('service-store') }}" method="post" enctype="multipart/form-data">
                        {{ csrf_field() }}

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea class="form-control" id="desc" name="desc" required></textarea>
                        </div>

                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control-file" id="image" name="image" required>
                        </div>

                        <div class="form-group">
                            <label for="isTopService">Top Service</label>
                            <select class="form-control" id="isTopService" name="isTopService">
                                @foreach ($isTopServiceOptions as $value => $label)
                                    <option value="{{ $value }}">{{ $label }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="form-group ">
                            <label for="technologies">Technologies</label>
                            <select multiple class="form-control" id="technologies" name="technologies[]">
                                @foreach ($technologies as $technology)
                                    <option value="{{ $technology->id }}">{{ $technology->name }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="form-group" id="service-container">
                            <div class="d-flex">
                                <label for="serviceKeys">Key Feature</label>
                                <button type="button" class="btn btn-primary ml-auto" id="button-service">Add Key Feature</button>
                            </div>
                            <input type="text" class="form-control" id="serviceKeys" name="serviceKeys[]" placeholder="serviceKeys">
                            <input type="text" class="form-control" id="serviceKeys" name="serviceKeys[]" placeholder="serviceKeys">
                        </div>

                        <a href="{{ URL::previous() }}" class="btn btn-primary">Back</a>
                        <button type="submit" class="btn btn-primary float-right">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function () {
        var serviceContainer = $('#service-container');
        
        $('#button-service').click(function () {
            var newInput = $('<input type="text" class="form-control" name="serviceKeys[]" placeholder="Key Feature">');
            serviceContainer.append(newInput);
        });
    });
</script>
@endsection