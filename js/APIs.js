// Слайдер
import {priceField, pristine} from './validation.js';
const sliderElement = document.querySelector('.ad-form__slider');


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => parseFloat(value),
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
  pristine.validate(priceField);
});

// Карта
import { activatePage } from './page-activation.js';
import {createSimilarAdverts} from './data.js';
import {createPopup} from './popup.js';

const addressField = document.querySelector('#address');
const similarAds = createSimilarAdverts(10);

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
    addressField.value = '35.67946, 139.75772';
  })
  .setView({
    lat: 35.679458,
    lng: 139.757721,
  }, 13
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: 35.67946,
    lng: 139.75772,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  addressField.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (advert) => {
  const {lat, lng} = advert.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createPopup(advert));
};

similarAds.forEach((advert) => {
  createMarker(advert);
});
