<?php

//conexão com o banco
$Host = 'localhost';
$UserName = 'root';
$Password = '';
$Database = 'locadoracarros';

$conn = new mysqli($Host, $UserName, $Password, $Database );

//verifica se a conexão com o banco esta funcionando
//  if($conn ->connect_errno){
//      echo "Erro ao conetar banco de dados";
//  }
//  else{
//      Echo "Conexão estabelecida";
//  }

?>
