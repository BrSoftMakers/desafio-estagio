<?php
    session_start();
    //Se o for diferente de vazio pega todas as informações de um id e deleta do banco
    if(!empty($_GET['id']))
    {
        include_once('conexao.php');

        //pegando as informações de um id
        $id = $_GET['id'];
        $sqlSelect = "SELECT * FROM veiculos WHERE id=$id";
        $result = $conn->query($sqlSelect);

        //Deleta as informações do id do banco
        if($result->num_rows > 0)
        {
            $sqlDelete = "DELETE FROM veiculos WHERE id=$id";
            $resultDelete = $conn->query($sqlDelete);
        }
    }
    //manda de volta para main
    header('Location: ../html/index.php');
   
?>