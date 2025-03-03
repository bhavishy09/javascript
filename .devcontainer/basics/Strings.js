"use strict";

//basic syntax but nit prefer to use 

//example 1
let user1="hello "
let user2="world"

console.log(user1+user2)


//example 2
let str1=50
let str2="hii"

console.log(str1+str2)


//perfect method 
//is is best tarika 
console.log(`hii this is me bhavishya ${str1} my age is ${20} `);
console.log(`hi i am bhavishya ${ katariya } perusing ${engineering}`);



// how string methods works 

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim remove space 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));