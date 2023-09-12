<?php

namespace App\Http\Controllers\Register;

use Hash;
use Validator;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Mail\RegistrationConfirmation;

class RegisterController extends Controller
{
    public function registerpage()
    {
        return view('register.register');
    }

    public function postregister(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email|unique:users',
            'role_id' => 'required|in:2,3',
            'password' => 'required|confirmed',
        ]);
        if ($validator->fails()) {
            return view('register.register')->with([
                'errors' => $validator->errors(),
                'message' => 'There is a mistake'
            ]);
        }

        // Save the user registration data to the user_pending table
        $user = new User([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'role_id' => $request->role_id,
            'password' => Hash::make($request->password),
        ]);

        $input = $request->all();
        $plainPassword = $input['password'];
        $input['password'] = bcrypt($input['password']);
        $success['name'] = $user->name;

        $user->save();

        Mail::to($user->email)->send(new RegistrationConfirmation($plainPassword,[
            'name' => $user->firstname . ' ' . $user->lastname,
            'email' => $user->email,
        ]));
        
        return redirect()->route('user')->with('success', 'Your registration is success');
    }
}
