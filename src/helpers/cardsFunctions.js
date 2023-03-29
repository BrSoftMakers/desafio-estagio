import iconeX from '../images/IconeX.png';
import { handleButtonEditLocal } from './InfFunctions';
import { createForm } from './EditFunctions';
import { handleFormSalve, handleButtonDelete } from './InfFunctions';

export const handleListCards = (divCards) => {

    const storageCars = JSON.parse(localStorage.getItem('cars'));

    if (storageCars) {
        
        storageCars.map((card, index) => {
    
            const {id, model, mark, type, situation} = card;
    
            if (document.getElementById(`divCar ${index}`)) {
    
                return;
    
            } else {
    
                const div = document.createElement('div');
                div.id = `divCar ${index}`;
                div.className = `divCar ${index}`;
    
                divCards.appendChild(div);
    
                const spanId = document.createElement('span');
                spanId.innerText = `Identificador único:  ${id}`;
                spanId.id = 'id';
    
                const spanModel = document.createElement('span');
                spanModel.innerHTML = `Modelo:  ${model}`;
                spanModel.id = 'modelSpan';
    
                const spanMark = document.createElement('span');
                spanMark.innerText = `Marca:  ${mark}`;
                spanMark.id = 'markSpan';
    
                const spanType = document.createElement('span');
                spanType.innerText = `Tipo:  ${type}`;
                spanType.id = 'typeSpan';
    
                const spanSituation = document.createElement('span');
                spanSituation.innerText = `Situação:  ${situation}`;
                spanSituation.id = 'situation';
    
                const imgOptionsCard = document.createElement('img');
                imgOptionsCard.src = 'https://cdn-user-icons.flaticon.com/97704/97704934/1679970283832.svg?token=exp=1679971190~hmac=b736e3fc5586444cbf0b293c13e7ccbc';
                imgOptionsCard.className = 'imgOptionsCard';
                imgOptionsCard.id = 'imgOptionsCard';

                div.appendChild(spanId);
                div.appendChild(spanModel);
                div.appendChild(spanMark);
                div.appendChild(spanType);
                div.appendChild(spanSituation);
                
                const divUlOptionsCard = document.createElement('div');
                divUlOptionsCard.id = `divUlOptionsCard ${index}`;
                divUlOptionsCard.className = 'divUlOptionsCard';
                
                divUlOptionsCard.appendChild(imgOptionsCard);
                div.appendChild(divUlOptionsCard);
                
                
                
                imgOptionsCard.addEventListener('click', () => handleOptionsCards(divUlOptionsCard, index, card));
            }
        }
        );
    }
    
};

const handleOptionsCards = (divUlOptionsCard, index, card) => {
    const view = document.getElementById(`view ${index}`);
    const ulOptions = document.getElementById(`UlOptionsCard ${index}`);
    
    if (view) {
        
        divUlOptionsCard.removeChild(ulOptions);
        
    } else {
        
        const ulOptionsCard = document.createElement('ul');
        ulOptionsCard.id = `UlOptionsCard ${index}`;
        ulOptionsCard.className = `UlOptionsCard ${index} list-group`;
        
        const viewLi = document.createElement('li');
        viewLi.innerText = 'Visualizar';
        viewLi.className = 'view list-group-item liOptions';
        viewLi.id = `view ${index}`;
        
        const editLi = document.createElement('li');
        editLi.innerText = 'Editar';
        editLi.className = 'edit list-group-item liOptions';
        editLi.id = `edit ${index}`;
        
        const deleteLi = document.createElement('li');
        deleteLi.innerText = 'Excluir';
        deleteLi.className = 'delete list-group-item liOptions';
        deleteLi.id = `delete ${index}`;
    
        viewLi.addEventListener('click', () => handleView(card, index));
        editLi.addEventListener('click', () => handleEdit(index));
        deleteLi.addEventListener('click', () => handleDelete(index));
        
        divUlOptionsCard.appendChild(ulOptionsCard);
        ulOptionsCard.appendChild(viewLi);
        ulOptionsCard.appendChild(editLi);
        ulOptionsCard.appendChild(deleteLi);
    }
};

const handleView = (card, index) => {
    const {id, model, mark, type, situation} = card;

    const car = document.getElementById('car');
    car.className = 'cardView';

    const div = document.getElementById('flex');

    if (div) {
        car.removeChild(div);
    }

    const divFlex = document.createElement('div');
    divFlex.id = 'flex';

    const divCarView = document.createElement('div');
    divCarView.id = `divCarView ${index}`;
    divCarView.className = 'divCarView';

    const carView = document.createElement('div');
    carView.className = 'carView';

    const pId = document.createElement('p');
    pId.innerText = `Identificador único: ${id}`;
    pId.className = 'idP pView';
    
    const pModel = document.createElement('p');
    pModel.innerHTML = `Modelo: ${model}`;
    pModel.className = 'modelP pView';
    
    const pMark = document.createElement('p');
    pMark.innerText = `Marca: ${mark}`;
    pMark.className = 'markP pView';
    
    const pType = document.createElement('p');
    pType.innerText = `Tipo: ${type}`;
    pType.className = 'typeP pView';
    
    const pSituation = document.createElement('p');
    pSituation.innerText = `Situação: ${situation}`;
    pSituation.className = 'situation pView';

    const imgX = document.createElement('img');
    imgX.src = iconeX;
    imgX.className = 'iconeXView';
    imgX.id = 'iconeX';
    
    carView.appendChild(pId);
    carView.appendChild(pModel);
    carView.appendChild(pMark);
    carView.appendChild(pType);
    carView.appendChild(pSituation);
    divCarView.appendChild(carView);
    divCarView.appendChild(imgX);

    divFlex.appendChild(divCarView);

    car.appendChild(divFlex);

    const iconeXImg = document.getElementById('iconeX');
    iconeXImg.addEventListener('click', () => handleIconeX());
    

};

const handleEdit = (index) => {
    const car = document.getElementById('car');
    car.className = 'cardEdit';

    const div = document.getElementById('flex');

    if (div) {
        car.removeChild(div);
    }

    const {
        idInput,
        modelInput,
        markInput,
        typeSelect,
        situationSelect,
        buttonSubmit,
        imgX,
    } = createForm(index);


    
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
    const divIndex = document.getElementById(`divCar ${index}`);

    divCards.removeChild(divIndex);
    handleListCards(divCards);
};

const handleIconeX = () => {
    const car = document.getElementById('car');
    const divFlex = document.getElementById('flex');
    car.className = 'car';
    car.removeChild(divFlex);
};