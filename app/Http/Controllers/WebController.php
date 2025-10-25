<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function about()
    {
        return inertia('AboutUs');
    }

    public function contact()
    {
        return inertia('Contact');
    }
}
