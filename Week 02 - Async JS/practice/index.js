// const fs = require("fs");

// function print( err, data){
//     console.log(data);
// }

// fs.readFile("a.txt","utf-8", print);

// fs.readFile("b.txt" , "utf-8" , print);

// console.log("hello");


function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");