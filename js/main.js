  //Получение случайного целого числа в заданном интервале
  //Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {

    if (min >= 0 && max >= 0) {

        if (min > max) {
            const temporaryValue = min;
            min = max;
            max = temporaryValue;
        }

        if (min == max) {
        throw Error ('Минимальное значение равно максимальному');
        }
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;

    } else {
        throw Error ('Диапазон должен быть положительным');
    }
}

  // Функция, возвращающая случайное число с плавающей точкой
// Источник:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max, numberAfterComma) {

    if (numberAfterComma >= 0 && min >= 0 && max >= 0 ) {

            if (min > max) {
                const temporaryValue = min;
                min = max;
                max = temporaryValue;
            }

            if (min == max) {
            throw Error ('Минимальное значение равно максимальному');
            }

            let result = Math.random() * (max - min) + min;
            return result.toFixed(numberAfterComma);
            
        } else {
        throw Error ('Диапазон должен быть положительным');
        }
}

