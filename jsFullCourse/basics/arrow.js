// function chai() {
//     let username = "SAM"
//     console.log(this);
    
// }
 
// chai()



// return kucch na kucch aata he


// but whenever used tis into this there is nothing return waha pe return bs {} empty objects atta he 
// const chai =  () => {
//     let username = "SAM"
//     console.log(this);
// }

// chai()


// const addTwo = (num1 , num2 )=>{
//     return num1 + num2 
// }


// const addTwo = (num1 , num2 ) => (num1 + num2)
// console.log(addTwo( 5 ,6 ));

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(5 , 6));
