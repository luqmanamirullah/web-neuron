@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Produk</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item active">Produk</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
    <div class="container">
        <div class="mt-3">
            <div class="d-flex justify-content-start mb-3">
                <a href="{{ route('portofolio') }}" class="btn btn-primary mr-2">Portofolio</a>
                <a href="{{ route('product') }}" class="btn btn-success mr-2">Product</a>
                <a href="{{ route('methadology') }}" class="btn btn-primary">Methodology</a>
            </div>
            <form action="{{ route('show-product') }}" method="GET">
                @csrf
                <div class="input-group" style="width: 100%;">
                    <input type="text" class="form-control" name="search" placeholder="Search...">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                    <a href="{{ route('product-create') }}" class="btn btn-success ml-5">Add Product</a>
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

        <!-- Tampilan Data Produk menggunakan Accordion -->
        <div class="accordion mt-3" id="productAccordion">
        @foreach($products as $product)
            <div data-toggle="collapse" data-target="#collapse{{ $product->id }}" aria-expanded="true" aria-controls="collapse{{ $product->id }}">
                <div class="card-header" id="heading{{ $product->id }}">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="font-weight-bold" style="font-size: 25px;">{{ $product->name }}</span>
                            <p class="mb-0" style="font-size: 12px; margin-top: -8px; font-weight: medium; padding-left: 1px">{{ $product->subtitle }}</p>
                        </div>

                        <div>
                            <a href="{{ route('product-edit', $product->id) }}" class="btn btn-success">Edit</a>
                            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirmDeleteModal{{ $product->id }}">Delete</button>
                        </div>
                    </div>
                </div>

                <div id="collapse{{ $product->id }}" class="collapse" aria-labelledby="heading{{ $product->id }}" data-parent="#productAccordion">
                    <div class="card-body">
                        <p class="product-desc">{{ $product->desc }}</p>
                        <a href="{{ $product->link }}" target="_blank" class="btn btn-danger text-white">
                            Try Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Modal Konfirmasi Hapus -->
            <div class="modal fade" id="confirmDeleteModal{{ $product->id }}" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="confirmDeleteModalLabel">Confirm Delete</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete <strong>{{ $product->name }}</strong>?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                            <form id="delete-form-{{ $product->id }}" action="{{ route('delete-product', $product->id) }}" method="POST">
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
        <!-- Tampilan Data Produk menggunakan Accordion End -->
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