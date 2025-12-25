const customers = {};

// if (customers) {
//   console.log("empty");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

// Object.keys(emptyObj).length

// object.keys returns array and we check for the length of an array
// if arrays length is 0 then we can say that tis is an empty arrays

// if (Object.keys(emptyObj).length == 0) {
//   console.log("Empty object value");
// }



// Nullish Coalescing Operator (??): null undefined

// thisk operator checks the null and undefined return values 
// if they are then after ?? we can assign the next values for this 

let val1 ;

val1 = null ?? 10 // here this check if they null then val1 assign 10 to val1 

val2 = undefined ?? 20
console.log(val1); 



// ternary operators 


// this use fro short notation of if- else statement 

// condition ? true : false 

const num1 =  10 

num1==2 ? console.log(" equal to 2 ") : console.log("not equal  2 ");


