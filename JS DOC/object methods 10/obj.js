// 1) keys
// used to extract the keys of an object
let obj = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(Object.keys(obj)); // Output: ["name", "age", "city"]

// 2) values
// used to extract the values of an object
console.log(Object.values(obj)); // Output: ["John", 30, "New York"]

// 3) entries
// used to extract the key-value pairs of an object as an array of arrays
console.log(Object.entries(obj)); // Output: [["name", "John"], ["age", 30], ["city", "New York"]]

// 4) seal
// can be able to modify the existing the value but can't able to add new values
// console.log(Object.seal(obj)); // Output: { name: 'John', age: 30, city: 'New York' }

// 5) isSealed
// used to check whether the object is sealed or not ,if it is sealed it will return true else false
console.log(Object.isSealed(obj)); // Output: false

// 6) freeze
// can not able to modify the existing values and can't able to add new values
Object.freeze(obj);

// 7) isFrozen
// used to check whether the object is frozen or not ,if it is frozen it will return true else false
console.log(Object.isFrozen(obj)); // Output: true