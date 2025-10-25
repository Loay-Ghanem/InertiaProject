<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse;

class CustomLoginResponse implements LoginResponse
{
    public function toResponse($request)
    {
        return redirect()->route('home');
    }
}
