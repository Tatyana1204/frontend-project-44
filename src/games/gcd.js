#!/usr/bin/env node
import playGame from '../index.js';
import askQuestion from '../helpers/helpers.js';

const TASK = 'Find the greatest common divisor of given numbers.';

function correctAnswerGreatestCommonDivisor(num1, num2) {
  if (!num2) {
    return String(num1);
  }
  return correctAnswerGreatestCommonDivisor(num2, num1 % num2);
}

const createRandomGreatestCommonDivisor = () => {
  const num1 = Math.floor(Math.random() * 101 + 1);
  const num2 = Math.floor(Math.random() * 101 + 1);
  const expression = `${num1} ${num2}`;
  const answer = correctAnswerGreatestCommonDivisor(num1, num2);
  return {
    expression,
    answer,
  };
};

const searchGreatestCommonDivisor = () => {
  const { expression, answer } = createRandomGreatestCommonDivisor();
  const userAnswer = askQuestion(expression);
  return {
    answer,
    userAnswer,
  };
};
export default () => playGame(searchGreatestCommonDivisor, TASK);
