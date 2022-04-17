import { hideElement } from './util.js';

// Попап балуна
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const types = {
  'flat': 'Квартира ',
  'bungalow':'Бунгало ',
  'house': 'Дом ',
  'palace':'Дворец ',
  'hotel':'Отель ',
};
// const features = {
//   'wifi': ,
//   'dishwasher': ,
//   'parking' : ,
//   'conditioner': ,
//   'washer' : ,
//   'elevator': ,
//   'conditioner': ,
// };

const createPopup = ({offer, author}) => {
  const popupElement = popupTemplate.cloneNode(true);
  const featuresContainer = popupElement.querySelector('.popup__features');

  popupElement.querySelector('.popup__title').textContent = offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = types[offer.type];
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupElement.querySelector('.popup__avatar').src = author.avatar;
  popupElement.querySelector('.popup__description').textContent = offer.description;

  if (Object.hasOwn(offer, 'features')) {
    featuresContainer.textContent = offer.features.join(', ');
  } else {
    hideElement(featuresContainer);
  }

  const photoContainer = popupElement.querySelector('.popup__photos');
  if (Object.hasOwn(offer, 'photos')) {
    const photoElement = photoContainer.querySelector('.popup__photo');
    photoElement.src = offer.photos[0];

    if (offer.photos.length > 1) {
      for (let i = 1; i < offer.photos.length; i++) {
        const photoElementClone = photoElement.cloneNode(false);
        photoElementClone.src = offer.photos[i];
        photoContainer.append(photoElementClone);
      }
    }
  } else {
    hideElement(photoContainer);
  }

  if (!popupElement.querySelector('.popup__description').textContent) {
    popupElement.querySelector('.popup__description').classList.add('hidden');
  }
  return popupElement;
};

// Попап сообщения об успехе
const successMessage = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');

function onClickRemoveSuccessMessage () {
  body.removeChild(successMessage);
  document.removeEventListener('keydown', onEscapeRemoveSuccessMessage);
}
function onEscapeRemoveSuccessMessage (evt) {
  if (evt.key === 'Escape') {
    body.removeChild(successMessage);
    document.removeEventListener('click', onClickRemoveSuccessMessage);
  }
}

const showSuccessMessage = () => {
  body.append(successMessage);
  document.addEventListener('click', onClickRemoveSuccessMessage, {once:true});

  document.addEventListener('keydown', onEscapeRemoveSuccessMessage, {once:true});
};

// Попап сообщения об ошибке
const errorMessage = document.querySelector('#error').content.querySelector('.error');
function onErrorButton () {
  body.removeChild(errorMessage);
  document.removeEventListener('click', );
  document.removeEventListener('keydown',);
}
function onClickRemoveErrorMessage () {
  body.removeChild(errorMessage);
  document.removeEventListener('keydown',onEscapeRemoveErrorMessage);
}
function onEscapeRemoveErrorMessage (evt) {
  if (evt.key === 'Escape') {
    body.removeChild(errorMessage);
    document.removeEventListener('click', onClickRemoveErrorMessage);
  }
}

const showErrorMessage = () => {
  const errorButton = errorMessage.querySelector('.error__button');
  body.append(errorMessage);
  errorButton.addEventListener('click', onErrorButton, {once:true});
  document.addEventListener('click', onClickRemoveErrorMessage, {once:true});
  document.addEventListener('keydown', onEscapeRemoveErrorMessage, {once:true});
};

export {createPopup, showSuccessMessage, showErrorMessage};
