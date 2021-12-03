let arr = [1, NaN, '',  22, 0, null];

let oddNums = 0;
let evenNums = 0;
let nullNums = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof(arr[i]) === 'number' && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      nullNums++
    } else if (arr[i] % 2 === 0) {
      evenNums++
    } else {
      oddNums++
    }
  }  
}
  
  
console.log(`odd: ${oddNums}, even: ${evenNums}, 0: ${nullNums}`)