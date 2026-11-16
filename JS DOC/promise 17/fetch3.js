// Fetch 
// async function funName() {
//   try {
//     let store = await fetch("https://jsonplaceholder.typicode/posts");
//     let a =await store.json(); convert to json format 
//     console.log(a);
//   } catch (error) {
//     console.log("Catch Block");
//   }
// }
// funname();


async function funname(){
    try {
        let store= await fetch("https://jsonplaceholder.typicode.com/users/2")
        let a = await store.json()
        console.log(a)
    } catch (error) {
        console.log('Catch Block')
    }
}
funname()


async function chin() {
  try {
    let store = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let a = await store.json();
    console.log(a);
  } catch (error) {
    console.log("Catch Block");
  }
}
chin();
