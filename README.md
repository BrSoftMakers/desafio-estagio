# Desafio - Desenvolvedor Fullstack - Estágio - SoftMakers
## Para startar o projeto é simples! basta utilizar esses comandos:
```
git init
git clone https://github.com/MarcosDex/desafio-estagio
```
## Apois isso podemos partir para a segunda parte que é a criação de um servidor virtual (famoso virtual host{vh}):

WamppServer (particularmente eu o prefiro)
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

<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/vh.png">
...........................
Abrimos então a pasta do wamp e vamos em www:

<img hight="300" width="700" alt="GIF" align="center" src="https://github.com/MarcosDex/desafio-estagio/blob/main/assets/www.png">
logo apos iremos criar uma pasta:


depois de adicionado tudo basta abrir a localhost ou locadora.com(ou o link que voce criou no servername)

# O que fazer depois?

Importe o banco de dados (locadora.sql) para seu SGBD de preferencia 


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
