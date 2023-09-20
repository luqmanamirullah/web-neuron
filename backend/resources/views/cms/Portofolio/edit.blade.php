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
                            <label for="details">Detail</label>
                            <input type="text" class="form-control" id="details" name="details" value="{{ $portofolio->details }}" required></input>
                        </div>

                        <div class="form-group">
                            <label for="our_solution">Solution</label>
                            <textarea class="ckeditor form-control" id="our_solution" name="our_solution">{{ $portofolio->our_solution }}</textarea>
                        </div>

                        <div class="form-group">
                            <label for="created_at">Date</label>
                            <input type="datetime-local" class="form-control" id="created_at" name="created_at" value="{{ $portofolio->created_at }}" required>
                        </div>

                        <div class="form-group">
                            <div class="d-flex">
                                <label for="technology">Technologies</label>
                                <button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target="#addTechnologyModal">Add Technology</button>
                            </div>
                            @foreach ($portofolio->technologies as $technology)
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
                            <div class="d-flex">
                                <label for="deliverable">Deliverables</label>
                                <button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target="#addDeliverableModal">Add Deliverable</button>
                            </div>

                            <ul>
                                @foreach ($portofolio->deliverables as $deliverable)
                                <li>{{ $deliverable->name }}</li>
                                @endforeach
                            </ul>
                        </div>

                        <div class="form-group">
                            <div class="d-flex">
                                <label for="deliverable">Handle</label>
                                <button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target="#addHandleModal">Add Handle</button>
                            </div>

                            <ul>
                                @foreach ($portofolio->handles as $handle)
                                <li>{{ $handle->name }}</li>
                                @endforeach
                            </ul>
                        </div>

                        <div class="form-group">
                            <label for="image">Image</label>
                            <input type="file" class="form-control-file" id="image" name="image">
                            <img src="{{ asset($portofolio->image) }}" alt="{{ $portofolio->name }}" class="mt-2" style="max-width: 200px;">
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

                    <!-- Modal untuk menambahkan deliverable -->
                    <div class="modal fade" id="addDeliverableModal" tabindex="-1" aria-labelledby="addDeliverableModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="addDeliverableModalLabel">Add Deliverable</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <!-- Form untuk menambahkan deliverable -->
                                    <form action="{{ route('portofolio.add-deliverable', $portofolio->id) }}" method="post">
                                        {{ csrf_field() }}
                                        <div class="form-group">
                                            <label for="deliverable_name">Deliverable Name</label>
                                            <input type="text" class="form-control" id="deliverable_name" name="deliverable_name" required>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Add Deliverable</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal untuk menambahkan handle -->
                    <div class="modal fade" id="addHandleModal" tabindex="-1" aria-labelledby="addHandleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="addHandleModalLabel">Add Handle</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <!-- Form untuk menambahkan handle -->
                                    <form action="{{ route('portofolio.add-handle', $portofolio->id) }}" method="post">
                                        {{ csrf_field() }}
                                        <div class="form-group">
                                            <label for="handle_name">Handle Name</label>
                                            <input type="text" class="form-control" id="handle_name" name="handle_name" required>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Add Handle</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
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
        // Handle Add Existing Technology button click
        $('#addExistingTechnologyButton').on('click', function () {
            var selectedTechnologyId = $('#existingTech').val();

            // Send AJAX request to add existing technology to the portofolio
            $.ajax({
                url: '{{ route('portofolio-add-technology', $portofolio->id) }}',
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
