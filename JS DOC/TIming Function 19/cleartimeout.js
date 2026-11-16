// clearTimeout

let a=setTimeout(() => {
  console.log("ramu");
}, 2000);
clearTimeout(a)


setTimeout(() => {
  console.log("chiyaan");
}, 4000);

let b= setTimeout(() => {
  console.log("lili");
}, 6000);

clearTimeout(b)