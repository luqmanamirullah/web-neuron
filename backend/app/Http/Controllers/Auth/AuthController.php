<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function loginpage()
    {
        return view('login.login');
    }

    public function postlogin(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();

            // Buat atau perbarui token personal access untuk pengguna yang berhasil login
            $token = $user->createToken('auth_token')->plainTextToken;

            return redirect('/adminpanel')->with('auth_token', $token)->with('success', 'Welcome ' . $user->firstname . ' ' . $user->lastname);
        }
        return redirect('/login')->with('error', 'Invalid email or password.');
    }

    public function logout()
    {
        // Revoke (mencabut) semua token akses pribadi yang dimiliki pengguna saat ini
        Auth::user()->tokens()->delete();

        // Logout pengguna
        Auth::logout();

        // Set pesan flash
        return redirect('/login')->with('success', 'You have successfully logged out.');
    }
    public function refreshToken(Request $request)
    {
        $user = Auth::user();

        // Revoke (mencabut) semua token akses pribadi yang dimiliki pengguna saat ini
        $user->tokens()->delete();

        // Buat token akses baru
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return redirect('/adminpanel')->with('auth_token', $token);
    }

    public function adminpanel()
    {
        // Periksa apakah token masih berlaku (belum kedaluwarsa)
        $user = Auth::user();
        $tokenIsValid = $user->tokens->isNotEmpty();

        if ($tokenIsValid) {
            // Token masih berlaku, beri akses ke halaman adminpanel
            return view('pages.dashboard');
        }

        // Token telah kedaluwarsa, arahkan pengguna untuk memperbarui token
        return redirect()->route('refresh-token');
    }

    public function forgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
                    ? back()->with(['status' => __($status)])
                    : back()->withErrors(['email' => __($status)]);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET
                    ? redirect()->route('login')->with('status', __($status))
                    : back()->withErrors(['email' => [__($status)]]);
    }

    public function showChangePasswordForm()
    {
        return view('auth.change-password');
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);

        $user = Auth::user();

        if (Hash::check($request->current_password, $user->password)) {
            $user->update([
                'password' => Hash::make($request->new_password),
            ]);

            return redirect()->route('change-password')->with('success', 'Password changed successfully.');
        }

        return redirect()->route('change-password')->withErrors(['current_password' => 'Current password is incorrect.']);
    }
}
