<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Locadora</title>
    <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}" media="screen" />
</head>
<body>
    @section('siderbar')
    <nav class="header">
        <ul>
            <li><a href="http://127.0.0.1:8000/home">Locadora de Carros</a></li>
            <li><a href="http://127.0.0.1:8000/lista">Lista</a></li>
            <li><a href="http://127.0.0.1:8000/novo">Novo</a></li>
        </ul>
        </nav>
    <div class="background">
        
        
        @show
        <div class="conteudo">
        @yield('conteudo')  
        </div> 

    </div>
     
</body>
</html>