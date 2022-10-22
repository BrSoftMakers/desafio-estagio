<?php
    session_start();
    include_once('conexao.php');
    
    //Pega a informação que foi colocado no input de pesquisa e 
    //verifica se essa informação corresponde a alguma informação no banco de dados
    if(!empty($_GET['search'])){
        $data = $_GET['search'];
        $sql = "SELECT * FROM veiculos WHERE id LIKE '%$data%' or placa LIKE '%$data%' or modelo LIKE '%$data%' or marca LIKE '%$data%' or tipo LIKE '%$data%' or situacao LIKE '%$data%' ORDER BY id DESC";
    }
    else {   
        $sql = "SELECT * FROM veiculos ORDER BY id DESC";
    }
    $result = $conn->query($sql);
?>