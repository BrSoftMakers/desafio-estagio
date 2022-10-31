<?php
$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'locadora';
//estabelece conexao do projeto com o banco de dados
$conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

 //verifica se a conexão com o banco esta funcionando
  // if($conexao ->connect_errno){
    //  echo "Erro ao conetar banco de dados";
  //}
  //else{
    //  Echo "Conexão estabelecida com sucesso!";
  // } 
?>

