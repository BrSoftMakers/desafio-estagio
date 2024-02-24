# Ernandy Virginio Lucena de Sousa
*Email:* ernandy2017@gmail.com  
*Telefone:* 81 993800881

## Resumo do Projeto

Este projeto é uma aplicação web desenvolvida como parte do desafio para o estágio na SoftMakers. A aplicação gerencia informações sobre animais de estimação de um petshop. Abaixo estão destacadas as funcionalidades principais, as tecnologias utilizadas e um guia passo a passo para rodar o projeto.

---

### Funcionalidades Principais:

- **Listagem de Animais:** Visualize informações essenciais, como nome, proprietário, tipo de animal e raça.
- **Pesquisa Dinâmica:** Filtragem fácil por nome para localizar informações específicas.
- **Cadastro e Edição:** Modal intuitivo para adicionar novos animais e editar dados existentes.
- **Paginação:** Organização eficiente em páginas para conjuntos extensos de dados.
- **Banco de dados:** Todos os dados cadastrados, editados e removidos são atualizados no: 
    ```bash
    json-server --watch db.json --port 4000
    ```
    Atualize o arquivo para conferir as alterações, ou consulte o arquivo `db.json`.

---

### Tecnologias Utilizadas:

- **Nest.js**
- **Next.js**
- **JSON Server:** Banco de dados local, simulação de um backend RESTful fake a partir de um arquivo JSON.
- **TypeScript**
- **Tailwind CSS**

---

### Guia Passo a Passo para Iniciar o Projeto:

1. Acesse a pasta do projeto: 
    ```bash
    cd estagio-pet
    ```
2. Instale as dependências: 
    ```bash
    npm install
    ```
3. Inicie o servidor JSON: 
    ```bash
    json-server --watch db.json --port 4000
    ```
 4. Caso encontre algum possivel erro ao executar o json-server, execute novamente o server após isso: 
    ```bash
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    ```
5. Em um terminal separado, inicie o servidor Next.js: 
    ```bash
    npm run dev
    ```


---

## Considerações Finais

O projeto segue boas práticas de desenvolvimento e fornece um guia claro para replicar o ambiente de desenvolvimento. Ele representa uma aplicação dinâmica e responsiva do projeto de referência apresentado no desafio.
