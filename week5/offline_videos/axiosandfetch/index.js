//axios and fetch

const axios = require("axios");
 async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    method:"post"
    const json = await response.json();
    console.log(json.todos.length);
}



 async function main(){
    const response = await axios.("https://sum-server.100xdevs.com/todos")
   
    console.log(response.data.todos.length);
}

main();