#!/usr/bin/env node
import playGame from './index.js';
import readlineSync from 'readline-sync'; 

const createRandomCalculation = () => {
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);
    const operations  = ['*', '-', '+'];
    var randomIndex = Math.floor(Math.random() * operations.length);
    const expression = num1 + operations[randomIndex] + num2;
    const answer = String(eval(expression));
    const task = 'What is the result of the expression?'
    console.log(task);
    console.log('Question: ' + expression);
    const userAnswer = readlineSync.question('Your answer: ');
    return {
        answer,
        userAnswer
    }
};

playGame(createRandomCalculation);

export default createRandomCalculation;
