import { sendAd } from './load.js';
import { resetPage} from './page-activation.js';
import { showErrorMessage, showSuccessMessage } from './popup.js';

const adForm = document.querySelector('.ad-form');
const priceField = adForm.querySelector('#price');
const typesList = adForm.querySelector('#type');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const timeInField = adForm.querySelector('#timein');
const timeOutField = adForm.querySelector('#timeout');
const resetButton = adForm.querySelector('.ad-form__reset');

const MIN_PRICES = {
  'flat': 1000,
  'bungalow': 0,
  'house': 5000,
  'palace':10000,
  'hotel':3000,
};

const CAPACITY_OPTIONS = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
});

// Валидация полей Кол-во комнат и Кол-во мест
function validateCapacity () {
  return CAPACITY_OPTIONS[roomNumber.value].includes(capacity.value);
}

function getCapacityErrorMessage () {
  return 'Неверное количество гостей/комнат';
}

pristine.addValidator(roomNumber, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);

// Валидация по минимальной цене
function validateMinPrice (value) {
  return parseInt(value, 10) >= MIN_PRICES[typesList.value];
}

function getPriceErrorMessage () {
  return `Цена не менее ${MIN_PRICES[typesList.value]} руб/ночь`;
}
pristine.addValidator(priceField, validateMinPrice, getPriceErrorMessage);

// Синхронизация Типа жилья с плейсхолдером цены
function onTypeChange () {
  priceField.placeholder = MIN_PRICES[this.value];
  pristine.validate(priceField);
}
typesList.addEventListener('change', onTypeChange);

// Синхронизация времени заезда/выезда
function onTimeChange (evt) {
  timeInField.value = evt.target.value;
  timeOutField.value = evt.target.value;
}

timeInField.addEventListener('change', onTimeChange);
timeOutField.addEventListener('change', onTimeChange);

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPage();
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    const formData = new FormData(evt.target);

    sendAd (
      () => {
        showSuccessMessage();
        resetPage();
      },
      showErrorMessage,
      formData
    );
  }
});

export {priceField, pristine};
