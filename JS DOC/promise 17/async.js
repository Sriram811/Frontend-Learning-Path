// creating the promise

let m=80
let a =new Promise((reslove,reject)=>{
    if (m>=80){
        reslove('Good')
    }
    else{
        reject('Better Luck')
    }
})

// Handling using the Async and Await
async function mark() {
    try {
        // let variableName = await promiseName
        let store= await a
        console.log("Store the await and Execute the code")
    } catch (error) {
        console.log("Better Luck")
    }
    finally{
        console.log("Finally Block")
    }
}
mark()


let age=21
let b= new Promise((resolve,reject)=>{
    if (age>=18){
        resolve("Eligle to Vote ")
    }
    else{
        reject("Not Eligible")
    }
})

async function verify() {
    try {
        let store= await b
        console.log(store);
    } catch (error) {
        console.log(" Not Eligle to Vote ");
    }
    finally{
        console.log("I'm Finally Block")
    }
}
verify()