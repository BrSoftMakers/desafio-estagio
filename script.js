const $carCatalog = document.querySelector('.car-catalog');
verifyCarCatalogVisibility();

function verifyCarCatalogVisibility () {
  if ($carCatalog.children.length < 2) {
    $carCatalog.style.display = 'none';
  } else {
    $carCatalog.style.display = '';
  }
};


const $btnOpenAddForm = document.querySelector('.btn-open--add-form');
const $btnCloseAddForm = document.querySelector('.btn-close--add-form');
const $modalCarAdd = document.querySelector('.modal__car-add');

$btnOpenAddForm.addEventListener('click', () => {
  $modalCarAdd.showModal();
});
$btnCloseAddForm.addEventListener('click', () => {
  $modalCarAdd.close();
});

const $btnOpenEditForm = document.querySelector('.btn-open--edit-form');
const $btnCloseEditForm = document.querySelector('.btn-close--edit-form');
const $modalCarEdit = document.querySelector('.modal__car-edit');

$btnOpenEditForm.addEventListener('click', () => {
  $modalCarEdit.showModal();
});
$btnCloseEditForm.addEventListener('click', () => {
  $modalCarEdit.close();
});

const $btnOpenRemoveForm = document.querySelector('.btn-open--remove-form');
const $btnCloseRemoveForm = document.querySelector('.btn-close--remove-form');
const $modalCarRemove = document.querySelector('.modal__car-remove');

$btnOpenRemoveForm.addEventListener('click', () => {
  $modalCarRemove.showModal();
});
$btnCloseRemoveForm.addEventListener('click', () => {
  $modalCarRemove.close();
});


let carCatalog = new Map();
const $carAddForm = document.querySelector('#car-add__form');
const $carEditForm = document.querySelector('#car-edit__form');
const $carRemoveForm = document.querySelector('#car-remove__form');

$carAddForm.addEventListener('submit', () => {
  let carAddFormData = new FormData($carAddForm);
  let chassisCode = carAddFormData.get('chassis-code--add');

  if (document.getElementById(chassisCode) !== null) {
    alert('Este carro já foi adicionado ao catálogo, nós não aceitamos anúncios duplicados!')
    return;
  };

  appendCarToObject(carAddFormData);
  createCarPost(carAddFormData);

  function appendCarToObject (carAddFormData) {
    carCatalog.set(chassisCode, {
      brand: carAddFormData.get('brand--add'),
      model: carAddFormData.get('model--add'),
      type: carAddFormData.get('type--add'),
      availability: carAddFormData.get('availability--add'),
      picture: carAddFormData.get('picture--add'),
    });
  };

  function createCarPost (carAddFormData) {
    const carCard = document.querySelector('.car-card').cloneNode(true);
    carCard.setAttribute('id', chassisCode);
    
    if (carAddFormData.get('picture--add') !== '') {
      carCard.querySelector('.car-card__img').src = carAddFormData.get('picture--add');
    };
    carCard.querySelector('.car-card__brand').textContent = carAddFormData.get('brand--add');
    carCard.querySelector('.car-card__model').textContent = carAddFormData.get('model--add');
    carCard.querySelector('.car-card__type').textContent = carAddFormData.get('type--add');
    carCard.querySelector('.car-card__availability').textContent = carAddFormData.get('availability--add');

    $carCatalog.appendChild(carCard);
  };

  verifyCarCatalogVisibility();
  console.log(carCatalog);
});

$carEditForm.addEventListener('submit', () => {
  let carEditFormData = new FormData($carEditForm);
  let chassisCode = carEditFormData.get('chassis-code--edit');
  let carCard = document.getElementById(chassisCode);

  if (carCatalog.has(chassisCode) === false) {
    alert('Este número de chassi não foi encontrado, digite outro!')
    return
  };

  if (carEditFormData.get('picture--edit') !== '') {
    carCard.querySelector('.car-card__img').src = carEditFormData.get('picture--edit');
  };
  if (carEditFormData.get('brand--edit') !== '') {
    carCard.querySelector('.car-card__brand').textContent = carEditFormData.get('brand--edit');
  };
  if (carEditFormData.get('model--edit') !== '') {
    carCard.querySelector('.car-card__model').textContent = carEditFormData.get('model--edit');
  };
  if (carEditFormData.get('type--edit') !== 'null') {
    carCard.querySelector('.car-card__type').textContent = carEditFormData.get('type--edit');
  };
  if (carEditFormData.get('availability--edit') !== 'null') {
    carCard.querySelector('.car-card__availability').textContent = carEditFormData.get('availability--edit');
  };
});

$carRemoveForm.addEventListener('submit', () => {
  let chassisCode = $carRemoveForm.querySelector('#chassis-code--remove').value;

  if (carCatalog.has(chassisCode) === false) {
    alert('Este número de chassi não foi encontrado, digite outro!')
    return
  };

  removeCarFromObject();
  removeCarPost();

  function removeCarFromObject () {
    carCatalog.delete(chassisCode);
  };

  function removeCarPost () {
    document.getElementById(chassisCode).remove();
  };
  
  verifyCarCatalogVisibility();
  console.log(carCatalog);
});
