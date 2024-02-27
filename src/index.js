#!/usr/bin/env node
import getUserName from './cli.js';

console.log("Welcome to the Brain Games!");
let user = getUserName();

const playGame = (startGame,task) => {
    let iter = 3;
    let isGameOver = false;
    console.log(task);

    while (!isGameOver && iter > 0) {
        
        const {answer, userAnswer} = startGame();
        if (userAnswer === answer) {
            console.log("Correct!");
            iter--;

        } else {
            const gameOverMessage = `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${user})`;

            console.log(gameOverMessage);

            return isGameOver;
        }
    }
    console.log("Congratulations, " + user);
};

export default playGame;

