import chalk from "chalk";
import inquirer from "inquirer";
import { createSpinner } from 'nanospinner';

// Choose animal from the list
async function chooseAnimal() {
    const ans = await inquirer.prompt({
        name: 'choose_animal',
        type: 'list',
        message: 'Choose your coding beast!',
        choices: [
            'cat',
            'dog',
            'duck',
            'rock',
        ],
    });
    return ans.choose_animal;
}

// Starting Introduction
async function startApp() {
    console.clear();
    console.log("Welcome to the" , chalk.blue("Animal Farm!"), "\n");
    console.log("Decode your code", chalk.green("better"), "with your friendly beast!\n");
    console.log(chalk.yellow("Choose"), "your animal to start the game!\n");
}

// Create Spinner
async function Spinner() {
    const spinner0 = createSpinner('Initializing your animal...').start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    spinner0.success();
}

// Game Logic
async function actualGame() {
    const userChoice = await chooseAnimal();
    console.log(`You chose: ${userChoice}`);
    while (true) {
        if (userChoice === 'cat') {
            console.log(chalk.bgRed('You have chosen the cat!'));
            await Spinner();
            while (true) {
                const meowList = ['meow', 'meow meow', 'meow!', 'MEOW!!!', 'meow meow! MEOW MEOW! YOU DUMB!!'];
                const meowRand = Math.floor(Math.random() * meowList.length);
                const { user_doubt } = await inquirer.prompt({
                    name: 'user_doubt',
                    type: 'input',
                    message: 'Meow your doubt!',
                });
                console.log(chalk.blue(meowList[meowRand]));
            }
        } else if (userChoice === 'dog') {
            console.log(chalk.bgGreen('You have chosen the dog!'));
            await Spinner();
            while (true) {
                const barkList = ['bark', 'bark bark', 'bark!', 'BARK!!!', 'bark bark! BARK BARK! YOU DUMB!!'];
                const barkRand = Math.floor(Math.random() * barkList.length);
                const { user_doubt } = await inquirer.prompt({
                    name: 'user_doubt',
                    type: 'input',
                    message: 'Bark your doubt!',
                });
                console.log(chalk.yellow(barkList[barkRand]));
            }
        } else if (userChoice === 'duck') {
            console.log(chalk.bgWhite('You have chosen the duck!'));
            await Spinner();
            while (true) {
                const quackList = ['quack', 'quack quack', 'quack!', 'QUACK!!!', 'quack quack! QUACK QUACK! YOU DUMB!!'];
                const quackRand = Math.floor(Math.random() * quackList.length);
                const { user_doubt } = await inquirer.prompt({
                    name: 'user_doubt',
                    type: 'input',
                    message: 'Quack your doubt!',
                });
                console.log(chalk.red(quackList[quackRand]));
            }
        } else if (userChoice === 'rock') {
            console.log(chalk.bgWhite('You have chosen the rock!'));
            await Spinner();
            while (true) {
                const rockList = ['rock', 'rock rock', 'rock!', 'ROCK!!!', 'rock rock! ROCK ROCK! YOU DUMB!!'];
                const rockRand = Math.floor(Math.random() * rockList.length);
                const { user_doubt } = await inquirer.prompt({
                    name: 'user_doubt',
                    type: 'input',
                    message: 'Rock your doubt!',
                });
                console.log(chalk.green(rockList[rockRand]));
            }
        }
    }
}

// Starting the Game
await startApp();
await actualGame();