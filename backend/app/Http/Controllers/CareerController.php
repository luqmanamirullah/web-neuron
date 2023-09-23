<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\JobPlusValue;
use Illuminate\Http\Request;
use App\Models\JobQualification;
use App\Models\SkillRequirement;
use Illuminate\Support\Facades\DB;

class CareerController extends Controller
{
    public function career()
    {
        return view('cms.Career.career');
    }

    public function showcareer(Request $request)
    {
        $search = $request->input('search'); // Ambil nilai dari input pencarian

        // Jika ada parameter pencarian, lakukan pencarian berdasarkan nama atau deskripsi
        if ($search) {
            $careers = Job::with('jobQualification')->where('name_position', 'like', '%' . $search . '%')
                ->get();
        } else {
            // Jika tidak ada parameter pencarian, ambil semua data career
            $careers = Job::with('jobQualification')->get();
        }

        return view('cms.Career.career', compact('careers'));
    }

    public function deleteSkill($career_id, $skill_id)
    {
        $career = Job::find($career_id);

        // Pastikan career ditemukan
        if (!$career) {
            return redirect()->route('career')->with('error', 'Career not found.');
        }

        // Temukan deliverable berdasarkan ID
        $skill = SkillRequirement::find($skill_id);

        // Pastikan deliverable ditemukan
        if (!$skill) {
            return redirect()->route('career')->with('error', 'Career not found.');
        }

        $skill->delete();

        return redirect()->route('career')->with('success', 'Career deleted successfully.');
    }

    public function deletePlusValue($career_id, $plusvalue_id)
    {
        $career = Job::find($career_id);

        // Pastikan career ditemukan
        if (!$career) {
            return redirect()->route('career')->with('error', 'Career not found.');
        }

        $plusValue = JobPlusValue::find($plusvalue_id);

        if (!$plusValue) {
            return redirect()->route('career')->with('error', 'Plus Value not found.');
        }

        $plusValue->delete();

        return redirect()->route('career')->with('success', 'Plus Value deleted successfully.');
    }

    public function updatePlusValue(Request $request, $career_id, $plusvalue_id)
    {
        // Dapatkan data Plus Value yang akan diupdate
        $plusValue = JobPlusValue::find($plusvalue_id);

        if (!$plusValue) {
            return back()->with('error', 'Plus Value not found.');
        }

        // Update data Plus Value
        $plusValue->name = $request->input('name');
        $plusValue->save();

        return redirect()->route('show-career')->with('success', 'Plus Value updated successfully.');
    }

    public function updateSkill(Request $request, $career_id, $skill_id)
    {
        // Dapatkan data Skill yang akan diupdate
        $skill = SkillRequirement::find($skill_id);

        if (!$skill) {
            return back()->with('error', 'Skill not found.');
        }

        // Update data Skill
        $skill->name = $request->input('name');
        $skill->save();

        return redirect()->route('show-career')->with('success', 'Skill updated successfully.');
    }

    public function create()
    {
        $career = new Job();
        return view('cms.Career.add', compact('career'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'desc' => 'required|string',
            'responsibilities' => 'required|string',
            'gender' => 'required|in:Man,Female,Man/Female',
            'domicile' => 'required|string|max:255',
            'education' => 'required|string|max:255',
            'major' => 'required|string|max:255',
            'other' => 'required|string',
            'link' => 'string|max:255',
            'skillRequirements' => 'required|array',
            'jobPlusValues' => 'nullable|array',
        ]);

        // Simpan data ke dalam tabel jobs_qualification
        $qualification = new JobQualification([
            'gender' => $request->input('gender'),
            'domicile' => $request->input('domicile'),
            'education' => $request->input('education'),
            'major' => $request->input('major'),
            'other' => $request->input('other'),
        ]);

        $qualification->save();

        // Simpan data ke dalam tabel jobs
        $career = new Job([
            'name_position' => $request->input('name'),
            'location' => $request->input('location'),
            'desc' => $request->input('desc'),
            'responsibilities' => $request->input('responsibilities'),
            'link' => $request->input('link'),
            'jobs_qualification_id' => $qualification->id, // Menggunakan ID dari jobs_qualification yang baru saja dibuat
        ]);

        $career->save();

        // Simpan skill ke dalam tabel skill_requirements
        $skillRequirements = $request->input('skillRequirements');
        if (!empty($skillRequirements)) {
            foreach ($skillRequirements as $skill) {
                SkillRequirement::create([
                    'name' => $skill,
                    'jobs_id' => $career->id,
                ]);
            }
        }

        // Simpan Plus value ke dalam tabel job_plus_values
        $jobPlusValues = $request->input('jobPlusValues');
        if (!empty($jobPlusValues)) {
            foreach ($jobPlusValues as $plusValue) {
                JobPlusValue::create([
                    'name' => $plusValue,
                    'jobs_id' => $career->id,
                ]);
            }
        }

        // Redirect ke halaman yang sesuai atau tampilkan pesan sukses
        return redirect()->route('career')->with('success', 'Career added successfully.');
    }

    public function deletecareer($id)
    {
        $careers = Job::findOrFail($id);

        JobPlusValue::where('jobs_id', $id)->delete();

        SkillRequirement::where('jobs_id', $id)->delete();

        // Hapus pekerjaan
        $careers->delete();

        $careers->jobQualification()->delete();

        return redirect()->route('career')->with('success', 'Career has been deleted successfully.');
    }

    public function edit($id)
    {
        $career = Job::findOrFail($id);
        return view('cms.Career.edit', compact('career'));
    }

    public function update(Request $request, $id)
    {
        $career = Job::findOrFail($id);

        // Validasi data yang dikirim oleh form
        $validatedData = $request->validate([
            'name' => 'required|string',
            'location' => 'required|string',
            'desc' => 'required|string',
            'responsibilities' => 'required|string',
            'link' => 'nullable|string',
            'gender' => 'required|in:Man,Female,Man/Female',
            'domicile' => 'required|string',
            'education' => 'required|string',
            'major' => 'required|string',
            'other' => 'nullable|string',
        ]);

        // Update data karier dengan data baru
        $career->update([
            'name_position' => $validatedData['name'],
            'location' => $validatedData['location'],
            'desc' => $validatedData['desc'],
            'responsibilities' => $validatedData['responsibilities'],
            'link' => $validatedData['link'],
        ]);

        // Update data kualifikasi karier
        $career->jobQualification->update([
            'gender' => $validatedData['gender'],
            'domicile' => $validatedData['domicile'],
            'education' => $validatedData['education'],
            'major' => $validatedData['major'],
            'other' => $validatedData['other'],
        ]);

        $career->save();

        // Redirect ke halaman yang sesuai setelah berhasil mengedit
        return redirect()->route('career')->with('success', 'Career updated successfully');
    }

    public function addSkillEdit(Request $request, $career_id)
    {
        // validasi data inputan
        $this->validate($request, [
            'skill_name' => 'required|string|max:225',
        ]);

        $career = Job::findOrFail($career_id);

        // Buat skill baru
        $skill = new SkillRequirement();
        $skill->name = $request->input('skill_name');

        $career->skillRequirements()->save($skill);

        return redirect()->route('career-edit', $career->id)->with('success', 'Career has been added successfully.');
    }

    public function addPlusValueEdit(Request $request, $career_id)
    {
        // validasi data inputan
        $this->validate($request, [
            'plusvalue_name' => 'required|string|max:225',
        ]);

        $career = Job::findOrFail($career_id);

        // Buat plusValue baru
        $plusValue = new JobPlusValue();
        $plusValue->name = $request->input('plusvalue_name');

        $career->skillRequirements()->save($plusValue);

        return redirect()->route('career-edit', $career->id)->with('success', 'Plus value has been added successfully.');
    }
}
