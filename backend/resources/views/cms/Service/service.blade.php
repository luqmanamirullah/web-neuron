@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Service</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item active">Service</a></li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
    <div class="container">
        <div class="mt-3">
            <form action="{{ route('show-service') }}" method="GET">
                @csrf
                <div class="input-group" style="width: 100%;">
                    <input type="text" class="form-control" name="search" placeholder="Search...">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                    <a href="{{ route('service-create') }}" class="btn btn-success ml-5">Add Service</a>
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
        <div id="error-message" class="mt-3">
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>
        <div class="row mt-3">
            <style>
                .service-card {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    background-color: white;
                    margin: 10px;
                    padding: 20px;
                }
                .service-img {
                    height: 300px;
                    width: 100%;
                    object-fit: cover;
                }
            </style>
            @foreach($services as $service)
                <div class="service-card">
                    <div class="d-flex">
                        <div>
                            <h4 class="service-name text-bold">{{ $service->name }}</h4>
                            <p class="service-desc">{{ $service->desc }}</p>
                            <div class="d-flex">
                                <div class="technology-card" style="margin-right: 30px;"> <!-- Menambahkan margin kanan sebesar 20px -->
                                    <h5 class="text-bold">Technology Used</h5>
                                    <ul style="list-style: none;">
                                        @foreach ($service->serviceTechnology as $serviceTech)
                                            @if ($serviceTech->technology)
                                                <li class="pb-3">
                                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                                        <div>
                                                            @if (!empty($serviceTech->technology->icon))
                                                                <img src="{{ $serviceTech->technology->icon }}" alt="{{ $serviceTech->technology->name }}">
                                                            @endif
                                                            {{ $serviceTech->technology->name }}
                                                        </div>
                                                        <form method="POST" action="{{ route('delete-technology-service', ['id' => $service->id, 'technology_id' => $serviceTech->technology->id]) }}">
                                                            @csrf
                                                            @method('DELETE')
                                                            <button type="submit" class="btn btn-danger ml-3">Delete</button>
                                                        </form>
                                                    </div>
                                                </li>
                                            @endif
                                        @endforeach
                                    </ul>
                                </div>
                                <div class="servicekey-card" style="margin-left: 30px;"> <!-- Menambahkan margin kiri sebesar 20px -->
                                    <h5 class="text-bold">Key Feature</h5>
                                    <ul>
                                        @foreach ($service->servicekeys as $serviceKey)
                                            <li class="pb-3 text-bold">
                                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                                    <div>
                                                        {{ $serviceKey->name }}
                                                    </div>
                                                    <form method="POST" action="{{ route('delete-keyFeature', ['services_id' => $service->id, 'keyfeature_id' => $serviceKey->id]) }}">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="btn btn-danger ml-3">Delete</button>
                                                    </form>
                                                </div>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img class="service-img" src="{{ asset($service->image) }}" alt="{{ $service->name }}">
                    </div>
                    <div class="actions">
                        <a href="{{ route('service-edit', $service->id) }}" class="btn btn-success">Edit</a>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirmDeleteModal{{ $service->id }}">Delete</button>
                    </div>
                    <!-- Modal Konfirmasi Hapus -->
                    <div class="modal fade" id="confirmDeleteModal{{ $service->id }}" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="confirmDeleteModalLabel">Confirm Delete</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Are you sure you want to delete <strong>{{ $service->name }}</strong>?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                    <form id="delete-form-{{ $service->id }}" action="{{ route('delete-service', $service->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger">Yes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal Konfirmasi Hapus End -->
                </div>
            @endforeach
        </div>
    </div>
</div>
<script>
    // Cari elemen pesan sukses
    var successMessage = document.getElementById('success-message');
    var errorMessage = document.getElementById('error-message');

    // Periksa apakah pesan sukses ada
    if (successMessage) {
        // Sembunyikan pesan sukses setelah 5 detik
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000); // 5000 milidetik (5 detik)
    }
    if (errorMessage) {
        // Sembunyikan pesan sukses setelah 5 detik
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000); // 5000 milidetik (5 detik)
    }
</script>
@endsection