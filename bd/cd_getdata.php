<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/cadastrar.css" />
    <title>Cadastrar</title>
</head>

<body>
        <div id="container">
            <div class="row">
                <?php 
                //neste arquivo ele recebe as informações do post e transcreve para uma variavel pela variavel $_POST['name']. O insert into manda os arquivos para o banco de dados. O if query($conexao,$sql) verifica se ta tudo certo se tiver o header:location manda para a index.php que é main page
                include "../bd/conexao.php";
                $chassi = $_POST['chassi'];
                $modelo = $_POST['modelo'];
                $marca = $_POST['marca'];
                $tipo = $_POST['tipo'];
                $situacao = $_POST['situacao'];

                $sql = "INSERT INTO carros (id, chassi, modelo, marca, tipo, situacao) VALUES (NULL,'$chassi', '$modelo', '$marca', '$tipo', '$situacao')";

                if (mysqli_query($conexao, $sql)) {
                    header('location: ../index.php');
                }else {
                    echo "Não foi possivel estabelecer conexao com o banco de dados! Verifique seu servidor local...";
                }
                
                ?>
                <a href="../index.php">Back</a> <!-- esse back só esta aqui para inibir algum possivel erro de redirecionamento do header-->
            </div>
           </div> 
        