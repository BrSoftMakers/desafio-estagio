<?php
    include_once('conexao.php');

    //Se o for diferente de vazio pega todas as informações de um id se não manda de volta para main
    if(!empty($_GET['id'])){

        //pega todas as informações de um id
        $id = $_GET['id'];
        $sqlSelect = "SELECT * FROM veiculos WHERE id=$id";
        $result = $conn->query($sqlSelect);
        
        if($result->num_rows > 0)
        {
            //Pega as informações do id e coloca dentro dos input`s
            while($user_data = mysqli_fetch_assoc($result))
            {
                $placa       = $user_data['placa'];
                $modelo      = $user_data['modelo'];
                $marca       = $user_data['marca'];
                $tipo        = $user_data['tipo'];
                $situacao    = $user_data['situacao'];
            }
        }
        else
        {
            header('Location: ../html/index.php');
        }
    }
    else
    {
        header('Location: ../html/index.php');
    }
?>