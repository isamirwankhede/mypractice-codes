let myDate = new Date()

// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleString());


// let createDate = new Date(2026 , 0 , 1 , 5 , 6);
// console.log(createDate);
// // console.log(createDate.toDateString());
// console.log(createDate.toLocaleString());


// conversion of date into ms we can use for comparing
// let myCreateDate =  new Date( "01-14-2026")
// console.log(myCreateDate.getTime());

// let dateNow =  Date.now()

// console.log(dateNow);


// conversion into seconds from ms
// console.log(Date.now() / 1000);
 
// console.log(Math.floor(Date.now()/ 1000));

let newDate = new Date();

newDate.toLocaleString('default', {
  weekday: 'long'
});

console.log(newDate);

