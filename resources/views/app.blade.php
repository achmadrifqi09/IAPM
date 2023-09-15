<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title inertia>{{ config('app.name', 'IAPM Elinksolution') }}</title>
    @inertiaHead
    <link rel="icon" href="{{asset('assets/images/ic-logo.svg')}}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    @vite('resources/js/app.jsx')
    @vite('resources/css/app.css')
</head>
<body>
    @inertia
</body>
</html>