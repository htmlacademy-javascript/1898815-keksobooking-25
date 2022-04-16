import { hideElement } from './util.js';

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

const createPopup = ({offer, author}) =>{
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
  } else {hideElement(featuresContainer);}

  const photoContainer = popupElement.querySelector('.popup__photos');
  const photoElement = photoContainer.querySelector('.popup__photo');
  if (Object.hasOwn(offer, 'photos')) {
    photoElement.src = offer.photos[0];

    if (offer.photos.length > 1) {
      for (let i = 1; i < offer.photos.length; i++) {
        const photoElementClone = photoElement.cloneNode(false);
        photoElementClone.src = offer.photos[i];
        photoContainer.append(photoElementClone);
      }
    }} else {
    hideElement(photoContainer);
  }

  if (!popupElement.querySelector('.popup__description').textContent) {
    popupElement.querySelector('.popup__description').classList.add('hidden');
  }
  return popupElement;
};
export {createPopup};
