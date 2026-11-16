// nested objects
let obj = {
  name: "ramu",
  age: 21,
  address:{
    location:'5/25',
    state:'kerala'
  },
  country: "india",
};
console.log(obj.address.location);
console.log(obj.address.state);
console.log(obj.country)

// Nested in Nested objects
let obj1 = {
  name: "ramu",
  age: 21,
  address: {
    location: "5/25",
    state: "kerala",
  },
  food:{
    fruits:{
        f1:'apple',
        f2:'mango',
    },
    veg:{
        v1:'beetroot',
        v2:'carrot'
    }
  },
  country: "india",
};
console.log(obj1.name);  // ramu

console.log(obj1.address.location); // 5/25
console.log(obj1.address.state); // kerala

console.log(obj1.food.fruits.f1); // apple
console.log(obj1.food.veg.v2); // carrot

console.log(obj1.country) // india


// Objects with array and nested objects
let obj2 = {
  name: "ramu",
    age: 21,  
    address: {
        location: "5/25",
        state: "kerala",
    },
    food: {
        fruits: {
            f1:['apple', 'banana', 'mango'],
            f2:['orange', 'grapes', 'kiwi']
        },
        veg: {
            v1: ['beetroot', 'spinach'],
            v2: ['carrot', 'broccoli', 'celery']
        }
    }, 
    snacks:{
        s1:'chips',
        s2:'popcorn'
    },
    country: "india",
};
console.log(obj2.name);  // ramu   

console.log(obj2.address.location); // 5/25
console.log(obj2.address.state); // kerala


console.log(obj2.food.fruits.f1); // apple, banana, mango
console.log(obj2.food.veg.v2); // carrot, broccoli, celery

console.log(obj2.food.fruits.f1[0]); // apple
console.log(obj2.food.veg.v2[1]); // broccoli

console.log(obj2.snacks.s1);     // chips
console.log(obj2.snacks.s2);     // popcorn


console.log(obj2.country) // india