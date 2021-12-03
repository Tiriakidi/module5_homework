let arr = [5, 5, 5, 6];

let result = true;

for (let i = 1; i < arr.length; i++) {  
  if (arr[i] !== arr[0]) {
    result = false
  }
}

console.log(result)