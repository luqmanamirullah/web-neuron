@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Methadology</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item active">Methadology</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->

    <div class="container">
        <div class="mt-3">
            <div class="d-flex justify-content-start mb-3">
                <a href="{{ route('portofolio') }}" class="btn btn-primary mr-2">Portofolio</a>
                <a href="{{ route('product') }}" class="btn btn-primary mr-2">Product</a>
                <a href="{{ route('methadology') }}" class="btn btn-success mr-2">Methodology</a>
                <a href="{{ route('technology') }}" class="btn btn-primary mr-2">Technology</a>
            </div>
            <form action="{{ route('show-methadology') }}" method="GET">
                @csrf
                <div class="input-group" style="width: 100%;">
                    <input type="text" class="form-control" name="search" placeholder="Search...">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                    <a href="{{ route('create-methadology') }}" class="btn btn-success ml-5">Add Methadology</a>
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
        <div class="row mt-3">
            <style>
                .product-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }

                .product-card {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    margin: 10px;
                    padding: 20px;
                    max-width: 400px;
                    background-color: white;
                }

                .product-img {
                    margin-bottom: 16px;
                    max-height: 208px;
                    width: 100%;
                    object-fit: cover;
                }

                .product-name {
                    font-weight: bold;
                    font-size: 1.25rem;
                }

                .product-desc {
                    font-size: 14px;
                }
            </style>
            <div class="product-grid">
                @foreach($methodologyCategories as $methodology)
                <div class="product-card">
                    <div>
                        <h5 class="product-name">{{ $methodology->category_name }}</h5>
                    </div>
                    <img class="product-img" src="{{ asset($methodology->flow_image) }}" alt="{{ $methodology->category_name }}">
                    <p class="product-desc">{{ ($methodology->category_title) }}</p>
                    <div class="actions">
                        <a href="{{ route('methadology-edit', $methodology->id) }}" class="btn btn-success">Edit</a>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirmDeleteModal{{ $methodology->id }}">Delete</button>
                    </div>
                </div>
                <!-- Modal Konfirmasi Hapus -->
                <div class="modal fade" id="confirmDeleteModal{{ $methodology->id }}" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="confirmDeleteModalLabel">Confirm Delete</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to delete <strong>{{ $methodology->category_name }}</strong>?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                <form id="delete-form-{{ $methodology->id }}" action="{{ route('delete-methadology', $methodology->id) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger">Yes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal Konfirmasi Hapus End -->
                @endforeach
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
@endsection