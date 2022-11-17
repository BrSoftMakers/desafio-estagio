export const $carCatalog = document.querySelector('.car-catalog');

export default function verifyCarCatalogVisibility () {
  if ($carCatalog.children.length <= 1) {
    $carCatalog.style.display = 'none';
  } else {
    $carCatalog.style.display = '';
  }
};
