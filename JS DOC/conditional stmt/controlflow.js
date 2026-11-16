// if conditional statement
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// if else conditional statement
let number = 10;
if (number % 2 === 0) {
    console.log("The number is even.");
}else {
    console.log("The number is odd.");
}

// if else ladder conditional statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}


// switch conditional statement
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


let n=2;
let out;
switch(n){
    case 1 :
        out="One";
        break;
    case 2 :
        out="Two";
        break;
    case 3 :
        out="Three";
        break;
    default :
        out="Invalid number";
}
console.log(out);