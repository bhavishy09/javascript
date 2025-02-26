"use strict"; 
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //not same kyuki symbol unique hota h chae value same 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions  sare primitive ka data type  object hota h 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


console.log(typeof heros);

console.log(typeof myObj);

console.log(typeof null);
 console.log(typeof userEmail);   //undefined 
// console.log(typeof anotherId);





//refer for interview 
// https://262.ecma-international.org/5.1/#sec-11.4.3


//memory stack and heap 

//stack (primitive )=> y copy store krta h 

let anotherUser ="bhavishya katariya "

let userAnother=anotherUser
console.log(userAnother)

userAnother="future singh"
console.log(anotherUser)
console.log(userAnother)


// see there is copy go // by cahngeing of another user no change in user another //copy value milta h 

//heap(fot non -primitive )=> by refernce value milta h 

let userone={
    id:101,
    name:"king"

}

let usertwo =userone

console.log(usertwo.name)

//w

usertwo.name="raja"
//see both change user one or two becuse yha value refence se change ho rhi h 
console.log(usertwo.name)
console.log(userone.name)

