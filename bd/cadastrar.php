<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/cadastrar.css" />
    <title>Oficina de Cadastros</title>
</head>

<body>
    <section class="container">
        <div id="formulario">
            <h1>Cadastro de Veiculos</h1>
            <br>
            <h2>Feliz Halloween</h2>
            <!-- o action daqui coleta as informaçoes e manda pro arquivo cd_getdata pelo metodo POST que pega todas as informaçoes e transforma e um metodo de "leitura"-->
            <form action="../bd/cd_getdata.php" method="POST">
                <div class="input-container">
                    <input type="text" id="chassi" name="chassi" class="text-input" placeholder="Chassi do Veiculo" autocomplete="off" required />
                </div>
                <br>
                <div class="input-container">
                    <input type="text" id="modelocar" name="modelo" class="text-input" placeholder="Modelo do Veiculo" autocomplete="off" required />
                </div>

                <br />
                <div class="input-container">
                    <input type="text" id="marca" name="marca" class="text-input" placeholder="Marca do Veiculo" autocomplete="off" required />
                </div>
                <br />
                <div class="input-container">
                    <label for="type" class="label"></label>
                    <select name="tipo" id="tipo" required>
                        <option value="" disabled selected>Tipo de Veiculo</option>
                        <option value="Hatch">Hatch</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Suv">SUV</option>
                    </select>
                </div>
                <br />
                <div class="input-container">
                    <label for="situacao" class="label"></label>
                    <select name="situacao" id="situacao" required>
                        <option value="" disabled selected>Disponibilidade</option>
                        <option value="Disponivel">Disponivel</option>
                        <option value="Indisponivel">Indisponivel</option>
                    </select>
                </div>
                <br /><br />
                <input class="btcadastrar" id="submit" type="submit" name="submit" value="Cadastrar">
                <br />
            </form>