<?php 
include_once("conexao.php")

if(isset($_POST['submit']) && !empty($_POST['modelo']) && !empty($_POST['marca']) && !empty($_POST['tipo'])){
$modelo = _POST['modelo']
$marca = _POST['marca']
$tipo = _POST['tipo']
$situacao = _POST['situacao']

$sql = select from locadora where ('modelo', 'marca', 'tipo', 'situacao') = $modelo, $marca, $tipo, $situacao




$conexao = INSERT INTO locadora ('chassi', 'modelo', 'marca', 'tipo', 'situacao') values (NULL, 'Onix', 'Fiat','sedan', 'disponivel')
