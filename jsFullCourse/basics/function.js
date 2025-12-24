function addNumbers(number1, number2) {
  return number1 + number2;
}
// console.log(addNumbers(5 , 6));

function greetUser(username) {
  return `heyyy ${username} , good morning `;
}

// console.log(greetUser("sam"));
// console.log(greetUser()); // return undefined if nothing give any values

// ... num1  this is knows as the rest operator that returns an array of all the set which are passed by parameter
function calculatePriceCard(val1, val2, ...num1) {
  return num1;
}

// console.log(calculatePriceCard(3 , 4 , 5 , 6 ));

// objets handles in function

const user = {
  username: "Sam",
  price: 199,
};

function printFunction(anyobj) {
  console.log(
    `the username is ${anyobj.username} and price is ${anyobj.price}`
  );
}
// console.log(printFunction(user));
// console.log(printFunction({
//     username: "sam" ,
//     price: 999
// }));

const anyArry = [2, 3, 4, 5, 6];
function printArray(anyArr) {
  console.log(`second number of an array is ${anyArr[1]}`);
}
// printArray(anyArry);
printArray([1 , 2 ,3 ,4 , 5 ,6 ]);
