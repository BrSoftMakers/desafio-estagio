<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
  <title>Locadora de Automoveis</title>
</head>

<body>
  <?php
 //Essa parte é responsavel pela funcionaliadade do botão procurar, onde o php procura no banco de dados as cases de acordo com o que o usuario
 //digitou, o double % pega tudo o que a pessoa digitar que tiver entre os parametros do banco por exemplo:
 //se eu tenho uma dado chamado de fiat uno quando eu digito uno ou un vai aparecer todos os dados com os nomes uno ou un.
 //contudo o disponivel recebeu apenas a variavel $pesquisa, logo ela só ira retorna se o usuario digitar certo entre "disponivel e indisponivel"
  $pesquisa = $_POST['buscar'] ?? '';


  include "bd/conexao.php";

  $sql = "SELECT * FROM carros WHERE chassi LIKE '%$pesquisa%' OR modelo LIKE '%$pesquisa%' OR marca LIKE '%$pesquisa%' OR tipo LIKE '%$pesquisa%' OR situacao LIKE '$pesquisa'";

  $dados = mysqli_query($conexao, $sql);
  ?>

  <nav class="navbar navbar-expand-lg navbar-light bg-ligh">
    <div class="container-fluid">
      <a class="navbar-brand">Alugue seu veiculo aqui</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-02">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../bd/cadastrar.php" style="color: white;">Cadastrar Veiculo</a>
          </li>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active2" aria-current="page" href="../assets/halloween.html">Feliz Halloween</a>
        </li>
    </div>
  </nav>
  <div class="gradiant">
  </div>
  </div>
  <nav class="navbar navbar-light bg-light">
    <header id="headertopo">Adicione, Edite ou Destrua um automovel</header>
    <div class="container-fluid">
      <form class="from-inline" action="index.php" method="POST">
        <input class="form-control mr-sm-2" type="search" placeholder="Pesquise por algo" aria-label="Search" name="buscar" autofocus>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar<i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  </nav>
  <br>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Chassi</th>
        <th scope="col">Modelo</th>
        <th scope="col">Marca</th>
        <th scope="col">Tipo</th>
        <th scope="col">Situação</th>
        <th scope="col">Ação</th>
      </tr>
    </thead>
    <tbody>
      <?php
      //como ja foi definido o include do banco do banco de dados com a tag include "conexao.php" (note que nesse caso não precisei especificar qual a hierarquia da pagina pq eles estão todos na pasta bd)
      while ($line = mysqli_fetch_assoc($dados)) {
        $id = $line['id'];
        $chassi = $line['chassi'];
        $modelo = $line['modelo'];
        $marca = $line['marca'];
        $tipo = $line['tipo'];
        $situacao = $line['situacao'];
//a tabela é criada pelo php e inseridos pelo msm
        echo "<tr>
      <th scope='row'>$chassi</th>
      <td>$modelo</td>
      <td>$marca</td>
      <td>$tipo</td>
      <td>$situacao</td>
      <td><a href=\"../bd/editar.php?id=$id\" class=\"btn btn-outline-primary\">Editar</a>
      <a href='#' class='btn btn-outline-danger' data-bs-toggle='modal'  data-toggle='modal' data-target='#modalconfirm' onclick=\"get_frommodal($id, '$chassi')\">Destruir</a>

      </td>

    </tr>";
      }
      #Quando se usa um aspas duplas("") em um echo, não se pode usar mais aspas duplas nesse escopo do bloco... Contudo se utilizar contra-barra(\"Codigo Aqui\") ele ignora a limitação das aspas duplas, por que ele simula uma grande concatenação de fechamento e abrimento de aspas simples('') e as aspas duplas("").
      ?>

    </tbody>
  </table>


  </div>


  <div class="modal fade" id="modalconfirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Confirmar Destruição <b>PERMANENTE</b>?</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="../bd/deletar.php" method="POST">
            <p>Deseja realmente deletar da existencia esse dado? //dados excluidos não podem ser restaurados//</p>
            <p>O dado a ser excluido é: <b id="transformjs">Numero do chassi</b></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <input type="hidden" name="id" id="identidar" value="">
          <input type="hidden" name="chassi" id="identidarchassi" value="">
          <input type="submit" class="btn btn-danger" value="Confirmar!">
          </form>
        </div>
      </div>
    </div>
  </div>
</body>

<script src="../js/main.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

</html>