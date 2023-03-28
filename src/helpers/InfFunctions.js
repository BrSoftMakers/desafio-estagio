export const handleButtonSubmitSituation = (valuesForm, buttonSubmit) => {
    const { id, model, mark, type, situation } = valuesForm;
    if (id.length && model.length  >= 1) {
        if (mark.length && type.length >= 1) {
            if (situation.length >= 1) {
                buttonSubmit.disabled = false;
            }
        }
    }
};

export const handleButtonSubmitAdd = () => {
    const storageCars = JSON.parse(localStorage.getItem('cars'));

    if (!storageCars) {
        localStorage.setItem('cars', JSON.stringify([valuesForm]));
    } else {
        storageCars.push(valuesForm);
        localStorage.setItem('cars', JSON.stringify(storageCars));
    }
};


export const valuesForm = {
    id: '',
    model: '',
    mark: '',
    type: '',
    situation: '',
};

export const handleFormSalve = (target, buttonSubmit) => {
    const { value, name } = target;
    valuesForm[name] = value;
    handleButtonSubmitSituation(valuesForm, buttonSubmit);
};

export const handleButtonEditLocal = (index) => {
    const storageCars = JSON.parse(localStorage.getItem('cars'));

    const newStorageCars = storageCars;

    newStorageCars[index] = valuesForm;
    
    localStorage.setItem('cars', JSON.stringify(newStorageCars));
    
};

export const handleButtonDelete = (index) => {
    const storageCars = JSON.parse(localStorage.getItem('cars'));

    const id = storageCars[index];

    const newStorageCars = storageCars.filter((car) => car !== id);

    localStorage.setItem('cars', JSON.stringify(newStorageCars));
};
