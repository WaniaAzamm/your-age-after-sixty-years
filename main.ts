import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt({
name: "age",
type: "number",
message: "Enter your age:"
 });
console.log(chalk.yellow("inshallah, in " + (60 - answer.age) + " you will be 60 years old"));

 
