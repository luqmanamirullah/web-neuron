@extends('layouts.master')

@section('content')
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">Career</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{ route('adminpanel') }}">Home</a></li>
                    <li class="breadcrumb-item active">Career</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->

    <div class="container">
        <div class="mt-3">
            <form action="{{ route('show-career') }}" method="GET">
                @csrf
                <div class="input-group" style="width: 100%;">
                    <input type="text" class="form-control" name="search" placeholder="Search...">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                    <a href="{{ route('career-create') }}" class="btn btn-success ml-5">Add Career</a>
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

        <div class="accordion mt-3" style="background-color: white;" id="careerAccordion">
            @foreach($careers as $career)
                <div data-toggle="collapse" data-target="#collapse{{ $career->id }}" aria-expanded="true" aria-controls="collapse{{ $career->id }}">
                    <div class="card-header" id="heading{{ $career->id }}">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex">
                                <h5 class="font-weight-bold" style="font-size: 25px;">{{ $career->name_position }}</h5>
                            </div>
                            
                            <div class="d-flex">
                                <h5 class="font-weight-bold mr-5" style="font-size: 25px;">{{ $career->location }}</h5>
                                <a href="{{ route('career-edit', $career->id) }}" class="btn btn-success mr-1">Edit</a>
                                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#confirmDeleteModal{{ $career->id }}">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="collapse{{ $career->id }}" class="collapse" aria-labelledby="heading{{ $career->id }}" data-parent="#careerAccordion">
                    <div class="card-body">
                        <p class="career-desc">{{ $career->desc }}</p>
                        <h5 class="text-bold">Responsibility</h5>
                        <p class="career-respon">{{ $career->responsibilities }}</p>
                        <h5 class="text-bold">Skill</h5>
                        <ul>
                            @foreach ($career->skillRequirements as $skill)
                            <li class="pb-3">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        {{ $skill->name }}
                                    </div>
                                    <div class="d-flex">
                                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editSkillModal{{ $skill->id }}">Edit</button>
                                        <form method="POST" action="{{ route('delete-skill', ['career_id' => $career->id, 'skill_id' => $skill->id]) }}">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger ml-3">Delete</button>
                                        </form>
                                    </div>
                                </div>
                            </li>
                            <!-- Modal edit skill -->
                            <div class="modal fade" id="editSkillModal{{ $skill->id }}" tabindex="-1" aria-labelledby="editSkillModalLabel{{ $skill->id }}" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="editSkillModalLabel">Edit Skill</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form method="POST" action="{{ route('edit-skill', ['career_id' => $career->id, 'skill_id' => $skill->id]) }}">
                                            @csrf
                                            @method('PUT')
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label for="editSkillName">Skill Name</label>
                                                    <input type="text" class="form-control" id="editSkillName" name="name" value="{{ $skill->name }}">
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Save Changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Akhir modal edit skill -->
                            @endforeach
                        </ul>
                        <h5 class="text-bold">Qualification</h5>
                        <div class="d-flex" style="justify-content: space-between;">
                            <div>
                                <h6 class="text-bold">Gender</h6>
                                <p>{{ $career->jobQualification->gender }}</p>
                            </div>
                            <div>
                                <h6 class="text-bold">Domicile</h6>
                                <p>{{ $career->jobQualification->domicile }}</p>
                            </div>
                            <div>
                                <h6 class="text-bold">Education</h6>
                                <p>{{ $career->jobQualification->education }}</p>
                            </div>
                            <div>
                                <h6 class="text-bold">Major</h6>
                                <p>{{ $career->jobQualification->major }}</p>
                            </div>
                            <div>
                                <h6 class="text-bold">Other</h6>
                                <p>{{ $career->jobQualification->other }}</p>
                            </div>
                        </div>
                        <h5 class="text-bold">Plus Value</h5>
                        <ul>
                            @foreach ($career->jobPlusValues as $plusValue)
                            <li class="pb-3">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <div>
                                        {{ $plusValue->name }}
                                    </div>
                                    <div class="d-flex">
                                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editPlusValueModal{{ $plusValue->id }}">Edit</button>
                                        <form method="POST" action="{{ route('delete-plus-value', ['career_id' => $career->id, 'plusvalue_id' => $plusValue->id]) }}">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger ml-3">Delete</button>
                                        </form>
                                    </div>
                                </div>
                            </li>
                            <!-- Modal edit plus value -->
                            <div class="modal fade" id="editPlusValueModal{{ $plusValue->id }}" tabindex="-1" aria-labelledby="editPlusValueModalLabel{{ $plusValue->id }}" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="editPlusValueModalLabel">Edit Plus Value</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form method="POST" action="{{ route('edit-plus-value', ['career_id' => $career->id, 'plusvalue_id' => $plusValue->id]) }}">
                                            @csrf
                                            @method('PUT')
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label for="editPlusValueName">Name</label>
                                                    <input type="text" class="form-control" id="editPlusValueName" name="name" value="{{ $plusValue->name }}">
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Save Changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Akhir modal edit plus value -->
                            @endforeach
                        </ul>
                        <a href="{{ $career->link }}" target="_blank" class="btn btn-danger text-white float-right">
                        Apply <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                <!-- Modal Konfirmasi Hapus -->
                <div class="modal fade" id="confirmDeleteModal{{ $career->id }}" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="confirmDeleteModalLabel">Confirm Delete</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to delete <strong>{{ $career->name_position }}</strong>?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                                <form id="delete-form-{{ $career->id }}" action="{{ route('delete-career', $career->id) }}" method="POST">
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
<!-- Sertakan file JavaScript Bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
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
<script>
    // Fungsi untuk menampilkan modal saat tombol "Edit" diklik
    function openEditSkillModal(skillId) {
        var modalId = 'editSkillModal' + skillId;
        var modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    }
    
    // Fungsi untuk menampilkan modal saat tombol "Delete" diklik
    function openConfirmDeleteModal(careerId) {
        var modalId = 'confirmDeleteModal' + careerId;
        var modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    }
</script>
@endsection