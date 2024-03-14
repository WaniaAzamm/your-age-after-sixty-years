import inquirer from "inquirer";
import chalk from "chalk";
// let answer = await inquirer.prompt({
// name: "age",
// type: "number",
// message: "Enter your age:"
// });
// console.log(chalk.yellow("inshallah, in " + (60 - answer.age) + " you will be 60 years old"));
 let answer1 = await inquirer.prompt({
    name:"username",
    message:"Enter you Name:"
 });
 let answer2 = await inquirer.prompt({
   name:"age",
   message:"Enter your Age:" 
 })
 if(answer2.age >=14){
    console.log("User need parent permission to joing this website!");
 }else{
    console.log(`Welcome ${answer1.username}, Enjoy at our website`);
 }

