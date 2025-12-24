// Immediately Invoked Function Expressions (IIFE)

// we use this iife beacause we prevent the system from the global pollution 
// hum use isiliye krte he kyu ki hum gloabal polllution se bachaane ke liye 


// named iife 
(function addNumbers(){
    console.log(`DB connected`);
    
})();

// console.log(addNumbers(2 , 3))


// unnnamed iife 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('SAM')