#!/usr/bin/env node
import playGame from './index.js';
import readlineSync from 'readline-sync'; 

const createRandomNumber = () => {
    const expression = Math.floor(Math.random() * 101);
    const answer = (expression % 2 === 0) ? 'yes' : 'no';
    const task = 'Answer "yes" if the number is even, otherwise answer "no".';
    console.log(task);
    console.log('Question: ' + expression);
    const userAnswer = readlineSync.question('Your answer: ');
    return {
        answer,
        userAnswer
    }
};
playGame(createRandomNumber);

export default createRandomNumber;
