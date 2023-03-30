import carCatalog from "../main.js";

const $carEditForm = document.querySelector('#car-edit__form');

$carEditForm.addEventListener('submit', () => {
  let carEditFormData = new FormData($carEditForm);
  let chassisCode = carEditFormData.get('chassis-code--edit');

  if (carCatalog.has(chassisCode) === false) {
    alert('Este número de chassi não foi encontrado, digite outro!')
    return
  };

  let picture = carEditFormData.get('picture--edit');
  let brand = carEditFormData.get('brand--edit');
  let model = carEditFormData.get('model--edit');
  let type = carEditFormData.get('type--edit');
  let availability = carEditFormData.get('availability--edit');

  let inputsData = {picture, brand, model, type, availability};
  
  editCarPost();
  appendCarToObject();

  function editCarPost() {
    let $carCard = document.getElementById(chassisCode);
    let carData = carCatalog.get(chassisCode);
  
    for (let key in inputsData) {
      let value = inputsData[key];
  
      if (!value) {
        inputsData[key] = carData[key];
      } else {
        if (key === 'picture') {
          $carCard.querySelector('.car-card__img').src = value;
        } else {
          $carCard.querySelector(`.car-card__${key}`).textContent = value;
        }
      };
    }
  }

  function appendCarToObject () {
    carCatalog.set(chassisCode, {
      'brand': inputsData['brand'],
      'model': inputsData['model'],
      'type': inputsData['type'],
      'availability': inputsData['availability'],
      'picture': inputsData['picture'],
    });
  }

  console.log(carCatalog);
});
