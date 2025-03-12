
// console.log("B")
// console.log("B")
// console.log("a")
// console.log("v")
// console.log("i")
// console.log("s")
// console.log("B")

function showname()
{

    console.log("B")
    console.log("B")
    console.log("a")
    console.log("v")
    console.log("i")
    console.log("s")
   



}

// showname()

function addtwono(num1,num2)

{

    console.log(num1+num2)

}

// addtwono(3,8)
// const result= addtwono(3,8)
// console.log("result:",result)
// here reesut is undefine because function koi returen value nahi h 
/*function bs console log ki madad se  print kra rha h --> basically console kren ka mtlab y nhi ki function bo value 
print bhi  kr rha h */


function addtwono(num1,num2)

{

    let result=num1+num2
    return result

}
// const result= addtwono(3,8)
// console.log("result:",result)
// ab result ki value 11 arhi phele undefine thi 


function loginuser(username)
{
    return `${username} just logged in`
}

// you get nothing  loginuser("hitesh")

//coreect way 
// console.log(loginuser("hitesh"))

/* if you pass nothing  
console.log(loginuser(""))
 you get nothing 

*/

function loginuser(username)
{   
    if(!username)
    {
        console.log("enter vaild username")
        return
    }
    return `${username} just logged in`
}


console.log(loginuser(""))




// [part 2]



/* basically here we  use rest operator which take 
multiple values return ...num1 convert all values in  array 
*/
// function calculatecart(...num1)
// {
//     return num1
// }

// console.log(calculatecart(2000,2000,2000,39000))





 
/*

here val1 and val2 take values and baki bachi(rest values ) hui vaklues
array m ayegi 


*/

// function calculatecart(val1,val2,...num1)
// {
//     return num1
// }

// console.log(calculatecart(2000,2000,2000,39000))



// how to use objects in functions 

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)


// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})



