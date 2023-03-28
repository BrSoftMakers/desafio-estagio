const inputId = document.getElementById('id');
const inputModel = document.getElementById('model');
const inputMark = document.getElementById('mark');
const selectType = document.getElementById('type');
const selectSituation = document.getElementById('situation');
const buttonSubmit =  document.getElementById('buttonSubmit');
const listCards = document.getElementById('list');
const divCards = document.getElementById('cards');

const valuesForm = {
    id: '',
    model: '',
    mark: '',
    type: '',
    situation: '',
};

const handleFormSalve = (target) => {
    const { value, name } = target;
    valuesForm[name] = value;
    handleButtonSubmitSituation();
};

const handleButtonSubmitSituation = () => {
    const { id, model, mark, type, situation } = valuesForm;
    if (id.length && model.length  >= 1) {
        if (mark.length && type.length >= 1) {
            if (situation.length >= 1) {
                buttonSubmit.disabled = false;
            }
        }
    }
};

const handleButtonSubmitAdd = () => {
    const storageCars = JSON.parse(localStorage.getItem('cars'));

    if (!storageCars) {
        localStorage.setItem('cars', JSON.stringify([valuesForm]));
    } else {
        storageCars.push(valuesForm);
        localStorage.setItem('cars', JSON.stringify(storageCars));
    }
};

inputId.addEventListener('keyup', ({ target }) => handleFormSalve(target));
inputModel.addEventListener('keyup', ({ target }) => handleFormSalve(target));
inputMark.addEventListener('keyup', ({ target }) => handleFormSalve(target));
selectType.addEventListener('click', ({ target }) => handleFormSalve(target));
selectSituation.addEventListener('click', ({ target }) => handleFormSalve(target));
buttonSubmit.addEventListener('click', () => handleButtonSubmitAdd());

listCards.addEventListener('click', () => handleListCards());

const handleListCards = () => {

    const storageCars = JSON.parse(localStorage.getItem('cars'));

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

            const spanSituation = document.createElement('span');
            spanSituation.innerText = `Situação: ${situation}`;
            spanSituation.className = 'situation';

            div.appendChild(spanId);
            div.appendChild(spanModel);
            div.appendChild(spanMark);
            div.appendChild(spanType);
            div.appendChild(spanSituation);

            const buttonOptionsCard = document.createElement('button');
            buttonOptionsCard.type = 'button';
            buttonOptionsCard.class = 'btn btn-secondary';
            buttonOptionsCard.id = 'buttonOptionsCard';

            div.appendChild(buttonOptionsCard);

            const imgOptionsCard = document.createElement('img');
            imgOptionsCard.src = 'https://cdn-user-icons.flaticon.com/97704/97704934/1679970283832.svg?token=exp=1679971190~hmac=b736e3fc5586444cbf0b293c13e7ccbc';
            imgOptionsCard.class = 'imgOptions';

            buttonOptionsCard.appendChild(imgOptionsCard);
        }
    }
    );
};
