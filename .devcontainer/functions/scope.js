// let a=10
// const b=20

// var c=30
//  console.log(a)
//  console.log(b)
//  console.log(c)

 //if this--> {} curly braces come with (if and else and with functions this is called scope )
  
 
//  if(true)
//   {
//     let a=10
//     const b=20
    
//     var c=30

//   }

//   console.log(a)
//   console.log(b)
 /*console.log(a), console.log(b) this give error kyuki y a ' and b
   scope k bhr nahi ana chaiye */

   /* but  y 30 print ho jyega , jabki 30
    bhr nhi anan chaiye tha scope se 
    esliye var ko use nahi krte h */
//  console.log(c)

/*scpe is like --> for alg alg programmers k liye 
   jisse bo acces kr ske same varible ko a,b,c ko    */

   /*   global scope--> let a=30 
   
    block scope  -->(scope k andr ki value bhr nahi
        jani chaiye )if(true)
  {
    let a=10
    const b=20
    
    var c=30}
                */

// let a=10
//     console.log(`global scope : ${a} `)
//     console.log(`block scope -->`)

//     if(true)
//   {
//     let a=1000
//     console.log( "scope :",a)

//   }

  /*browser p inspect m jake console m 
  jo global scope h bo alg and node m jo global
  scope h bo alg h  */


  //******************************************** */


/*  concept --> you can acesse outer function variable in inner fuction
    but inner function can not access by outer function */

  function one()
{    const username="bhavishya"
     
     function two()
     {
        const website="googole"
        console.log(username);
     }
      //give error 
    //  console.log(website);
     
     two()

}

one()

