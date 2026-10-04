// map, filter , arrow fns

// function sum( a,b ){
//     return a + b;
// }


// const sum = ( a,b) =>{
//     return a + b;
// }

// app.get('/sum', (req,res) => {
// });


// app.get('/',function(req,res){
//     res.send('Hello, World!');
// });

// map and filter

//given an arrya, give me back an new array in which every value is multiplied by 2 
//[1,2,3,4,5] => [2,4,6,8,10]

// const input = [1,2,3,4,5];

// const newArray = [];
// for(let i = 0; i < input.length; i++){
//     newArray.push(input[i] * 2);
// }

// console.log(newArray);

//using map 
// function transform(i){
//     return i * 2;
// }

// const input = [1,2,3,4,5];

// const newArray = input.map(function(i){
//     return i * 2;
// });

// console.log(newArray);

//filter
//what if i tell you, given an input array give me all the even numbers from it

const arr = [1,2,3,4,5,6,7,8,9,10];

const newArray = arr.map(function(i)    {
    return i % 2 === 0;
});
console.log(newArray);
const evenNumbers = arr.filter(function(i){
    return i % 2 === 0;
});
console.log(evenNumbers);