<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IAPM Elinksolution</title>
</head>
<body>
    <span>Sender name: {{$details['name']}} </span><br>
    <span>Sender email: {{$details['email']}} </span>
    <br><br>
    <span>Message:</span><br>
    <p>{{$details['message']}}</p>
</body>
</html>