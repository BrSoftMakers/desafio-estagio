//E-mail de contato - joaopauloquino@gmail.com 

# Desafio - Desenvolvedor Fullstack - Estágio
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CRUD Pet Shop</title>
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/2.23.0/date_fns.min.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="logo">
            <img src="Images/Logo.png" alt="Logo do Pet Shop">
        </div>

        <div class="search-bar">
            <div class="search-input">
                <div class="search-icon">
                    <i class="fas fa-search"></i>
                </div>
                <input type="text" id="searchInput" placeholder="">
                <div class="search-text">Pesquisar</div>
              
                
            </div>
        </div>
        <button onclick="openForm()">Cadastrar Novo Pet</button>
    </header>

    <div class="container">
        <h1> Pets Cadastrados </h1>

   <!-- Formulário para cadastrar novo pet -->
<div id="petForm" class="form-container hidden">
    <form>
        <div class="input-container">
            <i class="fas fa-paw"></i> <!-- Ícone de coleira -->
            <label for="petName">Nome do Pet:</label>
            <input type="text" id="petName" placeholder="Ex: Mingau" required>
        </div>

        <div class="input-container">
            <i class="fas fa-user"></i> <!-- Ícone de pessoa -->
            <label for="ownerName">Nome do Dono:</label>
            <input type="text" id="ownerName" placeholder="Ex: João Paulo Aquino" required>
        </div>

        <div class="input-container">
            <i class="fas fa-phone"></i> <!-- Ícone de telefone -->
            <label for="phone">Telefone:</label>
            <input type="tel" id="phone" placeholder="(55) 98888-0000" required>
        </div>

        <div class="input-container">
            <i class="fas fa-dog"></i> <!-- Ícone de cachorro -->
            <label for="petType">Tipo do Pet:</label>
            <select id="petType" onchange="updateBreeds()">
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
            </select>
        </div>

        <div class="input-container">
            <i class="fas fa-dna"></i> <!-- Ícone de raça -->
            <label for="breed">Raça:</label>
            <select id="breed" required>
                <!-- As opções serão preenchidas dinamicamente pelo JavaScript -->
            </select>
        </div>

        <div class="input-container">
            <i class="fas fa-calendar-alt"></i> <!-- Ícone de calendário -->
            <label for="birthdate">Data de Nascimento:</label>
            <input type="date" id="birthdate" onchange="updateAge()">
            <div id="age"></div>
        </div>

        <button type="submit" id="saveBtn">Salvar</button>
        <button type="button" onclick="closeForm()">Cancelar</button>
    </form>
</div>

        <!-- Lista de pets cadastrados -->
        <div id="petList" class="pet-list">
            <!-- Os pets serão preenchidos dinamicamente pelo JavaScript -->
        </div>
    </div>

    <!-- Script JavaScript -->
    <script src="script.js"></script>
</body>
</html>


CSS
/* Personalização de cores */
body {
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-style: normal;
 
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

  

header {
    background-color: #001E4D;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header button {
    width: 156px;
    height: 50px;
    top: 151px;
    left: 1156px;
    border-radius: 10px;
    background: linear-gradient(to right, #0056E2 100%, #0056E2 100%);
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

header button:hover {
    background: linear-gradient(to right, #0056E2 0%, #00CAFC 100%);
}

.logo img {
    max-width: 150px;
}


.search-bar {
    display: flex;
    align-items: center;
}


#searchInput:focus {
    color: #fff; /* Cor do texto quando está ativo */
    outline: none; /* Remover a borda padrão do navegador */
}


.search-input {
    position: relative;
    width: 1000px; /* Largura ajustada */
    height: 45px; /* Altura ajustada */
    border-radius: 5px;
    margin-right: 10px;
    display: flex;
    border: 1px solid #404A5C; /* Borda cinza */
    align-items: center;
    padding: 0 2px;
    background-color: #001E4D; /
}

#searchInput {
    width: 44px; 
    height: 27px;
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 44px;
    background-color: #001E4D; 
}

.search-icon {
    position: absolute;
    left: 0; /* Ajuste conforme necessário */
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1px;
    background-color: #46405c; /* Cor de fundo do ícone */
    border-right: 1px solid #404A5C; /* Adicionando uma borda direita */
    border-top: 1px solid #404A5C; /* Cor e espessura da borda igual à da borda superior */
}



.search-icon i {
    font-size: 20px;
    color: #001E4D; /* Cor do ícone da lupa */
}


.search-bar button {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background-color: #0056b3; /* Cor do botão da lupa */
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

fa-search {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #404A5C; /* Cor do ícone da lupa */
}

.search-text {
    width: 106px;
    height: 36px;
    line-height: 36px;
    background-color: #404A5C; /* Cor de fundo do texto "Pesquisar" */
    border-radius: 10px;
    text-align: center;
    color: #ffffff; /* Cor do texto "Pesquisar" */
    font-size: 16px;
}


.actions button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #0056b3; /* Cor do botão da lupa */
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

.cadastro-form {
    background-color: #0056b3; /* Cor do botão da lupa */
    padding: 20px;
    border-radius: 5px; /* Arredondamento do botão */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #fff;
}

.hidden {
    display: none;
}

.lista-pets {
    margin-top: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
}

.pets-container {
    width: calc(33.33% - 20px); /* Definir a largura de cada animal com um pouco de espaçamento entre eles */
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f8f9fa;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.pet {
    padding: 10px;
}

.pet + .pet {
    margin-left: 20px;
}

.container h1 {
    text-align: center; /* Centraliza o texto */
}


/* Estilo para o formulário */
#petForm {
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    max-width: 618px;
    width: 100%;
    margin: auto; /* Centralizar horizontalmente */
}

/* Estilo para os rótulos */
label {
    font-weight: bold;
}

/* Estilo para as entradas de texto */
input[type="text"],
input[type="tel"],
select,
input[type="date"] {
    width: calc(100% - 22px); /* Considerando o padding */
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

/* Estilo para os botões */
button[type="submit"],
button[type="button"] {
    background-color: #0056b3;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
      
}

button[type="submit"]:hover,
button[type="button"]:hover {
    background-color: #004080;
}

header button {
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-style: normal;
}


.pet-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center; /* Centraliza verticalmente */
    width: 100%; /* Use 100% da largura disponível */
    max-width: 1257px; /* Limita a largura máxima */
    padding-left: 20px; /* Espaçamento à esquerda para afastar os cadastros da borda */
}


.pet-item {
    width: calc(25% - 10px); /* 4 animais por linha */
    height: 95px;
    background-color: #f0f0f0; /* Cor de fundo opcional */
    box-sizing: border-box;
    margin-bottom: 80px; /* Adiciona espaço vertical entre os cadastros de pets */
}


/* Estilo para os quadrados de informações */
.pet-info {
    display: flex;
    width: 280px; /* Ajuste o tamanho do quadrado conforme necessário */
    height: 65px; /* Ajuste a altura do quadrado conforme necessário */
    background: linear-gradient(to right, #000814, #001E4D);
    flex-direction: column; /* Exibe os elementos em coluna */
    color: #fff;
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
}

.pet-info i {
    width: 32px; /* Largura do ícone */
    height: 35px; /* Altura do ícone */
    margin-right: 10px; /* Espaçamento entre o ícone e o texto */
}

/* Estilo para o modal */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

/* Estilo para o conteúdo do modal */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
}

/* Botão para fechar o modal */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Animação de entrada do modal */
@-webkit-keyframes animatetop {
    from {top: -300px; opacity: 0} 
    to {top: 0; opacity: 1}
}

@keyframes animatetop {
    from {top: -300px; opacity: 0}
    to {top: 0; opacity: 1}
}

/* Estilo para o wrapper do pet */
.pet-wrapper {
    width: 30%;
    margin-bottom: 30px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f8f9fa;
}

/* Estilo para o container do pet */
.pet {
    display: flex;
    align-items: center;
}

/* Estilo para a imagem do pet */
.pet img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #ffc107;
}

/* Estilo para o nome do pet */
.pet h3 {
    margin: 0;
    color: #343a40;
}

/* Estilo para o tipo de pet */
.pet p {
    margin: 0;
    color: #6c757d;
}

/* Estilo para o container do dono */
.owner {
    display: flex;
    align-items: center;
}

/* Estilo para a imagem do dono */
.owner img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 50%;
}

/* Estilo para o texto do dono */
.owner p {
    margin: 0;
    color: #6c757d;
}

.pet-info i {
    font-size: 16px; /* Tamanho do ícone */
}

.owner i {
    font-size: 16px; /* Tamanho do ícone */
}

.actions-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #0056b3; /* Cor do botão da lupa */
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-right: 5px;
}

.action-icons {
    display: flex;
    align-items: center;
    margin-left: auto; /* Move os botões para a direita */
}

.action-icons button {
    background: linear-gradient(to right, #000814, #001E4D); /* Aplica um gradiente semelhante ao quadrado das informações */
    color: #fff; /* Cor do texto dos botões */
    padding: 5px 10px; /* Espaçamento interno dos botões */
    border: none; /* Remove a borda dos botões */
    border-radius: 5px; /* Adiciona bordas arredondadas aos botões */
    cursor: pointer; /* Altera o cursor ao passar o mouse sobre os botões */    
}

.action-icons button:hover {
    background: linear-gradient(to right, #000814, #001E4D); /* Altera o gradiente ao passar o mouse sobre os botões */
}

.actions-button:hover {
    background-color: #004080;
}


JavaScript

let pets = [];

document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault();
    savePet();
});

function openForm() {
    const formContainer = document.getElementById('petForm');
    formContainer.style.display = 'block';
    document.getElementById('saveBtn').innerText = 'Salvar'; // Garante que o texto do botão seja "Salvar" ao abrir o formulário
}

function closeForm() {
    document.getElementById('petForm').style.display = 'none';
}


document.getElementById('phone').addEventListener('input', function(event) {
    let phoneInput = event.target;
    let phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedPhoneNumber = '';

    // Limita o número de dígitos a 11
    if (phoneNumber.length > 11) {
        phoneNumber = phoneNumber.substring(0, 11);
    }

    // Formatação do número de telefone
    if (phoneNumber.length > 0) {
        formattedPhoneNumber = '(' + phoneNumber.substring(0, 2) + ')';
    }
    if (phoneNumber.length > 2) {
        formattedPhoneNumber += ' ' + phoneNumber.substring(2, 7);
    }
    if (phoneNumber.length > 6) {
        formattedPhoneNumber += '-' + phoneNumber.substring(7, 11);
    }

    phoneInput.value = formattedPhoneNumber;
});




function savePet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const phone = document.getElementById('phone').value;
    const petType = document.getElementById('petType').value;
    const breed = document.getElementById('breed').value;
    const birthdate = document.getElementById('birthdate').value;

    const saveBtnText = document.getElementById('saveBtn').innerText;

    // Verifica se há um índice armazenado na variável global
    const editIndex = parseInt(document.getElementById('saveBtn').getAttribute('data-index'));

    if (editIndex !== null && !isNaN(editIndex)) {
        // Se houver um índice, atualiza as informações do animal existente
        pets[editIndex] = {
            name: petName,
            owner: ownerName,
            phone: phone,
            type: petType,
            breed: breed,
            birthdate: birthdate
        };

        // Limpa a variável global de índice
        document.getElementById('saveBtn').removeAttribute('data-index');
    } else {
        // Caso contrário, adiciona um novo animal à lista
        const pet = {
            name: petName,
            owner: ownerName,
            phone: phone,
            type: petType,
            breed: breed,
            birthdate: birthdate
        };

        pets.push(pet);
    }

    renderPetList();
    closeForm();

    // Limpa o formulário após salvar
    document.getElementById('petName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('petType').value = 'cachorro'; // Define o valor padrão como 'cachorro'
    updateBreeds();
    document.getElementById('breed').value = '';
    document.getElementById('birthdate').value = '';
}




function renderPetList() {
    const petList = document.getElementById('petList');
    petList.innerHTML = '';

    pets.forEach((pet, index) => {
        const petItem = document.createElement('div');
        petItem.classList.add('pet-item');

        // Criando o layout específico para exibir o animal cadastrado
        petItem.innerHTML = `
            <div class="pet-info">
                <i class="fas ${pet.type === 'cachorro' ? 'fa-dog' : 'fa-cat'}"></i>
                <div><strong>Nome do Pet:</strong> ${pet.name}</div>
                <div><strong>Nome do Dono:</strong> ${pet.owner}</div>
            </div>
            <div class="action-icons">
                <button class="actions-button" onclick="editPet(${index})">Editar</button>
                <button class="actions-button" onclick="deletePet(${index})">Excluir</button>
            </div>
        `;

        petList.appendChild(petItem);
    });
}

function updateBreeds() {
    const petType = document.getElementById('petType').value;
    const breedSelect = document.getElementById('breed');

    if (petType === 'cachorro') {
        breedSelect.innerHTML = `
            <option value="labrador">Labrador</option>
            <option value="poodle">Poodle</option>
            <option value="vira-lata">Vira-Lata</option>
            <option value="husky">Husky</option>
            <option value="pastor-alemão">Pastor Alemão</option>
            <option value="Bulldog-Francês">Bulldog Francês</option>
            
        `;
    } else if (petType === 'gato') {
        breedSelect.innerHTML = `
            <option value="siames">Siamês</option>
            <option value="persa">Persa</option>
            <option value="sphynx">Sphynx</option>
            <option value="Maine-Coon">Maine Coon</option>
            <option value="Ragdoll">Ragdoll</option>
            <option value="Bengal">Bengal</option>
        `;
    }
}

function editPet(index) {
    // Encontra o pet com base no índice recebido como parâmetro
    const pet = pets[index];

    // Preenche os campos do formulário com as informações do pet selecionado
    document.getElementById('petName').value = pet.name;
    document.getElementById('ownerName').value = pet.owner;
    document.getElementById('phone').value = pet.phone;
    document.getElementById('petType').value = pet.type;
    updateBreeds();
    document.getElementById('breed').value = pet.breed;
    document.getElementById('birthdate').value = pet.birthdate;

    // Atualiza o texto do botão de "Salvar" para "Atualizar"
    document.getElementById('saveBtn').innerText = 'Atualizar';

    // Armazena o índice do pet sendo editado como um atributo do botão "Salvar"
    document.getElementById('saveBtn').setAttribute('data-index', index);

    // Exibe o formulário de edição
    openForm();
}


function deletePet(index) {
    pets.splice(index, 1); // Remove o animal da lista com base no índice
    renderPetList(); // Atualiza a lista de pets na interface
}


