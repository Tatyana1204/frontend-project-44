#!/usr/bin/env node
import playGame from '../index.js';
import askQuestion from '../helpers/helpers.js';

const OPERATORS = ['*', '-', '+'];
const TASK = 'What is the result of the expression?'

const createRandomExpression = () => {
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);
    const randomIndex = Math.floor(Math.random() * OPERATORS.length);
    const expression = num1 + OPERATORS[randomIndex] + num2;
    const answer = String(eval(expression));
    return {
        expression,
        answer
    }
};

const calculation = () => {
    const { expression, answer } = createRandomExpression();
    const userAnswer = askQuestion(expression);
    return {
        answer,
        userAnswer
    }
};

export default () => playGame(calculation, TASK);
