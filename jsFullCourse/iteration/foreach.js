// const myNum = [1 ,2, 3 , 4 ,5 ]

// myNum.forEach( (num)=> {
//     console.log(num);
    
// });


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((el)=>{
    // console.log(`Coding name ${el.languageName} and file name is ${el.languageFileName}`);
    
})


const myNum = [1 ,2 , 3 ,4 ,5 ]

    // console.log([num]);
    


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

const numbers = [ 1 ,2 , 3 ,4 ,5];
for(const key in numbers) {
    
    console.log([key]);
    
}
