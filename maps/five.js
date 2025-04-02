const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// using map (" automatic values ko return krta h ")  imp("scope m return must ")

//example array ki values ko 10 ++ krk likho 
// const newNums = myNumers.map( (num) => { return num + 10})



/* chaning--> use what you want map filter anything   */


const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);