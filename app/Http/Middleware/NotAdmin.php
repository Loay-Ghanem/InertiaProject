<?php

namespace App\Http\Middleware;

use Closure;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class NotAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (isAdmin()) {
            return $request->inertia()
                ? Inertia::location(route('filament.admin.auth.login'))
                : redirect()->route('filament.admin.auth.login');
        }

        return $next($request);
    }
}
