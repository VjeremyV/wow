<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function login(): Response
    {
        return Inertia::render('web/dashboard/index', [
            'title' => 'Dashboard',
            'description' => 'Dashboard description',
        ]);
    }

    public function authenticate(): Response
    {
        return Inertia::render('web/dashboard/index', [
            'title' => 'Dashboard',
            'description' => 'Dashboard description',
        ]);
    }
}
