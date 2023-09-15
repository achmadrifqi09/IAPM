<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;


class PreventBack
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {

        $response = $next($request);
        $response->headers->set("Cache-Control", " no-store, no-cache, must-revalidate, max-age=0");
        $response->headers->set("Cache-Control", "post-check=0, pre-check=0");
        $response->headers->set("Pragma", "no-cache");

        return $response;
    }
}
