//Получение случайного целого числа в заданном интервале
//Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  if (min >= 0 && max >= 0) {
    if (min > max) {
      const temporaryValue = min;
      min = max;
      max = temporaryValue;
    }

    if (min === max) {
      throw Error('Минимальное значение равно максимальному');
    }

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    throw Error('Диапазон должен быть положительным');
  }
}

// Функция, возвращающая случайное число с плавающей точкой
// Источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max, numberAfterComma) {
  if (numberAfterComma >= 0 && min >= 0 && max >= 0) {
    if (min > max) {
      const temporaryValue = min;
      min = max;
      max = temporaryValue;
    }

    if (min === max) {
      throw Error('Минимальное значение равно максимальному');
    }

    const result = Math.random() * (max - min) + min;
    return result.toFixed(numberAfterComma);
  } else {
    throw Error('Диапазон должен быть положительным');
  }
}


let locationLat, locationLng, rndInt = null;
const types = {
  0: 'palace',
  1: 'flat',
  2: 'house',
  3: 'bungalow',
  4: 'hotel',
};
const time = {
  0: '12:00',
  1: '13:00',
  2: '14:00',
};
const arr1 = ['wifi', 'dishwasher', 'parking', 'elevator', 'conditione'];
const arr2 = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg,',
];
const results = [];

for (let i = 0; i < 10; i++) {
  locationLat = getRandomNumber(35.65, 35.7, 5);
  locationLng = getRandomNumber(35.65, 35.7, 5);
  rndInt = getRandomInt(0, 10);

  const obj = {
    author: {
      avatar:
        rndInt === 10
          ? `img/avatars/user${rndInt}.png`
          : `img/avatars/user0${rndInt}.png`,
    },

    offer: {
      title: '',
      address: `${locationLat}, ${locationLng}`,
      price: rndInt,
      type: types[getRandomInt(0, 4)],
      rooms: Math.abs(Math.floor(Math.random())),
      guests: Math.abs(Math.floor(Math.random())),
      checkin: time[getRandomInt(0, 2)],
      checkout: time[getRandomInt(0, 2)],
      features: arr1.slice(getRandomInt(0, 4)),
      description: '',
      photos: arr2.slice(getRandomInt(0, 2)),
    },

    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };

  results[i] = obj;
}

//location: {
//   lat: getRandomNumber(35.65000,35.70000,5),
//    lng: getRandomNumber(139.70000,139.80000,5)
// }
