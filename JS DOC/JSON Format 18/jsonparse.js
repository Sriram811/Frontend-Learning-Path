// JSON parse()....... Used to Convert Json to Normal
// Mandatory to provide Backticks ``
let obj=`{
    "name":"ramu",
    "age":21,
    "city":"Chennai"
}`
console.log(obj)

// TO convert JSON to Normal 
let a=JSON.parse(obj)
console.log(a)