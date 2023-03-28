const inputId = document.getElementById('id');
const inputModel = document.getElementById('model');
const inputMark = document.getElementById('mark');
const selectType = document.getElementById('type');
const selectSituation = document.getElementById('situation');
const buttonSubmit =  document.getElementById('buttonSubmit');

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
