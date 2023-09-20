@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Blog Category</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('portofolio') }}">Portofolio</a></li>
                    <li class="breadcrumb-item active">Technology</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->

    <div class="container">
        <div class="mt-3">
            <div class="d-flex justify-content-start mb-3">
                <a href="{{ route('portofolio') }}" class="btn btn-primary mr-2">Portofolio</a>
                <a href="{{ route('product') }}" class="btn btn-primary mr-2">Product</a>
                <a href="{{ route('methadology') }}" class="btn btn-primary mr-2">Methodology</a>
                <a href="{{ route('technology') }}" class="btn btn-success mr-2">Technology</a>
            </div>
            <form action="{{ route('show-technology') }}" method="GET">
                @csrf
                <div class="input-group" style="width: 100%;">
                    <input type="text" class="form-control" name="search" placeholder="Search...">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                    <a href="{{ route('technology-store') }}" class="btn btn-success ml-5" data-toggle="modal" data-target="#addTechnologyModal">Add New Technology</a>

                    <a href="#" class="btn btn-success ml-2" data-toggle="modal" data-target="#addCategoryModal">Add Category</a>
                </div>
            </form>
        </div>

        <div id="success-message" class="mt-3">
            @if(session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif
        </div>

        <div class="table-responsive mt-3">
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($technologies as $technology)
                    <tr>
                        <td>{{ $loop->index + 1 }}</td>
                        <td><img src="{{ $technology->icon }}" alt="{{ $technology->name }}"></td>
                        <td>{{ $technology->name }}</td>
                        <td>{{ $technology->technologyCategory->name }}</td>
                        <td>
                            <a href="{{ route('technology-edit', $technology->id) }}" class="btn btn-success">Edit</a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            <!-- Modal -->
            <div class="modal fade" id="addTechnologyModal" tabindex="-1" role="dialog" aria-labelledby="addTechnologyModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addTechnologyModalLabel">Add New Technology</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="addTechnologyForm">
                                {{ csrf_field() }}
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label for="icon">Icon</label>
                                    <input type="file" class="form-control-file" id="icon" name="icon" required>
                                </div>
                                <div class="form-group">
                                    <label for="technology_category_id">Category</label>
                                    <select class="form-control" id="technology_category_id" name="technology_category_id" required>
                                        <option value="">Select Category</option>
                                        @foreach($categories as $category)
                                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" id="addTechnologyButton">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal untuk Add Category -->
            <div class="modal fade" id="addCategoryModal" tabindex="-1" role="dialog" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addCategoryModalLabel">Add New Category</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="{{ route('store-category') }}" method="POST">
                                @csrf
                                <div class="form-group">
                                    <label for="category_name">Category Name</label>
                                    <input type="text" class="form-control" id="category_name" name="category_name" required>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Add Category</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    // Cari elemen pesan sukses
    var successMessage = document.getElementById('success-message');

    // Periksa apakah pesan sukses ada
    if (successMessage) {
        // Sembunyikan pesan sukses setelah 5 detik
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000); // 5000 milidetik (5 detik)
    }
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function () {
        // Handle Add Technology button click
        $('#addTechnologyButton').on('click', function () {
            // Serialize form data
            var formData = new FormData($('#addTechnologyForm')[0]);

            // Send AJAX request to add technology
            $.ajax({
                url: '{{ route('technology-store') }}',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    // Close the modal
                    $('#addTechnologyModal').modal('hide');

                    // Refresh halaman setelah teknologi berhasil ditambahkan
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