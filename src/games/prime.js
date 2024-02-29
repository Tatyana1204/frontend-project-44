#!/usr/bin/env node
import playGame from '../index.js';
import askQuestion from '../helpers/helpers.js';

const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {

    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;

  }

const createRandomNumber = () => {

    const number = Math.floor(Math.random() * 101 + 1);
    const answer = isPrime(number) ? 'yes' : 'no';
    
    return {
        number,
        answer
    }
};

const createPrimeTask = () => {

    const { number, answer } = createRandomNumber();
    const userAnswer = askQuestion(number);

    return {
        answer,
        userAnswer: userAnswer.toLowerCase()
    }
};

export default () => playGame(createPrimeTask, TASK);