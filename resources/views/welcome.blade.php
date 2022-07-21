<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        @vite([
        'resources/css/app.css',
        'resources/js/app.js',
        'public/css/style.css',
        'public/js/main.js'
        ])

{{--        <link rel="stylesheet" href="{{asset('/frontend/assets/css/style.css')}}">--}}
    </head>
    <body class="antialiased">

    <div id="app"></div>

{{--    <script src="{{asset('/frontend/assets/css/main.js')}}"></script>--}}
    </body>
</html>