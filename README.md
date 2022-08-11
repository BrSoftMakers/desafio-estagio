Para rodar esse projeto é necessário ter  instalado o PHP, POSTGRES,COMPOSER e o NODE. 

1º Clonar o projeto

2º Entrar na pasta do Projeto via terminal

3º Rodar o composer update

4º Rodar o npm install

5º Configurar o banco no arquivo .env

Ex:
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=desafio_estagio
DB_USERNAME=postgres
DB_PASSWORD=postgres


6º Rodar no terminal o "php artisan key:migration"

8º Rodar "php artisan serve"

9º Ver o resultado no navegador

Para acessar o sistema é necessário que o Usuário cadastre-se, e logo após é só clicar no botão ENTRAR informar email e senha cadastrado.
