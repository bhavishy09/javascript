"use strict"; 

// array mutiple items store in single variable 
//JavaScript arrays are resizable and can contain a mix of different data types. 
//(When those characteristics are undesirable, use typed arrays instead.)
//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, 
//but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0,

// JavaScript array-copy operations create shallow copies. -->
//A shallow copy of an object is a copy whose properties share the same references


//(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// join--> change the data type of arr convert into string 
// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

/* slice --> nit manipulate original array and not give last value of range(1,3) 3 ki 
value nhi dega */

/*   splice manipulate original  aray jitni range di hoti h bo array m se cut kr leta h   */


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);