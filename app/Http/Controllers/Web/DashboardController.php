<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index() : Response
    {
        return Inertia::render('web/dashboard/index', [
            'title' => 'Dashboard',
            'description' => 'Dashboard description',
        ]);
    }
}
