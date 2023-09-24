@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Add User</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('user') }}">User</a></li>
                    <li class="breadcrumb-item active">Edit User</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
    <div class="container">
        @if($errors->any())
        <div class="alert alert-danger">
            <strong>There is a mistake:</strong>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif
        <div class="card">
            <div class="card-body">
                <form action="{{ route('postregister') }}" method="post" enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input type="text" class="form-control" name="firstname" id="firstname" placeholder="First Name">
                    </div>

                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Last Name">
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password">
                    </div>

                    <div class="form-group">
                        <label for="password_confirmation">Confirm Password</label>
                        <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password">
                    </div>

                    <div class="form-group">
                        <label for="request_role_id">Request Role</label>
                        <select class="form-control" name="role_id">
                            <option value="" disabled selected>Request role</option>
                            <option value="2">Admin</option>
                            <option value="3">HCM/HRD</option>
                        </select>
                    </div>
                    <a href="{{ URL::previous() }}" class="btn btn-primary">Back</a>
                    <button type="submit" class="btn btn-primary float-right">Add User</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection