# Projeto Prisma - Guia de Instalação

Este guia descreve os passos necessários para instalar e configurar o ambiente de um projeto Prisma.

## Pré-requisitos

- Node.js e npm instalados globalmente na sua máquina.

## Passos de Instalação

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/Alexsandro-ms/soft-pet.git

   ```

2. **Instalar Dependências:**

```bash
    cd soft-pet
    cd server && npm install # ou yarn i
    cd ../system && npm instal # ou yarn i
```

3. **Configurar os arquivos `.env`:**

- Renomeie o arquivo .env.example para .env e atualize as variáveis de ambiente conforme necessário, incluindo as informações do banco de dados.

- **Tanto o do server quanto do system**

4. **Criar e migrar o banco de dados:**

```bash
    npx prisma migrate dev --name initial_migration
```

- Recomendo usar o postgresql ou mysql

- Você pode usar o Supabase para armazenar: ['Supabase'](supabase.com/)

5. **Iniciar servidor em desenvolvimento:**
```bash
    cd server && npm run dev # ou yarn dev
```

```bash
    cd system && npm run dev # ou yarn dev
```

- O servidor estará disponível em http://localhost:8080 ou você pode definir um nas variaveis de ambiente.