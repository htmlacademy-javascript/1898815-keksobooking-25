import {random} from './util.js';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const CHECK_TIMES = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const SIMILAR_ADVERT_COUNT = 10;

const createLocation = () => {
  const location = {
    lat: random.getRandomFloat(35.65000, 35.70000, 5),
    lng: random.getRandomFloat(139.70000, 139.80000, 5),
  };
  return location;
};


const createAuthor = (number) => {
  number = (number < 10) ? `0${number}` : number;
  const author = {
    avatar:`img/avatars/user${number}.png`,
  };
  return author;
};

const createOffer = () => ({
  title: '',
  address: '',
  price:random.getRandomInteger(10, 1000),
  type:random.getRandomElements(TYPES, 1),
  rooms:random.getRandomInteger(1,10),
  guests:random.getRandomInteger(1,10),
  checkIn: random.getRandomElements(CHECK_TIMES, 1),
  checkOut: random.getRandomElements(CHECK_TIMES, 1),
  features:random.getRandomElements(FEATURES, FEATURES.length),
  description:'Классное место',
  photos: random.getRandomElements(PHOTOS, PHOTOS.length),
});


const createAdvert = () => {
  const advert = {
    author: '',
    offer: createOffer(),
    location: createLocation(),
  };
  return advert;
};

const similarAdverts = Array.from({length: SIMILAR_ADVERT_COUNT}, createAdvert);

for ( let i = 0; i < similarAdverts.length; i++) {
  similarAdverts[i].offer.address =  `${similarAdverts[i].location.lat} , ${similarAdverts[i].location.lng}`;
  similarAdverts[i].offer.title = `Заголовок ${i}`;
  similarAdverts[i].author = createAuthor(i+1);
}

