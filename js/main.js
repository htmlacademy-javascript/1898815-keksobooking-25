const getRandomFloat = (min, max, symbolsAfterDot) => {
  if (min >= max) {
    return 'Нужен положительный диапазон чисел!';
  }
  const number =  Math.random() * ((max + 1) - min) + min - 1;
  return number.toFixed(symbolsAfterDot);
};


getRandomFloat(50, 85.78, 5);
