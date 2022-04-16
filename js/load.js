// GET https://25.javascript.pages.academy/keksobooking/data.
//  POST https://25.javascript.pages.academy/keksobooking

const getAds = (onSuccess, onFail) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error (`${response.status} , ${response.statusText}`);
    })
    .then((ads) => onSuccess(ads.slice(0, 20)))
    .catch((err) => onFail(err));
};

const sendAd = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error (`${response.status} ${response.statusText}`);
      }
    })
    .catch((err) => onFail(`${err}. Не удалось отправить форму. Попробуйте ещё раз`)
    );
};


export {getAds, sendAd};
