// length   
let str="Chiyaan is a good actor";
console.log(str.length);

// CONCAT
let str1="Chiyaan";
let str2="Vikram";
console.log(str1.concat(str2));

// replace
let str3="Chiyaan is a good actor";
console.log(str3.replace("good","Great"));

// toUpperCase
let str4="Chiyaan is a good actor";
console.log(str4.toUpperCase());

// toLowerCase
let str5="Chiyaan is a good actor";
console.log(str5.toLowerCase());    

// repeat (repeat the string for the given number of times)
let str6="ChiyaanVikram";
console.log(str6.repeat(3));


// indexOf (check the index number of the given string)
let str8="Chiyaan is a good actor";
console.log(str8.indexOf("a"));


// lastIndexOf (check the last index number of the given string)
let str9="Chiyaan is a good actor";
console.log(str9.lastIndexOf("o"));


// includes (check whether the string is in the given string or not)
let str7="Chiyaan is a good actor";
console.log(str7.includes("is"));

// trimStart (used to remove the white space from the START of the string)
let str10="   Chiyaan is a good actor   ";  
console.log(str10.trimStart());

// trimEnd (used to remove the white space from the END of the string)
console.log(str10.trimEnd());


// match (used to match the given string with the string (gives info or otherwise NULL))

// [
//   'good',
//   index: 13,
//   input: 'Chiyaan is a good actor',
//   groups: undefined
// ]

let str11="Chiyaan is a good actor";
console.log(str11.match("good"));

// chartAt (used to get the character at the given index)
let str12="Chiyaan is a good actor";
console.log(str12.charAt(5));


// charCodeAt (used to get the unicode (ASCHII KEY ) of the character at the given index)
let str13="Chiyaan is a good actor";
console.log(str13.charCodeAt(5));

// padStart (used to add the given string at the start of the string)
let str14="Chiyaan is a good actor";
console.log(str14.padStart(26,"Ramu"));

// padEnd (used to add the given string at the end of the string)
let str15="Chiyaan is a good actor";
console.log(str15.padEnd(28,"Ramu"));

