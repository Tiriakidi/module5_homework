
let myMap = new Map();

myMap.set("1", "prop1");
myMap.set(2, 1234);
myMap.set(true, "prop3");


for (let key of myMap.keys()) {
  let mapValue = myMap.get(key);
  console.log(`Key - ${key}, Value - ${mapValue}`)
}