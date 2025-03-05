"use strict"; 


//singlton--> constructir se jab bhi banega -->y apne trahh ka ek hi object h 
//--> jab bhi hum literals ki tarah declare krte h to y nhi bnta h \

//singleton
/* Object.create  --> this is constructor method and esme hi singleton banta h   


*/


//object literals 

//agr symbol use krna h 
const mysym = Symbol("key 1")

const user1 = {

    name: "bhavishya",
    age:20,
    emial:"bhavish11google.com",
// name email and age are use like console.log(user1.name/email/age)


//but if 
"full name ":"katariyaji",
//this type of syntax ko excess krene k liye console.log(user1.["full name "]) ase krna padeta h
   
//if data type is symbol interview **
[mysym]: "key111",
//this type of syntax ko excess krene k liye console.log(user1.["mysym "])
// if    mysum : "key11"  --> eska data type string hoga typeof 





}

// console.log(user1["full name "]) 
// console.log(user1[mysym ])
// console.log(user1.name)
// console.log(typeof(user1[mysym ]))



// user1.email = "hitesh@chatgpt.com"
// freze krne k baad koi bhi changes ko propogate nahi krta h 
// Object.freeze(user1)
// user1.email = "hitesh@microsoft.com"
// console.log(user1);



user1.greeting = function(){
    console.log("Hello JS user");
}
user1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


//this give only function refernce 
console.log(user1.greeting)

console.log(user1.greeting());
console.log(user1.greetingTwo());