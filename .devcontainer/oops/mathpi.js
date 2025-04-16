
/* question is in js we can change value of pi if not then why  */


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5

/* we can't change the value of pi because there is hard coded value 
  
     like that -->

 
       {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

 */
// console.log(Math.PI);






const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {

    // this we cam change these hardcoded values in our code 
    writable: false,
    // enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));



/* if  // enumerable: true, we do this we can't iterate on this loop  */
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}