const filterForm = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');

const adFormFields = adForm.querySelectorAll('fieldset');
const filterFormFields = [filterForm.querySelector('fieldset'), ...filterForm.querySelectorAll('select')];

const disablePage = () => {

  adForm.classList.add('ad-form--disabled');
  filterForm.classList.add('map__filters--disabled');

  filterFormFields.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
  adFormFields.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  filterForm.classList.remove('map__filters--disabled');

  filterFormFields.forEach((field) => {
    field.removeAttribute('disabled');
  });
  adFormFields.forEach((field) => {
    field.removeAttribute('disabled');
  });
};

disablePage();

export {disablePage , activatePage};
