import iconeX from '../images/IconeX.png';


export const createForm = (index) => {
    const divCar = document.getElementById('car');

    const divFlex = document.createElement('div');
    divFlex.id = 'flex';

    const divCarEdit = document.createElement('div');
    divCarEdit.id = `divCarEdit ${index}`;
    divCarEdit.className = 'div-form-edit';

    const form = document.createElement('form');
    form.className = 'formEdit';

    const idLabel = document.createElement('label');
    idLabel.for = 'id';
    idLabel.innerText = 'Identificador único:  ';

    const idInput = document.createElement('input');
    idInput.type = 'text';
    idInput.name = 'id';
    idInput.placeholder = 'Identificador único';

    const modelLabel = document.createElement('label');
    modelLabel.for = 'model';
    modelLabel.innerText = 'Modelo:  ';

    const modelInput = document.createElement('input');
    modelInput.type = 'text';
    modelInput.name = 'model';
    modelInput.placeholder = 'Modelo';

    const markLabel = document.createElement('label');
    markLabel.for = 'mark';
    markLabel.innerText = 'Marca:  ';

    const markInput = document.createElement('input');
    markInput.type = 'text';
    markInput.name = 'mark';
    markInput.placeholder = 'Marca';

    const type = document.createElement('label');
    type.for = 'type';
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

    const situation = document.createElement('label');
    situation.for = 'situation';
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
    buttonSubmit.className = 'btn btn-info rounded-pill px-3 button-save';

    const sectionForm1 = document.createElement('section');
    sectionForm1.className = 'section-form-edit-1';

    const sectionForm2 = document.createElement('section');
    sectionForm2.className = 'section-form-edit-2';

    sectionForm1.appendChild(idLabel);
    sectionForm1.appendChild(idInput);
    sectionForm1.appendChild(modelLabel);
    sectionForm1.appendChild(modelInput);
    sectionForm1.appendChild(markLabel);
    sectionForm1.appendChild(markInput);
    sectionForm2.appendChild(type);
    sectionForm2.appendChild(typeSelect);
    sectionForm2.appendChild(situation);
    sectionForm2.appendChild(situationSelect);
    
    form.appendChild(sectionForm1);
    form.appendChild(sectionForm2);
    form.appendChild(buttonSubmit);

    const imgX = document.createElement('img');
    imgX.src = iconeX;
    imgX.className = 'iconeXEdit';
    imgX.id = 'iconeX';
    
    divCarEdit.appendChild(imgX);
    divCarEdit.appendChild(form);

    divFlex.appendChild(divCarEdit);

    divCar.appendChild(divFlex);

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
