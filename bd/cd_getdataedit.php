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
                include "../bd/conexao.php";
                $id = $_POST['id'];
                $chassi = $_POST['chassi'];
                $modelo = $_POST['modelo'];
                $marca = $_POST['marca'];
                $tipo = $_POST['tipo'];
                $situacao = $_POST['situacao'];

                $sql = "UPDATE carros SET chassi = '$chassi', modelo = '$modelo', marca = '$marca', tipo = '$tipo', situacao = '$situacao' WHERE id = $id";

                if (mysqli_query($conexao, $sql)) {
                    header('location: ../index.php');
                }else {
                    echo "Não foi possivel estabelecer conexao com o banco de dados! Verifique seu servidor local...";
                }
                
                ?>
                <a href="../index.php">Back</a>
            </div>
           </div> 