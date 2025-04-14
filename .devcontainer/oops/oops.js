
/* object literals

this keyword is use for current context;


*/
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)




// console.log(user.getUserDetails());
/*{
  username: 'hitesh',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
} */




// console.log(this); --> {} in node but in broswer there is window in global context



/* constructor --> new keywrod is constructor function  
  
like 

const promise= new promise
 const date =new Date() ;

 new keyword --> allow by 1 object make multiple instances 

*/



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
/* if we not use "new " keyword values overwrite hojyegi */

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);