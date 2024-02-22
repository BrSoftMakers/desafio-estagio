 ![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio - Desenvolvedor Fullstack - Estágio
Seja bem-vindo! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato ao cargo proposto.

## Instruções
- Faça um fork deste repositório;
- O conjunto mínimo de tecnologias a serem utilizadas são: HTML, CSS e JS;
- Crie um passo a passo de como rodar a sua aplicação;
- Após finalizar, submeta um pull request com um comentário informando o seu e-mail de contato e aguarde nossa avaliação.

## Proposta
O teste consiste em desenvolver um projeto utilizando NextJS no front-end e Nest.js no back-end, com o objetivo de criar uma aplicação que permita listar, visualizar, criar, editar e excluir animais de estimação em uma petshop. Utilize o Protótipo Figma fornecido como referência https://www.figma.com/file/z0zYWFHb7OK6TUXDBBw5my/SoftMakers-Challenges%3A-Dev-Jr.?type=design&node-id=0%3A1&mode=design&t=vAPkbzL97wUL9qma-1

## Diferenciais
Serão considerados diferenciais:

- O uso de qualquer banco de dados para armazenar os dados da sua aplicação;
- O uso de qualquer framework;
- Boas práticas de escrita de código (código limpo, padrões de arquitetura, etc.).

## Instruções de execução

### Pré-requisitos
- [WSL](https://docs.microsoft.com/pt-br/windows/wsl/install) (ou qualquer outro terminal Linux)
- [Docker](https://www.docker.com/products/docker-desktop) (CLI ou Extensão do Docker no VSCode)
- [Git](https://git-scm.com/downloads)

### Clonar o repositório
```bash
git clone https://github.com/vinicivs-rocha/desafio-estagio
```

### Executar o projeto
```bash
cd desafio-estagio
docker compose up --build
```

### Notas
- Caso o comando `docker compose up --build` não funcione, tente `docker-compose up --build`
- **Fique atento aos logs**, pois o front-end e o back-end só estarão prontos quando aparecerem mensagens como as seguintes (não necessariamente nessa ordem):
```bash
front-1  |  ✓ Ready in 6.3s

db-1     | 2024-02-22 17:39:46.067 UTC [1] LOG:  database system is ready to accept connections

back-1   | [Nest] 29  - 02/22/2024, 5:39:54 PM     LOG [NestApplication] Nest application successfully started +1ms
```
- Caso o serviço db não fique pronto a tempo, o back-end não conseguirá se conectar a ele e isso exibirá um erro no console. Nesse caso, espere o serviço do db ficar pronto e reinicie o back-end com `docker compose up --build back`