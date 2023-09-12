@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">View Blog</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('blog') }}">Blog</a></li>
                    <li class="breadcrumb-item active">View Blog</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="container">
        <style>
            .card-body{
                border: 1px solid #ccc;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                margin: 10px;
                padding: 20px;
                background-color: white;
            }
            .blog-img{
                max-width: 100%;
                width: 100%;
                object-fit: cover;
            }
        </style>
        <div class="col-md-12">
            <div class="card-body">
                <img class="blog-img" src="{{ asset($blog->image) }}" alt="{{ $blog->image }}">
                <div class="d-flex mt-3 text-bold">
                    <p>{{ $blog->created_at->format('d/m/Y') }} | </p>
                    <p class="pl-1">{{ $blog->author }}</p>
                </div>
                <h1 class="text-bold" style="font-size: 52px">{{ $blog->title }}</h1>
                <p class="text-medium" style="font-size: 16px;">{{ $blog->desc }}</p>
                <h5 class="text-bold" style="font-family: Raleway; font-size: 22px; color: red;">//</h5>
                <div style="margin-top: -30px;">{!! $blog->body !!}</div>
            </div>
        </div>
        <a href="{{ route('blog') }}" class="btn btn-primary ml-3">Back</a>
    </div>
</div>
@endsection
