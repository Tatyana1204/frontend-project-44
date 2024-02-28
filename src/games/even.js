#!/usr/bin/env node
import playGame from '../index.js';
import askQuestion from '../helpers/helpers.js';

const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const createRandomNumber = () => {
    const number = Math.floor(Math.random() * 101 + 1);
    const answer = (number % 2 === 0) ? 'yes' : 'no';
    return {
        number,
        answer
    }
};

const isEven = () => {
    const { number, answer } = createRandomNumber();
    const userAnswer = askQuestion(number);

    return {
        answer,
        userAnswer: userAnswer.toLowerCase()
    }
};

export default () => playGame(isEven, TASK);
