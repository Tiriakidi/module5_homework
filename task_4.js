//Задание 4

let result;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return result = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

getRandomNumber(1, 100);

console.log(result)

