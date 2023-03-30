import carCatalog from "../main.js";
import verifyCarCatalogVisibility, {$carCatalog} from "/js/verify-car-catalog-visibility.js";

const $carAddForm = document.querySelector('#car-add__form');

$carAddForm.addEventListener('submit', () => {
  let carAddFormData = new FormData($carAddForm);
  let chassisCode = carAddFormData.get('chassis-code--add');

  if (document.getElementById(chassisCode) !== null) {
    alert('Este carro já foi adicionado ao catálogo, nós não aceitamos anúncios duplicados!')
    return;
  };

  createCarPost();
  appendCarToObject();

  function createCarPost () {
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

  function appendCarToObject () {
    carCatalog.set(chassisCode, {
      brand: carAddFormData.get('brand--add'),
      model: carAddFormData.get('model--add'),
      type: carAddFormData.get('type--add'),
      availability: carAddFormData.get('availability--add'),
      picture: carAddFormData.get('picture--add'),
    });
  };

  verifyCarCatalogVisibility();
  console.log(carCatalog);
});
