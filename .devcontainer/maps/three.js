//for each loop-->
const coding = ["js", "ruby", "java", "python", "cpp"]


/*arryname.foreach(fucntion-->"callback function hai" (kuch bhi likh do item/val) 
 {
    consloe.log(val/item )

    //it print array
 }

)
*/




// coding.forEach( function (val){
//     console.log(val);
// } )


//another way(arrow function)

// coding.forEach( (item) => {
//     console.log(item);
// } )


//another way (phele function bna diya pir call back kr diya )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)




// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


//example of  [{},{},{}]  array of objects ko kese iterate kre 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )