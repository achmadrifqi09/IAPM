<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Inertia\Inertia;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    protected $messages = [
        500 => 'Oops sorry there is something wrong, we cannot serve your request.',
        503 => 'Oops sorry service is not available, we cannot serve your request.',
        404 => 'Oops sorry page not found, we cannot serve your request.',
        403 => 'Oops sorry, we detected your request not authorized',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e)
    {
        $response  = parent::render($request, $e);

        $status = $response->getStatusCode();

        if (!array_key_exists($status, $this->messages)) {
            return $response;
        }

        return Inertia::render('Error/index', [
            'status' => $status,
            'message' => $this->messages[$status]
        ])->toResponse($request)->setStatusCode($status);
    }
}
