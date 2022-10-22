<?php
    // isset -> serve para saber se uma variável está definida
    include_once('conexao.php');

    //Pega todas as informações de um id, edita e Salva essas informações no banco e manda para main
    if(isset($_POST['update']))
    {
        //pega as informações
        $id         = $_POST['id'];
        $placa      = $_POST['placa'];
        $modelo     = $_POST['modelo'];
        $marca      = $_POST['marca'];
        $tipo       = $_POST['tipo'];
        $situacao   = $_POST['situacao'];
        
        //edita as informações no banco
        $sqlInsert = "UPDATE veiculos SET id='$id', placa='$placa', modelo='$modelo', marca='$marca', tipo='$tipo', situacao='$situacao' WHERE id=$id";
        $result = $conn->query($sqlInsert);
    }
    //manda para main
    header('Location: ../html/index.php');

?>