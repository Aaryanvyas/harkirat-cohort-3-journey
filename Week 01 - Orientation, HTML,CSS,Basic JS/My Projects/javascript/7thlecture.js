// class rectangle{
//     constructor(width,height,color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area(){
//         const area = this.width * this.height;
//         return area;
//     }

//     paint(){
//         console.log(`paint with ${this.color}`)
//     }

// }

// const rect = new rectangle(2,4,'red');
// const area = rect.area;
// console.log(area);
// date class
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

// map class
const map = new Map();
map.set('name' , 'aryan');
map.set('age' , 19);
map.set('city' , 'delhi');

console.log(map.get('name'));
console.log(map.get('age'));
console.log(map.get('city'));

const firstName = map.get('name');
console.log(firstName);