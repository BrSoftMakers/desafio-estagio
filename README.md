# Desafio Estágio SoftMakers

### Como rodar a aplicação


**1** - Para a aplicação funcionar é necessário ter o NodeJS e o MySQL instalados na máquina.

**Links para instalação**

NodeJS versão 16.15.1 ou superior: <https://nodejs.dev/en/download/>

MySQL Community Server 8.0.29 ou superior: <https://dev.mysql.com/downloads/mysql/>

**2** - Com o Node e MySQL instalados, e assumindo que o usuário root do MySQL e a senha foram configurados, precisamos instalar a dependência do Node para conexão com o banco de dados. Abra o terminal e execute o comando: 

> npm install mysql2

**3** - Depois, acesse o arquivo *createDatabase.js* que está no diretório do projeto e altere as configurações de host, username e password para "localhost", "root", e no campo password a senha configurada.


**4** - Feito isso, é necessário criar o banco de dados da aplicação rodando o script *createDatabase.js*. No terminal, navegue até a pasta do projeto e execute o comando: 

> node createDatabase.js

**5** - Com o banco de dados criado, vá até a pasta backend e acesse o arquivo **dbConfig.js** dentro da pasta *models* para informar o usuário e a senha root nos campos "username" e "password" da classe Sequelize.

**6** - Terminado esses passos, agora temos que instalar as dependências do backend e do frontend. Acesse o terminal na pasta backend do projeto e rode o comando **npm install**. Faça o mesmo na pasta frontend.

**7** - Por fim, podemos rodar a aplicação. Execute os comandos abaixo na ordem e  nas suas respectivas pastas: 

**/backend/**
> npm start

**/frontend/**

> npm start

