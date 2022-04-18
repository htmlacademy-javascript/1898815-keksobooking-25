
const random = {
  getRandomFloat(min, max, symbolsAfterDot=1) {
    if (min >= max) {
      return 'Нужен положительный диапазон чисел!';
    }
    const number =  Math.random() * (max - min) + min;
    return +number.toFixed(symbolsAfterDot);
  },
  getRandomInteger(a , b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  },
  getRandomArrayElement(array) {
    return array[this.getRandomInteger(0, array.length - 1)];
  },
  getRandomElements(array, amount)  {
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

const hideElement = (element) => element.classList.add('hidden');
const removePopup = () => {
  const popup = document.querySelector('.leaflet-popup');
  return  popup ? popup.remove() : null;
};
const showFetchAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '20px 6px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {random, hideElement, showFetchAlert, removePopup};
