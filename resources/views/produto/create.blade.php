@extends('produto.principal')
@section('conteudo')
    <div class="form">
    <h2>Criar novo carro</h2>
    <form action="" method="POST">
        @csrf
        <label for="">Nome:</label><br>
        <input type="text" name="nome"><br>
        <label for="">Modelo:</label><br>
        <input type="text" name="modelo"><br>
        <label for="">Marca:</label><br>
        <input type="text" name="marca"><br>
        <label for="">Tipo:</label><br>
        <input type="radio" name="tipo" value="SUV">SUV
        <input type="radio" name="tipo" value="Sedan">Sedan
        <input type="radio" name="tipo" value="Hatch">Hatch<br>
        <label for="">Status:</label><br>
        <input type="radio" name="status" value="Alugado">Alugado
        <input type="radio" name="status" value="Disponivel">Disponivel<br><br>
        <button>Finalizar</button>
    </form>    
    </div>
@stop 