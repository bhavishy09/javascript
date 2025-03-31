//immedeaitely invoked function expression  IIFE
/*  1--> IMMEDIATATE INVOKE KRNE K LIYE FUNCTION KO 


     **** VERY IMP ...
    2--> SOMETIMES GLOBAL SCOPE K POLLUTION SE DIKT HOTI H TO JO BHI GLOBAL SCOPE K 
    VARIBLES H UNHE HATNE K LIYE IIFE KA USE KIYA JATA H 
    


    ()()  1 FOR FUNCTION ANOTHER FOR INSTANT EXCEUTATION



    example -->
    (function ()
    {
       console.log("jai jai ")
    })();

    ";" you have "end context"  use ; 

    


*/ 


//this is named iife
(function ()
{
   console.log("jai jai ")
})();


// also IIFE in arrow function 


//this is unnamed iife
(() => {
    console.log(`jai shre ram `);
})();


//another example
// *****************************************


( (name) => {
    console.log(`${name} `);
}) ('bhavishya');

//*******************************************/