#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function num_Guess(){
    const random_number= Math.floor(Math.random() * 100);
    let attempts:number=0;
    while(true) {
        
        let user= await inquirer.prompt({
            name:"Guess", type:"number",
            message:"Guess the Number between 0 and 100",
        validate: (input)=> {
        if(isNaN(input)) {return "Enter Number Only"}
         else if(input <0 || input>100) {return "Just enter b/w 0 to 100"}
         else {return true}
     } })
    
    attempts ++;
    if (user.Guess == random_number) {
    console.log(chalk.greenBright(`Congrats !! you have guessed in ${attempts} attempts`))
     break;
    }

    else if(user.Guess < random_number){
        console.log(chalk.redBright("Increase the Number"))
    }
    else if(user.Guess > random_number){
        console.log(chalk.redBright("Decrease the Number"))
    }
       }

} num_Guess()


