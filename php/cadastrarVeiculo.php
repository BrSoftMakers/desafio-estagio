<?php
    session_start();
    
    //Quando o submit for pressionado ele registra as informações no banco
    if(isset($_POST['submit'])){

        include_once('conexao.php');

        //As informações que vão ser registradas no banco
        $placa      = $_POST['placa'];
        $modelo     = $_POST['modelo'];
        $marca      = $_POST['marca'];
        $tipo       = $_POST['tipo'];
        $situacao   = $_POST['situacao'];

        //Registrando as informações no banco
        $query = "INSERT INTO veiculos (placa, modelo, marca, tipo, situacao) VALUES ( '$placa', '$modelo', '$marca', '$tipo', '$situacao' )";

        $result = mysqli_query($conn, $query);
        
        //Manda de volta para main
        header('location: ../html/index.php');
    }
?>