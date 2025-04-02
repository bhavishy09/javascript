/* 


       ("reduce method")

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10 



*/


const mynums=[1,2,3]

const ans=mynums.reduce(function (acc,curval)
{    console.log(`acc:${acc} and curval:${curval}`)
    return acc+curval

},3)

//imp ** ,comma k baad jo 3 likha h bo intialise value h accumlate ki 

console.log(ans)




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);