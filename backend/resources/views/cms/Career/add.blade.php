@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Add Career</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('career') }}">Career</a></li>
                    <li class="breadcrumb-item active">Add Career</li>
                </ol>
            </div>
        </div>
    </div>

    <div id="success-message" class="mt-3">
        @if(session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif
    </div>

    <style>
        .qualification-field {
            display: none;
        }
    </style>

    <div class="container">
        <div class="mt-3">
            <form action="{{ route('career-store') }}" method="POST">
                @csrf
                <div class="form-group">
                    <label for="positionName">Position Name</label>
                    <input type="text" class="form-control" id="positionName" name="name" required>
                </div>

                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" class="form-control" id="location" name="location" required>
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" name="desc" rows="5" required></textarea>
                </div>

                <div class="form-group">
                    <label for="responsibilities">Responsibilities</label>
                    <textarea class="form-control" id="responsibilities" name="responsibilities" rows="5" required></textarea>
                </div>

                <div class="form-group" id="skill-container">
                    <div class="d-flex">
                        <label for="skillRequirements">Skill Requirement</label>
                        <button type="button" class="btn btn-primary ml-auto" id="button-skill">Add Skill</button>
                    </div>
                    <input type="text" class="form-control" id="skillRequirements" name="skillRequirements[]" placeholder="Skill" required>
                </div>
                
                <div class="form-group" id="plusValue-container">
                    <div class="d-flex">
                        <label for="jobPlusValues">Plus Value</label>
                        <button type="button" class="btn btn-primary ml-auto" id="button-plusValue">Add Plus Value</button>
                    </div>
                </div>

                <div class="form-group">
                    <label for="link">Link</label>
                    <input type="text" class="form-control" id="link" name="link">
                </div>

                <div class="form-group">
                    <label for="gender">Gender</label>
                    <select class="form-control" id="gender" name="gender" required>
                        <option value="Man">Man</option>
                        <option value="Female">Female</option>
                        <option value="Man/Female">Man/Female</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="domicile">Domicile</label>
                    <input type="text" class="form-control" id="domicile" name="domicile" required>
                </div>

                <div class="form-group">
                    <label for="education">Education</label>
                    <input type="text" class="form-control" id="education" name="education" required>
                </div>

                <div class="form-group">
                    <label for="major">Major</label>
                    <input type="text" class="form-control" id="major" name="major" required>
                </div>

                <div class="form-group">
                    <label for="other">Other Qualifications</label>
                    <input type="text" class="form-control" id="other" name="other" required>
                </div>

                <a href="{{ URL::previous() }}" class="btn btn-primary">Back</a>
                <button type="submit" class="btn btn-primary float-right">Add</button>
            </form>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function () {
        var skillContainer = $('#skill-container');
        
        $('#button-skill').click(function () {
            var newInput = $('<input type="text" class="form-control" name="skillRequirements[]" placeholder="Skill" required>');
            skillContainer.append(newInput);
        });
    });
</script>
<script>
    $(document).ready(function () {
        var plusValueContainer = $('#plusValue-container');
        
        $('#button-plusValue').click(function () {
            var newInput = $('<input type="text" class="form-control" id="jobPlusValues" name="jobPlusValues[]" placeholder="Plus Value">');
            plusValueContainer.append(newInput);
        });
    });
</script>
@endsection