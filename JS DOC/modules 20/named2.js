// Named Module
function ram(a, b) {
    let c = a + b;
    return c;
}

export { ram as out };

let arr=[1, 2, 3, 4, 5];
export { arr as arr1 };

let obj={name:"Sriram", age:22};
export default obj;