// Задание 2

const x = "";

if (typeof(x) == 'number') {
  console.log('X — число')
} else if (typeof(x) == 'string') {
  console.log('X — cтрока')
} else if (typeof(x) == 'boolean') {
  console.log('X - это логический тип')
} else {
  console.log('Тип x не определён')
}