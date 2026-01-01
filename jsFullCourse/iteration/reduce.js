const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)


// console.log(myTotal);


const myCart = [
    {
        product : "productOne", 
        price : 1999
    },
    {
        product : "producTwo", 
        price : 3999
    },
    {
        product : "productTHreee", 
        price : 7099
    },
    {
        product : "productFour", 
        price : 5999
    },
    {
        product : "productFive", 
        price : 22999
    },
]

const totalPrice = myCart.reduce( ( acc, currVal ) =>{
    return acc + currVal.price 
} , 0)


console.log(`total prie is ${totalPrice}`);
