const getRandomFloat = (min, max, symbolsAfterDot=1) => {
  if (min >= max) {
    return 'Нужен положительный диапазон чисел!';
  }
  const number =  Math.random() * (max - min) + min;
  return +number.toFixed(symbolsAfterDot);
  // Метод .toFixed() подглядел на https://learn.javascript.ru/number
};

const getRandomInteger = (a , b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

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

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getRandomElements = (array, amount) => {
  const arr = [];
  const cycles = getRandomInteger(1, amount);
  for (let i = 0; i < cycles; i++) {
    const element = getRandomArrayElement(array);
    if (!arr.includes(element)) {
      arr.push(element);
    }
    else {i--;}
  }
  return arr;
};

const createLocation = () => {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
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
  price:getRandomInteger(10, 1000),
  type:getRandomElements(TYPES, 1),
  rooms:getRandomInteger(1,10),
  guests:getRandomInteger(1,10),
  checkIn: getRandomElements(CHECK_TIMES, 1),
  checkOut: getRandomElements(CHECK_TIMES, 1),
  features:getRandomElements(FEATURES, FEATURES.length),
  description:'Классное место',
  photos: getRandomElements(PHOTOS, PHOTOS.length),
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


