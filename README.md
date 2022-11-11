![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

<h1 align="center"> Desafio - Desenvolvedor Fullstack - Estágio </h1>

## Sobre a Solução

A solução no backend é uma API do tipo REST desenvolvida com NodeJS e o framework Express. Ela utiliza o banco de dados SQLITE3 para persistir os dados. Já no frontend foi utilizado ReactJS com tecnologias como axios (para consumo da API do backend), styled-components (para estilização) e react-hook-form para os formulários da aplicação. O objetivo final da solução é gerenciar uma locadora de automóveis, onde é possível adicionar, deletar, visualizar e atualizar os carros.

## Objetivo

Desenvolver um projeto com a finalidade de que seja possível listar, visualizar, criar, editar e excluir carros de uma locadora de automóvel.

Observações:
Cada carro precisa ter um identificador único, modelo, marca, tipo (hatch, sedan ou SUV) e situação (disponível ou indisponível). Todos os campos são do formulário são obrigatório.

## Tecnologias

### Backend:

- [x] Node.JS
- [x] npm
- [x] Express
- [x] Nodemon
- [x] SQLite3
- [x] CORS
- [x] Sequelize
- [x] Insomnia

### Frontend:

- [x] ReactJS
- [x] React-Hook-Form
- [x] React-Router-DOM
- [x] Axios
- [x] Styled-Components

## Inicializando

Primeiro, deve-se clonar este repositório a partir do terminal com o comando abaixo:

```
https://github.com/GuiSilveira/desafio-estagio-softmakers.git
```

Acessar a pasta da aplicação, caso não esteja nela

```
cd desafio-estagio-softmakers
```

Para configurar o backend: Acessar a pasta server com

```
cd server
```

Instalar as dependências necessárias e criar pasta node_modules

```
npm install
```

Agora volte para a pasta desafio-estagio-softmakers

Para configurar o frontend: Acessar a pasta client com

```
cd client
```

Dentro da pasta client, instalar as dependências necessárias e criar a pasta node_modules

```
npm install
```

## Iniciar a aplicação

Para iniciar a aplicação através do terminal, primeiro inicialize o backend entrando na pasta server e utilizando esse comando abaixo:

```
npm start
```

A seguinte mensagem aparecerá no terminal após a inicialização: "Todos os modelos foram sincronizados! Banco de dados pronto!
Servidor rodando em http://localhost:8080"

Para iniciar o frontend, acesse a pasta client com outro terminal e utilize o comando abaixo:

```
npm start
```

Após isso, uma página deve abrir no seu navegador e a aplicação estará pronta pra ser utilizada!

## Dependências

As dependências necessárias instaladas para o backend deste projeto foram a Express, SQLite3, Sequelize e CORS, que devem ser visualizadas no arquivo package.json da pasta server.

```javascript
"dependencies": {
   "cors": "^2.8.5",
   "express": "^4.18.2",
   "nodemon": "^2.0.20",
   "sequelize": "^6.25.5",
   "sqlite3": "^5.1.2"
 }
```

Já para o frontend, as dependências necessárias instalas foram React, React-Router-DOM, React-Hook-Form, Lodash, Axios e Styled-Components, que devem ser visualizadas no arquivo package.json da pasta client.

```javascript
"dependencies": {
  "@testing-library/jest-dom": "^5.16.5",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "axios": "^1.1.3",
  "lodash": "^4.17.21",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-hook-form": "^7.39.2",
  "react-router-dom": "^6.4.3",
  "react-scripts": "5.0.1",
  "styled-components": "^5.3.6",
  "web-vitals": "^2.1.4"
}
```

## Entidades

No total só existe 1 entidade presente nesta API `Carro.js`.

```
./src/model/carro.js
```

Para acessar as rotas deve-se utilizar o método HTTP GET e a URL base fornecida, que é `http://localhost:port` na qual port é o número da porta fornecida na constante port, que por base nesta aplicação para o backend é 8080, ou seja, a URL base é `http://localhost:8080`.

### Entidade Carro

A entidade clientes está disponível na rota **'/carro'**, seguindo a URL base fornecida `http://localhost:8080/carro`. O modelo JSON para
o corpo da requisição desta entidade segue abaixo:

```json
{
  "modelo": "civic",
  "marca": "honda",
  "tipo": "hatch",
  "situacao": true
}
```

## Rotas CRUD

A partir da URL base pode-se executar as operações CRUD(Create, Read, Update e Delete) com os métodos HTTP: POST, GET, PUT e DELETE. Abaixo exemplos das operações com a entidade Carro.

### Método GET (Read)

Para visualizar os registros faça uma requisição HTTP do tipo GET com a URL da entidade desejada.

`http://localhost:8080/carro`

O método deve retornar todos os registros da entidade no formato JSON, como representado no modelo da entidade.

### Método POST (Create)

Para adicionar um novo registro faça uma requisição HTTP do tipo POST com a URL da entidade desejada.

`http://localhost:8080/carro`

### Método PUT (Update)

Para atualizar um registro faça uma requisição HTTP do tipo PUT com a URL da entidade desejada e o ID do registro.

`http://localhost:8080/carro/1`

Nota-se que para o método PUT todo o corpo do registro deve ser utilizado, alterando apenas o campo que deseja atualizar.

### Método DELETE (Delete)

Para deletar um registro faça uma requisição HTTP do tipo DELETE com a URL da entidade desejada e o ID do registro.

`http://localhost:8080/carro/1`

Para derrubar o servidor e deixar o terminal livre novamente execute o comando `CTRL + C`

## Autor

- **Guilherme Silveira Coutinho** - [GuiSilveira](https://github.com/GuiSilveira)
