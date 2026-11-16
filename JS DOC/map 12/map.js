// map an array method used to get the entire array value together at a time ,where the line nu,ber will be same 
// by using the single line we can execute the code 
// varibale.map((value)=>print(value))


let num=[10,20,30,40,50,60]

// using destructuring
let {a,b,c,d,e,f}=num
console.log(a)
console.log(c)

// using map
num.map((a)=>console.log(a))


let name=['ram','vicky','thiva','vishwa']
name.map((a)=>console.log(a))
