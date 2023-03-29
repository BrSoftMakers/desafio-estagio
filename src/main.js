import { handleListCards } from './helpers/cardsFunctions';
import { handleButtonSubmitAdd } from './helpers/InfFunctions';
import { handleFormSalve } from './helpers/InfFunctions';

const inputId = document.getElementById('id');
const inputModel = document.getElementById('model');
const inputMark = document.getElementById('mark');
const selectType = document.getElementById('type');
const selectSituation = document.getElementById('situation');
const buttonSubmit =  document.getElementById('buttonSubmit');
const listCards = document.getElementById('list');
const divCards = document.getElementById('cards');


inputId.addEventListener('keyup', ({ target }) => handleFormSalve(target, buttonSubmit));
inputModel.addEventListener('keyup', ({ target }) => handleFormSalve(target, buttonSubmit));
inputMark.addEventListener('keyup', ({ target }) => handleFormSalve(target, buttonSubmit));
selectType.addEventListener('click', ({ target }) => handleFormSalve(target, buttonSubmit));
selectSituation.addEventListener('click', ({ target }) => handleFormSalve(target, buttonSubmit));
buttonSubmit.addEventListener('click', () => handleButtonSubmitAdd());

listCards.addEventListener('click', () => handleListCards(divCards));
