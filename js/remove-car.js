import carCatalog from "../main.js";
import verifyCarCatalogVisibility from "/js/verify-car-catalog-visibility.js";

const $carRemoveForm = document.querySelector('#car-remove__form');

$carRemoveForm.addEventListener('submit', () => {
  let chassisCode = $carRemoveForm.querySelector('#chassis-code--remove').value;

  if (carCatalog.has(chassisCode) === false) {
    alert('Este número de chassi não foi encontrado, digite outro!')
    return
  };

  removeCarPost();
  removeCarFromObject();

  function removeCarPost () {
    document.getElementById(chassisCode).remove();
  };

  function removeCarFromObject () {
    carCatalog.delete(chassisCode);
  };
  
  verifyCarCatalogVisibility();
  console.log(carCatalog);
});
