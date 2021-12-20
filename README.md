### **Requisitos para  executar o projeto** 

**Clone o repositório do projeto**

Baixe as seguintes ferramentas para rodar o projeto Backend

- PHP
- Composer: [https://getcomposer.org/download/](url)
- Mysql Server: [https://dev.mysql.com/downloads/mysql/](url)

> Obs: Para facilitar o download do php, baixe o Xampp Server: [https://www.apachefriends.org/pt_br/download.html](url)

---
Abra o terminal de sua escolha, vá até a pasta **"backend"** dentro de **"health-desafio-estagio"** e siga os seguintes passos


1. Rode no terminal, **composer install**
2. Crie um arquivo **.env** no diretório raiz do projeto
3. Abra o arquivo **.env.example**, copie todo o seu conteúdo e cole no arquivo **.env**
4. Rode no terminal, **php artisan key:generate**
5. No arquivo **.env** e no campo referente a conexão com o banco de dados, altere para que corresponda ao seu ambiente de desenvolvimento local. Segue o exemplo abaixo

```bash 
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
6. Rode no terminal **php artisan migrate**
7. Rode no terminal **php artisan** serve

**Pronto, sua aplicação backend está rodando** 

---

Baixe as seguintes ferramentas para rodar o projeto frontend

- Node.js: [https://nodejs.org/pt-br/download/](url)
- Yarn(**opcional**): [https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable](url)

> Obs: Caso escolha não utilizar o yarn, apague o arquivo yarn.lock no diretório raiz frontend

Abra o terminal de sua escolha, vá até a pasta **"frontend"** dentro de **"health-desafio-estagio"** e siga os seguintes passos

1. Rode no terminal, **npm install** ou **yarn**
2. Rode no terminal, **npm run dev** ou **yarn dev**

**Pronto, sua aplicação frontend está rodando** 

---

> Obs: o projeto **backend** tem que estar rodando antes do projeto **frontend** para que tudo funcione corretamente
