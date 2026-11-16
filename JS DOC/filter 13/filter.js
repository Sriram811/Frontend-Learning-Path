// filter used to filter the values separately from the entire array and its mandatory and important to use an condition
// varibale.filter((value)=>condition)
let num=[10,20,30,40,50,60]
let u =num.filter((a)=>a>20)
console.log(u)

let fruit=['Apple','Banana','Mango','Orange','Grapes']
let f=fruit.filter((a)=>a<'C')
console.log(f)  //apple, banana

let w=fruit.filter((a)=>a=='Mango')
console.log(w)  //mango

let y=fruit.filter((a)=>a=='Mango' || a=='Orange')
console.log(y)  //mango, orange