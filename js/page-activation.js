import { mainPinMarker , map} from './map.js';
import { removePopup } from './util.js';


const filterForm = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');

const adFormFields = adForm.querySelectorAll('fieldset');
const filterFormFields = [filterForm.querySelector('fieldset'), ...filterForm.querySelectorAll('select')];

const disablePage = () => {

  adForm.classList.add('ad-form--disabled');
  filterForm.classList.add('map__filters--disabled');

  filterFormFields.forEach((field) => {
    field.disabled = true;
  });
  adFormFields.forEach((field) => {
    field.disabled = true;
  });
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  filterForm.classList.remove('map__filters--disabled');

  filterFormFields.forEach((field) => {
    field.disabled = false;
  });
  adFormFields.forEach((field) => {
    field.disabled = false;
  });
};

const priceField = adForm.querySelector('#price');
const typesList = adForm.querySelector('#type');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const timeInField = adForm.querySelector('#timein');
const timeOutField = adForm.querySelector('#timeout');
const titleField = adForm.querySelector('#title');
const description = adForm.querySelector('#description');
const features = adForm.querySelectorAll('.features__checkbox');

const resetPage = () => {
  titleField.value = '';
  priceField.value = '';
  typesList.selectedIndex = 1;
  roomNumber.selectedIndex = 0;
  capacity.selectedIndex = 0;
  timeInField.selectedIndex = 0;
  timeOutField.selectedIndex = 0;
  description.value = '';

  features.forEach((feature) =>{
    feature.checked = false;
  });

  mainPinMarker.setLatLng({
    lat: 35.67946,
    lng: 139.75772,
  });
  map.setView({
    lat: 35.679458,
    lng: 139.757721,
  }, 13);
  removePopup();
};

disablePage();

export {disablePage , activatePage, resetPage};
