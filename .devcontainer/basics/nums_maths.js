const score = 400
// console.log(score);


//by this we use some properties 
const balance = new Number(100)
// console.log(balance);


//now this convert into string and get some extra properties 
// console.log(balance.toString().length);

//decimal k baad kitna value chiaye this help to get some prcision value 
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));



// this give you 10000->10,00,000 like that 
const hundreds = 1000000
//console.log(hundreds.toLocaleString()); //-> this give  according to US

//indian
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++



// this is an object which contain many properties 
// console.log(Math);




// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));




//math. random always give value in 0 nse 1

console.log(Math.random());

//here *10 or +1 math.random ko express kr rha h ki value 1 se uper aye 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
//max-min +1 is give range and + min set ki value min se to badi honi chaiye 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)