// array
arr=[1,2,3,4,5]
console.log(arr)

arr[6]=6
console.log(arr)
arr[10]=10
console.log(arr)

arr1=['ramu',21,'mintu','chiyaan',10n]
delete arr1[2]
console.log(arr1)  // arr1=[ 'ramu', 21, <1 empty item>, 'chiyaan', 10n ]

// NESTED ARRAY
nesarr = [ 10,20,[30,40],[50,60],70,80,[90,100]]
console.log(nesarr)  //[ 10,20,[30,40],[50,60],70,80,[90,100]]

console.log(nesarr[2][1]);  // 40
console.log(nesarr[3][0]);  // 50   
console.log(nesarr[5]);     // 80

narr=[ 10,20,30,[40,50,60],[70,80,90,[100,110]] ]
console.log(narr[3][2]);  // 60
console.log(narr[4][3][1]);  // 110

fruits=['apple','banana','mango','grapes','orange']
console.log(fruits)  // [ 'apple', 'banana', 'mango', 'grapes', 'orange' ]
console.log(fruits.length)  // 5

fruit=['apple','banana','mango',['grapes','kiwi',['avacado','pomegranate']],'orange']
console.log(fruit)  // [ 'apple', 'banana', 'mango', [ 'grapes', 'kiwi', [Array] ], 'orange' ]
console.log(fruit.length)  // 5
console.log(fruit[3])  // [ 'grapes', 'kiwi', [ 'avacado', 'pomegranate' ] ]
console.log(fruit[3][2])  // [ 'avacado', 'pomegranate' ]
console.log(fruit[3][2][1])  // pomegranate 