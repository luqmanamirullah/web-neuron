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
                    <li class="breadcrumb-item active">Edit Career</li>
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
            <form action="{{ route('career-update', $career->id) }}" method="POST">
                {{ csrf_field() }}
                {{ method_field('PUT') }}

                <div class="form-group">
                    <label for="positionName">Position Name</label>
                    <input type="text" class="form-control" id="positionName" name="name" value="{{ $career->name_position }}" required>
                </div>

                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" class="form-control" id="location" name="location" value="{{ $career->location }}" required>
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" name="desc" rows="5" required>{{ $career->desc }}</textarea>
                </div>

                <div class="form-group">
                    <label for="responsibilities">Responsibilities</label>
                    <textarea class="form-control" id="responsibilities" name="responsibilities" rows="5" required>{{ $career->responsibilities }}</textarea>
                </div>

                <div class="form-group">
                    <div class="d-flex">
                        <label for="skillRequirements">Skill Requirement</label>
                        <button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target="#addSkillModal">Add Skill</button>
                    </div>
                    
                    <ul>
                        @foreach ($career->skillRequirements as $skill)
                            <li>{{ $skill->name }}</li>
                        @endforeach
                    </ul>
                </div>
                
                <div class="form-group">
                    <div class="d-flex">
                        <label for="jobPlusValues">Plus Value</label>
                        <button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target="#addPlusValueModal">Add Plus Value</button>
                    </div>

                    <ul>
                        @foreach ($career->jobPlusValues as $plusValue)
                            <li>{{ $plusValue->name }}</li>
                        @endforeach
                    </ul>
                </div>

                <div class="form-group">
                    <label for="link">Link</label>
                    <input type="text" class="form-control" id="link" name="link" value="{{ $career->link }}">
                </div>

                <div class="form-group">
                    <label for="gender">Gender</label>
                    <select class="form-control" id="gender" name="gender" required>
                        <option value="Man" {{ $career->jobQualification->gender == 'Man' ? 'selected' : '' }}>Man</option>
                        <option value="Female" {{ $career->jobQualification->gender == 'Female' ? 'selected' : '' }}>Female</option>
                        <option value="Man/Female" {{ $career->jobQualification->gender == 'Man/Female' ? 'selected' : '' }}>Man/Female</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="domicile">Domicile</label>
                    <input type="text" class="form-control" id="domicile" name="domicile" value="{{ $career->jobQualification->domicile }}" required>
                </div>

                <div class="form-group">
                    <label for="education">Education</label>
                    <input type="text" class="form-control" id="education" name="education" value="{{ $career->jobQualification->education }}" required>
                </div>

                <div class="form-group">
                    <label for="major">Major</label>
                    <input type="text" class="form-control" id="major" name="major" value="{{ $career->jobQualification->major }}" required>
                </div>

                <div class="form-group">
                    <label for="other">Other Qualifications</label>
                    <input type="text" class="form-control" id="other" name="other" value="{{ $career->jobQualification->other }}" required>
                </div>

                <a href="{{ URL::previous() }}" class="btn btn-primary">Back</a>
                <button type="submit" class="btn btn-primary float-right">Update</button>
            </form>

            <!-- Modal untuk menambahkan skill -->
            <div class="modal fade" id="addSkillModal" tabindex="-1" aria-labelledby="addSkillModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addSkillModalLabel">Add Skill</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Form untuk menambahkan skill -->
                            <form action="{{ route('career.add-skill', $career->id) }}" method="post">
                                {{ csrf_field() }}
                                <div class="form-group">
                                    <label for="skill_name">Skill Name</label>
                                    <input type="text" class="form-control" id="skill_name" name="skill_name" required>
                                </div>
                                <button type="submit" class="btn btn-primary">Add Skill</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal untuk menambahkan plus value -->
            <div class="modal fade" id="addPlusValueModal" tabindex="-1" aria-labelledby="addPlusValueModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addPlusValueModalLabel">Add Plus Value</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Form untuk menambahkan skill -->
                            <form action="{{ route('career.add-plusValue', $career->id) }}" method="post">
                                {{ csrf_field() }}
                                <div class="form-group">
                                    <label for="plusvalue_name">Plus Value Name</label>
                                    <input type="text" class="form-control" id="plusvalue_name" name="plusvalue_name" required>
                                </div>
                                <button type="submit" class="btn btn-primary">Add Plus Value</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection