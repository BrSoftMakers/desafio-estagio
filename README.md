# Desafio - Desenvolvedor Fullstack - Estágio - SoftMakers
## Para startar o projeto é simples! basta utilizar esses comandos:
```
git init
git clone https://github.com/MarcosDex/desafio-estagio
```
## Apois isso podemos partir para a segunda parte que é a criação de um servidor virtual (famoso virtual host{vh}):

```WamppServer (particularmente eu o prefiro)
Primeiro vamos cria a vh, basta ir em Windows -> system32 -> drivers -> etc -> hosts (aconselho notepad ++ por ser mais organizado que o bloco de notas):
Adicionamos isso ao arquivo da host 127.0.0.1 locadora.com (locadora é o nome da pasta que criarei mais pra frente)
logo depois iremos a este caminho: wamp64\bin\apache\apache2.4.51\conf\extra e então ira adicionar esta linha de codigo ao escopo:
<VirtualHost *:80>
  ServerName locadora.com
  ServerAlias localhost
  DocumentRoot C:\wamp64\www\locadora escolhe o lugar onde salvou o wamp (no meu caso é no disco C)
  <Directory "C:\wamp64\www\locadora"> escolhe o lugar onde salvou o wamp (no meu caso é no disco C)
    Options +Indexes +Includes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
  </Directory>
</VirtualHost>
```
<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/vh.png">
...........................
```Abrimos então a pasta do wamp e vamos em www: ```

<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/www.png">

```Logo apos iremos criar uma pasta:```

<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/Screenshot_1.png">

## Depois de adicionado tudo basta abrir a localhost ou locadora.com(ou o link que voce criou no servername)

# O que fazer depois?

```Importe o banco de dados (locadora.sql) para seu SGBD de preferencia {usei o mysqlworkbench}```
<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/Screenshot_2.png">

## Depois de ir no data import só procurar o local onde está o arquivo sql. ** É extremamente nescessario que selecione Self-Contained File **
<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/daimport.png">

### Por ultimo basta importar o arquivo para o SGBD
<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/Screenshot_3.png">

```Relatorio rapido do que cada pasta faz: ```
 1. Bd (pasta onde estão os arquivos php relacionados ao banco de dados)
   - Cadastrar.php (aqui é o arquivo de cadastro dos veiculos)
     - cd_getdata.php (ele é o responsavel por pegar os dados inseridos no cadastra e manda-los pro banco de dados com o INSERT INTO)
       - cd_getdataedit.php (este por sua vez é responsavel por pegar os dados do arquivo de edição dos veiculos e manda-los para o banco com o UPDATE SET)
         - conexao.php (estabelece conexao com o banco de dados)
           - deletar.php (é o responsavel por destruir um dado relacionado ao banco de dados pelo DELETE FROM)
             - editar.php (é o arquivo de editar referente ao enviador dos dados para o getdataedit.php)
  
  2. Css e JS Não irei aprofundar muito por que como usei o Bootstrap ele foi responsavel pelo "js" e "css"             
      - main.js e main.ts (foram os criados por mim para redirecionar e fazer funcionar o modal de excluir um dado)     

# Linguagens Utilizadas 

*** 
- PHP
- JavaScript
- TypeScript
- MySQL
***
# Frameworks Utilizados
*** 
- Bootstrap 

***
