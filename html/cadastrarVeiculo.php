<!DOCTYPE html>
<html lang="pt-br">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Veiculo</title>
    <link rel="icon" type="image/png" sizes="16x16" href="../img/logo.jpg">
    <link rel="stylesheet" href="../css/cadastrarVeiculo.css">

</head>
<body>

    <a href="index.php">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
    </a>

    <section class="container">

        <div id="formulario">
            <h1>Cadastrar Veiculo</h1>
            <form action="../php/cadastrarVeiculo.php" method="POST" >
                
                <div class="input-container">
                    <input type="text" id="placa" name="placa" class="text-input" placeholder="Placa do Veiculo" autocomplete="off" required/>
                    <label for="placa" class="label">Placa do Veiculo</label>
                </div>

                <br>

                <div class="input-container">
                    <input type="text" id="modelo" name="modelo" class="text-input" placeholder="Modelo do Veiculo" autocomplete="off" required/>
                    <label for="modelo" class="label">Modelo do Veiculo</label>
                </div>
                
                <br>

                <div class="input-container">
                    <input type="text" id="marca" name="marca" class="text-input" placeholder="Marca do Veiculo" autocomplete="off" required/>
                    <label for=marca class="label">Marca do Veiculo</label>
                </div>

                <br>

                <div class="input-container">
                    <label for="tipo" class="label"></label>
                    <select name="tipo" id="tipo">
                        <option value="" disabled selected>Tipo de Veiculo</option>
                        <option value="Hatch">Hatch</option>
                        <option value="Sedan">Sedan</option>
                        <option value="suv">SUV</option>
                    </select>
                </div>

                <br>

                <div class="input-container">
                    <label for="situacao" class="label"></label>
                    <select name="situacao" id="situacao">
                        <option value="" disabled selected>Disponibilidade</option>
                        <option value="Disponivel">Disponivel</option>
                        <option value="Indisponivel">Indisponivel</option>
                    </select>
                </div>

                <br><br>

                <input class="btCadastrar" id="submit" type="submit" name="submit" value="Cadastrar" href="index.php">

                <br>
            </form>
        </div>

    </section>

    <script src = "../js/VerSenha.js"></script>

</body>
</html>