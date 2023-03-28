import iconeX from '../images/IconeX.png';
import { handleButtonEditLocal } from './InfFunctions';
import { createForm } from './EditFunctions';
import { handleFormSalve, handleButtonDelete } from './InfFunctions';

export const handleListCards = (divCards) => {

    const storageCars = JSON.parse(localStorage.getItem('cars'));

    if (storageCars) {
        
        storageCars.map((card, index) => {
    
            const {id, model, mark, type, situation} = card;
    
            if (document.getElementById(index)) {
    
                return;
    
            } else {
    
                const div = document.createElement('div');
                div.id = index;
                div.className = 'divCar';
    
                divCards.appendChild(div);
    
                const spanId = document.createElement('span');
                spanId.innerText = `Identificador único: ${id}`;
                spanId.className = 'id';
    
                const spanModel = document.createElement('span');
                spanModel.innerHTML = `Modelo: ${model}`;
                spanModel.className = 'model';
    
                const spanMark = document.createElement('span');
                spanMark.innerText = `Marca: ${mark}`;
                spanMark.className = 'mark';
    
                const spanType = document.createElement('span');
                spanType.innerText = `Tipo: ${type}`;
                spanType.className = 'type';
                spanType.className = 'type';
    
                const spanSituation = document.createElement('span');
                spanSituation.innerText = `Situação: ${situation}`;
                spanSituation.className = 'situation';
                spanSituation.className = 'situation';
    
                div.appendChild(spanId);
                div.appendChild(spanModel);
                div.appendChild(spanMark);
                div.appendChild(spanType);
                div.appendChild(spanSituation);
    
                const divUlOptionsCard = document.createElement('div');
                divUlOptionsCard.id = 'divUlOptionsCard';
    
    
                const ulOptionsCard = document.createElement('ul');
                ulOptionsCard.className = 'btn btn-secondary';
                ulOptionsCard.id = 'UlOptionsCard';
    
                divUlOptionsCard.appendChild(ulOptionsCard);
                div.appendChild(divUlOptionsCard);
    
                const imgOptionsCard = document.createElement('img');
                imgOptionsCard.src = 'https://cdn-user-icons.flaticon.com/97704/97704934/1679970283832.svg?token=exp=1679971190~hmac=b736e3fc5586444cbf0b293c13e7ccbc';
                imgOptionsCard.className = 'imgOptionsCard';
                imgOptionsCard.id = 'imgOptionsCard';
    
                ulOptionsCard.appendChild(imgOptionsCard);
    
                ulOptionsCard.addEventListener('click', () => handleOptionsCards(divUlOptionsCard, index, card));
            }
        }
        );
    }

};

const handleOptionsCards = (divUlOptionsCard, index, card) => {
    const viewLi = document.createElement('li');
    viewLi.innerText = 'Visualizar';
    viewLi.className = 'view';
    viewLi.id = `view ${index}`;

    const editLi = document.createElement('li');
    editLi.innerText = 'Editar';
    editLi.className = 'edit';
    editLi.id = `edit ${index}`;

    const deleteLi = document.createElement('li');
    deleteLi.innerText = 'Excluir';
    deleteLi.className = 'delete';
    deleteLi.id = `delete ${index}`;

    const view = document.getElementsByClassName(`view ${index}`);
    
    viewLi.addEventListener('click', () => handleView(card, divUlOptionsCard));
    editLi.addEventListener('click', () => handleEdit(index));
    deleteLi.addEventListener('click', () => handleDelete(index));

    if (view.length === 1) {
        return;
    } else {
        divUlOptionsCard.appendChild(viewLi);
        divUlOptionsCard.appendChild(editLi);
        divUlOptionsCard.appendChild(deleteLi);
    }
};

const handleView = (card) => {
    const {id, model, mark, type, situation} = card;

    const car = document.getElementById('car');
    const divCar = document.getElementById('divCar');
    if (divCar) {
        car.removeChild(divCar);
    }

    const divCarView = document.createElement('div');
    divCarView.id = 'divCar';

    const pId = document.createElement('p');
    pId.innerText = `Identificador único: ${id}`;
    pId.className = 'id';
    
    const pModel = document.createElement('p');
    pModel.innerHTML = `Modelo: ${model}`;
    pModel.className = 'model';
    
    const pMark = document.createElement('p');
    pMark.innerText = `Marca: ${mark}`;
    pMark.className = 'mark';
    
    const pType = document.createElement('p');
    pType.innerText = `Tipo: ${type}`;
    pType.className = 'type';
    pType.className = 'type';
    
    const pSituation = document.createElement('p');
    pSituation.innerText = `Situação: ${situation}`;
    pSituation.className = 'situation';
    pSituation.className = 'situation';

    const imgX = document.createElement('img');
    imgX.src = iconeX;
    imgX.className = 'iconeX';
    imgX.id = 'iconeX';
    
    divCarView.appendChild(imgX);
    divCarView.appendChild(pId);
    divCarView.appendChild(pModel);
    divCarView.appendChild(pMark);
    divCarView.appendChild(pType);
    divCarView.appendChild(pSituation);

    car.appendChild(divCarView);

    const iconeXImg = document.getElementById('iconeX');
    iconeXImg.addEventListener('click', () => handleIconeX());
    

};

const handleEdit = (index) => {
    const car = document.getElementById('car');
    const divCar = document.getElementById('divCar');

    if (divCar) {
        car.removeChild(divCar);
    }

    const {
        idInput,
        modelInput,
        markInput,
        typeSelect,
        situationSelect,
        buttonSubmit,
        imgX,
    } = createForm();


    
    idInput.addEventListener('keyup', ({ target }) => handleFormSalve(target, buttonSubmit));
    modelInput.addEventListener('keyup', ({ target }) => handleFormSalve(target, buttonSubmit));
    markInput.addEventListener('keyup', ({ target }) => handleFormSalve(target, buttonSubmit));
    typeSelect.addEventListener('click', ({ target }) => handleFormSalve(target, buttonSubmit));
    situationSelect.addEventListener('click', ({ target }) => handleFormSalve(target, buttonSubmit));
    imgX.addEventListener('click', () => handleIconeX());
    buttonSubmit.addEventListener('click', () => handleButtonEditLocal(index));
};

const handleDelete = (index) => {
    handleButtonDelete(index);

    const divCards = document.getElementById('cards');
    const divIndex = document.getElementById(index);

    divCards.removeChild(divIndex);
    handleListCards(divCards);
};

const handleIconeX = () => {
    const car = document.getElementById('car');
    const divCar = document.getElementById('divCar');
    car.removeChild(divCar);
};