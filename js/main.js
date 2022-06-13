  //Получение случайного целого числа в заданном интервале
  //Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomIntInclusive(min, max) {
    if (min >= 0 && max >= 0) {
        let temporaryValue = 0;
        if (min > max) {
            temporaryValue = min;
            min = max;
            max = temporaryValue;
        }
        if (min = max) {
            console.log('Минимальное значение равно максимальному.');
        }
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        console.log('Диапазон должен быть положительным!');
    }
}

  // Функция, возвращающая случайное число с плавающей точкой
// Источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max, numberAfterComma) {
    if (nomberAfterComma >= 0) {
        if (min >= 0 && max >= 0) {
            let temporaryValue = 0;
            if (min > max) {
                temporaryValue = min;
                min = max;
                max = temporaryValue;
            }
            if (min = max) {
                console.log('Минимальное значение равно максимальному.');
            }
            let result = Math.random() * (max - min) + min;
            return result.toFixed(numberAfterComma);
        } else {
            console.log('Диапазон должен быть положительным!');
        }
    } else {
        console.log('numberAfterComma должно быть положительным')
    }
}

