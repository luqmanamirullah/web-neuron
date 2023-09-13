@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Portofolio</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item active">Portofolio</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->

    <div class="container">
        <div class="mt-3">
            <div class="d-flex justify-content-start mb-3">
                <a href="{{ route('portofolio') }}" class="btn btn-success mr-2">Portofolio</a>
                <a href="{{ route('product') }}" class="btn btn-primary mr-2">Product</a>
                <a href="{{ route('methadology') }}" class="btn btn-primary">Methodology</a>
            </div>
            <form action="{{ route('show-portofolio') }}" method="GET">
                @csrf
                <div class="input-group" style="width: 100%;">
                    <input type="text" class="form-control" name="search" placeholder="Search...">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                    <a href="{{ route('portofolio-create') }}" class="btn btn-success ml-5">Add Portofolio</a>
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

                .category-container {
                    width: 100%;
                    text-align: end;
                }

                .category {
                    background-color: rgb(185, 28, 28);
                    font-size: 12px;
                    font-weight: medium;
                    color: white;
                    padding: 8px 12px;
                    border-radius: 5px;
                }

                .product-name {
                    font-weight: bold;
                    font-size: 1.25rem;
                }

                .product-customer {
                    text-decoration-line: underline;
                    font-weight: 500;
                    font-size: 14px;
                }

                .product-desc {
                    font-size: 14px;
                }

                .product-date {
                    width: 100%;
                    text-align: end;
                    font-size: 14px;
                }

                .product-img {
                    margin-bottom: 16px;
                    max-height: 208px;
                    width: 100%;
                    object-fit: cover;
                }

                .product-img-modal {
                    margin-bottom: 16px;
                    height: auto;
                    width: 100%;
                    object-fit: cover;
                }
            </style>
            <div class="product-grid">
                @foreach($portofolios as $portofolio)
                <div class="product-card" data-toggle="modal" data-target="#viewPortofolioModal{{ $portofolio->id }}">
                    <img class="product-img" src="{{ asset($portofolio->image) }}" alt="{{ $portofolio->name }}">
                    <div>
                        <div class="category-container">
                            <span class="category">{{ $portofolio->category }}</span>
                        </div>
                        <h5 class="product-name">{{ $portofolio->name }}</h5>
                        <h6 class="product-customer">{{ $portofolio->customer_name }}</h6>
                        <p class="product-desc">{{ \Illuminate\Support\Str::limit($portofolio->desc, 200) }}</p>
                        <p class="product-date">{{ $portofolio->created_at->format('d/m/Y') }}</p>
                    </div>
                    <div class="actions">
                        <a href="{{ route('portofolio-edit', $portofolio->id) }}" class="btn btn-success">Edit</a>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirmDeleteModal{{ $portofolio->id }}">Delete</button>
                    </div>
                    <!-- Modal Konfirmasi Hapus -->
                    <div class="modal fade" id="confirmDeleteModal{{ $portofolio->id }}" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="confirmDeleteModalLabel">Confirm Delete</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Are you sure you want to delete <strong>{{ $portofolio->name }}</strong>?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                    <form id="delete-form-{{ $portofolio->id }}" action="{{ route('delete-portofolio', $portofolio->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger">Yes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal Konfirmasi Hapus End -->

                    <!-- Modal portofolio -->
                    <div class="modal fade" id="viewPortofolioModal{{ $portofolio->id }}" tabindex="-1" aria-labelledby="viewPortofolioModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="viewPortofolioModalLabel">View Portofolio</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img class="product-img-modal" src="{{ asset($portofolio->image) }}" alt="{{ $portofolio->name }}">
                                    <div>
                                        <div class="category-container">
                                            <span class="category">{{ $portofolio->category }}</span>
                                        </div>
                                        <h5 class="product-name">{{ $portofolio->name }}</h5>
                                        <h6 class="product-customer">{{ $portofolio->customer_name }}</h6>
                                        <p class="product-desc">{{ ($portofolio->desc) }}</p>
                                        <p class="product-date">{{ $portofolio->created_at->format('d/m/Y') }}</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Akhir modal portofolio -->
                </div>
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