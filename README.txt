Este é um passo a passo para instalar o projeto referente ao desafio de estágio da SoftMakers

No fim do arquivo deixarei algumas observações sobre as minhas escolhas no projeto, espero um contato para maiores informações.

Segue uma lista do que você precisará para instalar esse projeto com a dependência e ao lado entre parênteses a versão utilizada por mim:

node.js (v18.19.0 || hydrogen)
npm (9.7.1 || Obs.:Eu usei o pnpm (8.15.1) para desenvolvimento do projeto)
git (2.35.1.windows.2)

- Crie uma pasta onde irá ser instalado o projeto
- No terminal da pasta criada digite o comando abaixo:

git clone https://github.com/ViniciusLeviVL/desafio-estagio.git

- Após o repositório ser clonado abra o terminal na pasta "backend" e instale os pacotes necessário com o comando:

npm install

- Faça o mesmo no terminal na pasta "frontend"
- Para gerar as configurações necessárias para o prisma use o seguinte comando no terminal diretório "backend":

npx prisma generate

- Após instalar todos os pacotes necessários basta rodar os seguintes comandos no terminal dos diretórios "backend" e "frontend", respectivamente:

npm run start
npm run dev

- Com isso basta acessar "http://localhost:3000" onde o frontend deverá estar rodando.

O backend deverá estar funcionando na porta 8000 na seguinte url: 
http://localhost:8000/api/v1

Observações:

Por se tratar de um teste técnico eu tentei ao máximo não utilizar bibliotecas de componentes como a shadcn/ui com o intuito de demonstrar meu conhecimento acima de qualquer framework ou biblioteca, o único componente usando o shadcn/ui foi o DatePicker usado para escolher uma data no modal do pet.

Banco de dados e ORM:

Eu usei o SQLite como banco de dados para facilitar a instalação no momento da avaliação e o prisma como ORM

Decidi não usar o swagger para criação de documentação da API por se tratar de um CRUD básico então segue uma mini documentação sobre a API:

URL base da API = "http://localhost:8000/api/v1"

Prefixo do único controller existente = "/pets"

Exemplo de um objeto pet:

{
	"name": "Scooby Doo", // string
	"ownerName": "Vinícius Leví", // string
	"breed": "Poodle", // string
	"ownerPhone": "+5581998146998", // string - Número de celular existente
	"animal": "DOG", // "DOG" || "CAT"
	"dateOfBirth": "2015-10-05T14:48:00.000Z" // string - Data no padrão ISO8061
}

===================================

Listar todos os pets: 
Método: "GET", URL:
http://localhost:8000/api/v1/pets

Você receberá um array de pets dentro de um objeto "data" se tudo ocorrer bem.

===================================

Listar um único pet: 
Método: "GET", URL:
http://localhost:8000/api/v1/pets/:id

Passando o id do pet no fim da url e você receberá um objeto pet dentro de um objeto "data" se tudo ocorrer bem.

===================================

Criar um pet:
Método: "POST", URL:
http://localhost:8000/api/v1/pets

Passando um pet através do body e você receberá o mesmo objeto pet dentro de um objeto "data" se tudo ocorrer bem.

===================================

Editar um pet:
Método: "PUT", URL:
http://localhost:8000/api/v1/pets/:id

Passando um id no fim da url e um pet que contendo as informações atualizadas através do body e você receberá o mesmo objeto pet dentro de um objeto "data" se tudo ocorrer bem.

===================================

Excluir um pet:
Método: "DELETE", URL:
http://localhost:8000/api/v1/pets/:id

Passando o id do pet no fim da url e você receberá o pet dentro de um objeto "data" se tudo ocorrer bem.

===================================