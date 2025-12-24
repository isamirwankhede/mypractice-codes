// let a = 1
// const b = 2
// var c = 3

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// we can access var from anywhere there is not working of scope when we use the var
// so keeep ignore from var keyword

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Samir";
  function two() {
    const age = 20;
    console.log(age);
  }
  // console.log(age);

  console.log(username);

  two();
}

// one();
console.log(addOne(5));


function addOne(num1) {
  return num1+ 1
}



console.log(addTwo(5));
const addTwo= function (num1) {
  return num1+2
}

