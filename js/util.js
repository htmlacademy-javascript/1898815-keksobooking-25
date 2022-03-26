
const random = {
  getRandomFloat: function (min, max, symbolsAfterDot=1) {
    if (min >= max) {
      return 'Нужен положительный диапазон чисел!';
    }
    const number =  Math.random() * (max - min) + min;
    return +number.toFixed(symbolsAfterDot);
  },
  getRandomInteger: function (a , b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  },
  getRandomArrayElement: function (array) {
    return array[this.getRandomInteger(0, array.length - 1)];
  },
  getRandomElements: function (array, amount)  {
    const arr = [];
    const cycles = this.getRandomInteger(1, amount);
    for (let i = 0; i < cycles; i++) {
      const element = this.getRandomArrayElement(array);
      if (!arr.includes(element)) {
        arr.push(element);
      }
      else {i--;}
    }
    return arr;
  },
};

export {random};
