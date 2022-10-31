<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/cadastrar.css" />
    <title>Alterando</title>
</head>

<body>
        <div id="container">
            <div class="row">
                <?php 
                //nessa area apenas o id e o chassi são pegos mas desta vez o id é  pego por um get e transformado em um post e dps são inseridos na query de deletar um dado
                include "../bd/conexao.php";
                $id = $_POST['id'];
                $chassi = $_POST['chassi'];
                

                $sql = "DELETE FROM carros WHERE id = $id";

                if (mysqli_query($conexao, $sql)) {
                    header('location: ../index.php');
                }else {
                    echo "Não foi possivel estabelecer conexao com o banco de dados! Verifique seu servidor local...";
                }
                
                ?>
                <a href="../index.php">Back</a>
            </div>
           </div> 