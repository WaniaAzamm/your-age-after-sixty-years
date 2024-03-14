"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// let answer = await inquirer.prompt({
// name: "age",
// type: "number",
// message: "Enter your age:"
// });
// console.log(chalk.yellow("inshallah, in " + (60 - answer.age) + " you will be 60 years old"));
var answer1 = await inquirer_1.default.prompt({
    name: "username",
    message: "Enter you Name:"
});
var answer2 = await inquirer_1.default.prompt({
    name: "age",
    message: "Enter your Age:"
});
if (answer2.age >= 14) {
    console.log("User need parent permission to joing this website!");
}
else {
    console.log("Welcome ".concat(answer1.username, ", Enjoy at our website"));
}
