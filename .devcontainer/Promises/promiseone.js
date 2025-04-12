//creatiuon of promises
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })



/* consuption of promises 
--> basically then connect krta h promisis ko
--> resolve or reject 2 chize hoti h peomises m 
--> resolve()  call krne k baad hi chlega 
 y-->
promiseOne.then(function(){
    console.log("Promise consumed");
})



*/


// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// /* another way  */

// new Promise(function(resolve,reject){

//     setTimeout(function()
//     {
//         console.log("requested");
//     },1000)

//     resolve()
// }).then(function()
// {
//     console.log("rersolved");
// })


/*another method -->parameter pass in resolve */

const promisethree =new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("pass")
    },1000)

    resolve({user: "bhavishya",
    pass:"katariya"})
})

promisethree.then(function(user)
{
    console.log(user);
})

/*another method -->use of reject*/

const promisefour=new Promise(function(resolve,reject){

    setTimeout(function(){

        let error =true
        if(!error)
        {
        resolve({user: "bhavishya",
        pass:"katariya"})

        } else{
            reject('ERROR:Something went wrong')
        }
    },1000)

})
promisefour
.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



/*asyn await and try catch */


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


/* fetch() and promises */

async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }
    getAllUsers()

    /* another method-->fecth ka response type promise  h */

    fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.