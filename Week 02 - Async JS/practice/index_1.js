// function setTimeoutPromisified(ms) {
//     return new promise(resolve => setTimeout(resolve,ms));
// }

// function callback() {
//     console.log("3 seconds have been passed");
// }

// setTimeoutPromisified(3000).then(callback)//using the promise classified approach 

// setTimeout(callback,3000);//using callback function 


// function waitfor3s(resolve) {
//     setTimeout(resolve,3000)
// }


// function main() {
//     console.log("main is called")
// }

// waitfor3s(main);




function setTimeoutPromisified(time) {
    return new Promise(function(){
        setTimeout(resolve , time);
    })
}
function callback() {
    console.log("time has been passed")
}
const p = setTimeoutPromisified(5000)
p.then(callback);
