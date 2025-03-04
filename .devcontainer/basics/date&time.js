"use strict"; 




//** date ka type is object in java script  */
let mydate=new Date()
// console.log(mydate)

//basically these are different differnt representation of date and time by properties 
// console.log(mydate.toString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())


//in javascript maths are start from 0
// let myydate =new Date(2022,0,4)
// console.log(myydate)
// console.log(myydate.toDateString())
// console.log(myydate.toLocaleDateString())



//timestamp
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})