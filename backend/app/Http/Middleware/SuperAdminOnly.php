<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SuperAdminOnly
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->check()) {
            return redirect('/login');
        }
        // Check if the user's role is not Super Admin
        if (auth()->user()->role_id !== 1) { // Super Admin memiliki role_id 1, sesuaikan dengan ID peran Super Admin Anda
            return response()->view('errors.403', [], 403);
        }

        return $next($request);
    }
}
