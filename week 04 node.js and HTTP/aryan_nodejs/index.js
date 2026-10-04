// const path = require("path");
// console.log(__dirname);
// console.log(path.join(__dirname, "index.mjs"));
 const {Command} = require("commander");
const fs = require("fs");

const program = new Command();

program
    .argument("<file>", "path of the file") // creates the cli prgram with the argument <file> which is the path of the file
    .action((file) => {
        const data = fs.readFileSync(file, "utf-8");
        const words = data.trim().split(/\s+/);
        console.log(`You have ${words.length} words in this file`);
    });

program.parse();

