// Promise

    // creating
// variable name= new Promise((arg one name  , arg two name )=>{  })

    // handling
// varible name
// .then((arg one name )=>{print})
// .catch((arg two name )=>{print})
// .finally(()=>{print})


// Creating a Promise
let mark=20
let a = new Promise((resolve,reject)=>{
    if (mark>80){
        resolve ("You'll get a car ")
    }
    else{
        reject("Better Luck")
    }
})

// Handling a Promise
a
.then((resolve)=>{
    console.log("You'll get a car ");
})
.catch((resolve)=>{
    console.log("Better Luck");
})
.finally(()=>{
    console.log("I'm Finally Block ")
})




let net='yes'
let b=new Promise((resolve,reject)=>{
    if (net==='yes'){
        resolve("Network Available")
    }
    else{
        reject("Network not Available")
    }
})

b
.then((resolve)=>{
    console.log("Network Available");
})
.catch((reject)=>{
    console.log("Network not Available");
})
.finally(()=>{
    console.log("Dummy")
})