import iconeX from '../images/IconeX.png';


export const createForm = () => {
    const divCar = document.getElementById('car');

    const divCarEdit = document.createElement('div');
    divCarEdit.id = 'divCar';

    const form = document.createElement('form');

    const idInput = document.createElement('input');
    idInput.type = 'text';
    idInput.name = 'id';
    idInput.placeholder = 'Identificador único';

    const modelInput = document.createElement('input');
    modelInput.type = 'text';
    modelInput.name = 'model';
    modelInput.placeholder = 'Modelo';

    const markInput = document.createElement('input');
    markInput.type = 'text';
    markInput.name = 'mark';
    markInput.placeholder = 'Marca';

    const type = document.createElement('span');
    type.innerText = 'Tipo: ';
    const typeSelect = document.createElement('select');
    typeSelect.name = 'type';
    const hatchOption = document.createElement('option');
    hatchOption.innerHTML = 'Hatch';
    hatchOption.value = 'Hatch';
    const sedanOption = document.createElement('option');
    sedanOption.innerText = 'Sedan';
    const SUVOption = document.createElement('option');
    SUVOption.innerText = 'SUV';

    typeSelect.appendChild(hatchOption);
    typeSelect.appendChild(sedanOption);
    typeSelect.appendChild(SUVOption);

    const situation = document.createElement('span');
    situation.innerText = 'Situação: ';
    const situationSelect = document.createElement('select');
    situationSelect.name = 'situation';
    const disponívelOption = document.createElement('option');
    disponívelOption.innerText = 'Disponível';
    const indisponívelOption = document.createElement('option');
    indisponívelOption.innerText = 'Indisponível';

    situationSelect.appendChild(disponívelOption);
    situationSelect.appendChild(indisponívelOption);

    const buttonSubmit = document.createElement('button');
    buttonSubmit.type = 'submit';
    buttonSubmit.disabled = true;
    buttonSubmit.innerText = 'Salvar';

    form.appendChild(idInput);
    form.appendChild(modelInput);
    form.appendChild(markInput);
    form.appendChild(type);
    form.appendChild(typeSelect);
    form.appendChild(situation);
    form.appendChild(situationSelect);
    form.appendChild(buttonSubmit);

    const imgX = document.createElement('img');
    imgX.src = iconeX;
    imgX.className = 'iconeX';
    imgX.id = 'iconeX';
    
    divCarEdit.appendChild(imgX);
    divCarEdit.appendChild(form);
    divCar.appendChild(divCarEdit);

    return {
        idInput,
        modelInput,
        markInput,
        typeSelect,
        situationSelect,
        buttonSubmit,
        imgX,
    };
};
