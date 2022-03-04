const getRandomFloat = (min, max, symbolsAfterDot) => {
  if (min >= max) {
    return 'Нужен положительный диапазон чисел!';
  }
  const number =  Math.random() * ((max + 1) - min) + min - 1;
  return +number.toFixed(symbolsAfterDot);
  // Метод .toFixed() подглядел на https://learn.javascript.ru/number
};


getRandomFloat(50, 85.78, 5);

const getRandomInteger = (a , b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomInteger(1, 25);
