// import chalk from 'chalk';
// console.log(chalk.blue('Hello, world!'));
// console.log(chalk.red.bold('Error: Something went wrong!'));
// console.log(chalk.green.underline("this is a success message"));

import { Command } from "commander";
import fs from "fs";

const program = new Command();

program
    .argument("<file>", "path of the file") // creates the cli prgram with the argument <file> which is the path of the file
    .action((file) => {
        const data = fs.readFileSync(file, "utf-8");

        const words = data.trim().split(/\s+/);

        console.log(`You have ${words.length} words in this file`);
    });

program.parse();