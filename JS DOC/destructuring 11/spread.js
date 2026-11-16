//spread operator
// used to expand the array by using the three dots(...) followed by the values 

// spread operator in array

// noraml way
let arr1 = [10, 20];
console.log(arr1);

let arr2 = [30, 40];
console.log(arr2);

let arr3 = [10, 20, 30, 40];

// using spread operator
arr1 = [10, 20];
console.log(arr1);

arr2 = [...arr1, 30, 40];
console.log(arr2);

// spread operator in object

// normal way
let obj1 = {
  name: "Bolu",
  age: 16,
};
console.log(obj1);

let obj2 = {
  city: "Dolakpur",
  state: "TN",
};
console.log(obj2);

let obj3 = {
  name: "Bolu",
  age: 16,
  city: "Dolakpur",
  state: "TN",
};
console.log(obj3);

// using spread operator
obj1 = {
  name: "Bolu",
  age: 16,
};
console.log(obj1);

obj2 = {
  ...obj1,
  city: "Dolakpur",
  state: "TN",
};
console.log(obj2);
