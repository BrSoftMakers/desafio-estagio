Para rodar esse projeto é necessário ter instalado o PHP, POSTGRES,COMPOSER, MIX e o NODE.

1º Clonar o projeto

2º Entrar na pasta do Projeto via terminal

3º Rodar o php /usr/local/bin/composer update

4º Rodar o npm install

5º Restaurar o arquivo desafio-estagio.sql que está na pasta banco, fiz o backup do banco com o pg_dump e para restaurar é muito simples basta:
Criar um banco postgres vázio recomendo usar o nome desse banco de "desafio-estagio" que aí o arquivo .env do projeto já estará configurado, mas caso queira colocar outro nome é so ir no arquivo .env e alterar feito o exmplo a baixo e depois é só entrar na pasta banco do projeto via terminal e rodar o comando "sudo -u psql nome-do-banco-vazio-que-foi-criado < desafio-estagio.sql"

6º Caso não esteja configurado, Configurar o banco no arquivo .env

Ex: DB_CONNECTION=pgsql DB_HOST=127.0.0.1 DB_PORT=5432 DB_DATABASE=desafio_estagio DB_USERNAME=postgres DB_PASSWORD=postgres

7º Após ter configurado o banco de dados no arquivo .env rodar o comando “php artisan migrate” no terminal.

8º Rodar no terminal o "npm run dev" exigência do laravel.

9º Rodar "php artisan serve" ao rodar esse comando irá aparecer a porta para acessar o projeto ex: http://127.0.0.1:8000 

10º Ver o resultado no navegador

11º Ao acessar o projeto basta ir em “Entrar” colocar o e-mail desafioestagio@gmail.com e a senha 12345678. Obs: caso não entre ir em Cadastre-se e se cadatrar, é muito rápido para se cadastrar .

Me empenhei ao máximo nesse projeto e caso não consiga rodar com o passo a passo, ficarei muito feliz em ajudar a colocar o projeto para Rodar!
