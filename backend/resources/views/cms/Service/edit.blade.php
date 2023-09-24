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
                    <form action="{{ route('service-update', $service->id) }}" method="post" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ $service->name }}" required>
                        </div>

                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea class="form-control" id="desc" name="desc" required>{{ $service->desc }}</textarea>
                        </div>

                        <div class="form-group">
                            <label for="isTopService">Top Service</label>
                            <select class="form-control" id="isTopService" name="isTopService">
                                @foreach ($isTopServiceOptions as $value => $label)
                                    <option value="{{ $value }}" {{ $service->isTopService == $value ? 'selected' : '' }}>{{ $label }}</option>
                                @endforeach
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <div class="d-flex">
                                <label for="serviceKey">Key Feature</label>
                                <button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target="#addKeyFeatureModal">Add Key Feature</button>
                            </div>

                            <ul>
                                @foreach ($service->serviceKeys as $servicekey)
                                <li>{{ $servicekey->name }}</li>
                                @endforeach
                            </ul>
                        </div>

                        <div class="form-group">
                            <div class="d-flex">
                                <label for="technology">Technologies</label>
                                <button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target="#addTechnologyModal">Add Technology</button>
                            </div>
                            @foreach ($service->technologies as $technology)
                            @php
                                $selectedId = 0;
                                foreach($selectedTechnologies as $tech => $id){
                                    $id == $technology->id ? $selectedId = $id : null;
                                }
                            @endphp
                            <ul>
                                <li>
                                    <select name="technologies[]" id="technology_{{ $technology->id }}">
                                        @foreach ($technologies as $tech)
                                            <option value="{{ $tech->id }}" {{ $tech->id == $selectedId ? 'selected' : '' }}>
                                                {{ $tech->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                </li>
                            </ul>
                            @endforeach
                        </div>

                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control-file" id="image" name="image">
                            <img src="{{ asset($service->image) }}" alt="{{ $service->name }}" class="mt-2" style="max-width: 200px;">
                        </div>

                        <a href="{{ URL::previous() }}" class="btn btn-primary">Back</a>
                        <button type="submit" class="btn btn-primary float-right">Update</button>
                    </form>
                    <!-- Modal add exist technology -->
                    <div class="modal fade" id="addTechnologyModal" tabindex="-1" role="dialog" aria-labelledby="addTechnologyModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="addTechnologyModalLabel">Add Existing Technology</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form id="addTechnologyForm">
                                        {{ csrf_field() }}
                                        <div class="form-group">
                                            <label for="existingTech">Select Technology</label>
                                            <select class="form-control" id="existingTech" name="existingTech">
                                                @foreach($technologies as $tech)
                                                    <option value="{{ $tech->id }}">{{ $tech->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" id="addExistingTechnologyButton">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Akhir dari modal exist technology -->

                    <!-- Modal untuk menambahkan key feature -->
                    <div class="modal fade" id="addKeyFeatureModal" tabindex="-1" aria-labelledby="addKeyFeatureModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="addKeyFeatureModalLabel">Add Key Feature</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <!-- Form untuk menambahkan key feature -->
                                    <form action="{{ route('keyfeature.add-deliverable', $service->id) }}" method="post">
                                        {{ csrf_field() }}
                                        <div class="form-group">
                                            <label for="keyFeature_name">Key Feature Name</label>
                                            <input type="text" class="form-control" id="keyFeature_name" name="keyFeature_name" required>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Add Deliverable</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Akhir dari modal key feature -->
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        // Handle Add Existing Technology button click
        $('#addExistingTechnologyButton').on('click', function () {
            var selectedTechnologyId = $('#existingTech').val();

            // Send AJAX request to add existing technology to the service
            $.ajax({
                url: '{{ route('keyfeature-add-technology', $service->id) }}',
                type: 'POST',
                data: {
                    _token: '{{ csrf_token() }}',
                    technology_id: selectedTechnologyId
                },
                success: function (data) {
                    // Close the modal
                    $('#addTechnologyModal').modal('hide');

                    // Refresh the page or update the view with the new technology added to the portofolio
                    location.reload();
                },
                error: function (xhr) {
                    // Handle errors, display them to the user
                    console.log(xhr.responseText);
                    alert('Failed to add technology. Please try again.');
                }
            });
        });
    });
</script>
@endsection