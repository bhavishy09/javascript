

//this--> basicaaly use for current context k liye 

const user = {

username:"bhavishya" ,
pass:"katariya"
,

 welcomemsg: function ()
 {
    console.log(`${this.username},hii sir`)

     //
    console.log(this)
 }

}

// user.welcomemsg()


//if agr koi username ko change kr de
// user.username="aamvii"

/*now ==>aamvii,hii sir  here this ka use dikha ki bo current context ko leta h 
*/

// user.welcomemsg()


/*  so now ab console.log(this) y empty dega {}

 but if we use in browser same thing this give an object beacuse in browser 
 global object is window ...* important 

*/


// console.log(this) 


function one()
{
    user:"katariya"
    console.log(this.user)
}

one()
/* yha p 

function one()
{
    user:"katariya"
    console.log(this.user)
}

one()

y undefined de rha kyuki we can't use this direct in function "this" works in
object 

*/



// arrow functions 

/*


const user = () =>{

username:"bavishya "

console.log(this.username)

yy bhi tera undefined hi dega you can't use this in arrow functions also not use in
simple functions 
only in objects

} 
 */

const user2 = () => {

    username:"bavishya "
    
    console.log(this.username)
}    


//this is how arrow function look () => {}
//ans store in any variable 

// explicit
const addtwo = (num1,num2) => {
    return num1+num2
}

console.log(addtwo(3,4))

//implicit type arrow function in this  one line m hota h 
// dont use return 
// const addthree =(num1,num2,num3) => ( num1+num2+num3)
// console.log(addthree(3,4,6))




/*  

const addthree =(num1,num2,num3) => ( username:"chai or code ")
this is wrong (output== undefined)

object ko apko parinthesis m likhna padega 

addthree =(num1,num2,num3) => ({ username:"chai or code "})
this give chai or code as output

*/

