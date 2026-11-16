// rest operator
// used to store the remaining array by using the three dots(...) and should be used after the end and using in the middle throws error

// array rest operator
let arr = ["red", "blue", "green", "yellow", "orange"];
console.log(arr);

let [a, b, ...c] = arr;
console.log(a);
console.log(c);
console.log(...c);

// object rest operator
// whenever using this operator we can have any names but the key should be same for remaining 
let obj = {
  name: "Bolu",
  age: 24,
  city: "Chennai",
  state: "TN",
};

let { name, age, ...remaining } = obj;
console.log(remaining);
console.log(name);
