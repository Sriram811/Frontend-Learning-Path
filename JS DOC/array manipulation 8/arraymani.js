// push used to add element at the end of the array
let names=['ramu','chiyaan','vicky','mukesh','thiva']
names.push('sastha')
console.log(names)

// pop   used to add element at the end of the array
let name=['ramu','chiyaan','vicky','mukesh','thiva']
name.pop()
console.log(name)

// shift   used to remove element at the begining of the array
let shiftop = ["ramu", "chiyaan", "vicky", "mukesh", "thiva"]
shiftop.shift()
console.log(shiftop)

// shift   used to add element at the begining of the array
let ushift = ["ramu", "chiyaan", "vicky", "mukesh", "thiva"]
ushift.unshift('rakesh')
console.log(ushift)

// slice used to get the specific element from the array
let slc = ["ramu", "chiyaan", "vicky", "mukesh", "thiva"]
let s=slc.slice(0,2)
console.log(s)
console.log(slc)

// splice  used to get the specific element from the array but affect the original array

let sp=slc.splice(0,2)
console.log(sp)
console.log(slc)

// indexOf used to get the element from the array by giving the value in the indexOf
let i=names.indexOf(3)
console.log(i)

// at used to get the index number from the array by giving the element in the at
let t=names.at('ram')
console.log(t)

// includes used to check whether the given element is present in the array or not if it is present it returns true or else false 
let ic=names.includes('vicky')
console.log(ic)

// join used to join the two elements and mandatory to give element in the join()
let j=names.join('are friends')
console.log(j)

// reverse used to reverse the entire array 
let rv=names.reverse()
console.log(rv)
