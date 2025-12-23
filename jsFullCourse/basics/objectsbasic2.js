const regularUser = {
  fullName: {
    userFullName: {
      firstName: "Samir",
      lastName: "Wankhede",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };
const obj4 = { 7: "g", 8: "h" };

// const obj5 = Object.assign({}, obj1, obj2, obj3,  obj4);
const obj5 = {...obj1 , ...obj2  , ...obj3 , ...obj4}

// console.log(obj5);





const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]


// console.log(users[1].email);



const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// return in Array formate}
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// array ke andar array aaygea 
// console.log(Object.entries(tinderUser));

// chcek and return in the boolean fomate
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course  = {
    coursename : "js in code", 
    courseInstructor : "Hitesh"
}

// console.log(course.coursename);

const {courseInstructor : instructor} =  course

console.log(instructor);

