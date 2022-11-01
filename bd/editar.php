<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/cadastrar.css" />
    <title>Editando Veiculo...</title>
</head>

<body>
<?php 
    include "conexao.php";
    //o uso do get serve para pegar a pagina inteira e mandar para outro arquivo de forma "completa".
    $id = $_GET['id'] ?? '';
    $sql = "SELECT * FROM carros WHERE id = $id";

    $datas = mysqli_query($conexao, $sql);

    $linha = mysqli_fetch_assoc($datas);


    ?>
    <section class="container">
        <svg id="svg"></svg>
        <div id="formulario">
            <h1>Oficina de Veiculos</h1>
            <form action="../bd/cd_getdataedit.php" method="POST">
                <div class="input-container">
                    <input type="text" id="chassi" name="chassi" class="text-input" placeholder="Chassi do Veiculo" autocomplete="off" required value="<?php echo $linha['chassi']; ?>" />
                </div>
                <br>
                <div class="input-container">
                    <input type="text" id="modelocar" name="modelo" class="text-input" placeholder="Modelo do Veiculo" autocomplete="off" required value="<?php echo $linha['modelo']; ?>"/>
                </div>

                <br />
                <div class="input-container">
                    <input type="text" id="marca" name="marca" class="text-input" placeholder="Marca do Veiculo" autocomplete="off" required value="<?php echo $linha['marca']; ?>"/>
                </div>
                <br />
                <div class="input-container">
                    <label for="type" class="label"></label>
                    <select name="tipo" id="tipo" required value="<?php echo $linha['tipo']; ?>">
                        <option value="Hatch">Hatch</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Suv">SUV</option>
                    </select>
                </div>
                <br />
                <div class="input-container">
                    <label for="situacao" class="label"></label>
                    <select name="situacao" id="situacao" required value="<?php echo $linha['situacao']; ?>">
                        <option value="Disponivel">Disponivel</option>
                        <option value="Indisponivel">Indisponivel</option>
                    </select>
                </div>
                <br /><br />
                <input class="btcadastrar" id="submit" type="submit" name="submit" value="Editar e Voltar">
                <input type="hidden" name="id" value="<?php echo $linha['id']; ?>">
                <br />
            </form>