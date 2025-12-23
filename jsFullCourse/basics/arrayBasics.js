// const  myArr = [1 ,2 , 3 ,4 , 5]

// // console.log(myArr);

// // // add at the end of an array
// // myArr.push(6)
// // myArr.push(7)
// // console.log(myArr);

// // //delete at the end
// // myArr.pop()
// // console.log(myArr);

// // // at at the begining
// // myArr.unshift(9)
// // console.log(myArr);

// // //reove from stars ar the first
// // myArr.shift(9)
// // console.log(myArr);

// // // return array in thr form of string
// // let newArr = myArr.join()
// // console.log(newArr);

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// // returns a part of an array
// // no chnage in the reference array
// console.log(myn1);
// console.log("B ", myArr);

// // returns a part of an array with the last range
// //  chnage in the reference array ( modified in the given array )
// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// pushes but inside array another array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// // const allHeros = marvel_heros.concat(dc_heros)
// // console.log(allHeros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const allNewHeros = [...marvel_heros , ...dc_heros]
// console.log(allNewHeros);

// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// const anotherArray = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
// const newAnotherArray = anotherArray.flat(Infinity);

// console.log(newAnotherArray);   

console.log(Array.isArray("Samir")); 
// retrun in boolean format
console.log(Array.from("Samir")); 

let score1 = 100 ;
let score2 = 200 ;
let score3 = 300 ;

console.log(Array.of(score1 , score2 , score3));



