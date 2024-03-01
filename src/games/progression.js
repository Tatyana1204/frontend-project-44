#!/usr/bin/env node
import playGame from '../index.js';
import askQuestion from '../helpers/helpers.js';

const TASK = 'What number is missing in the progression?';

const createRandomProgression = () => {
  const randomIter = 5 + Math.floor(Math.random() * 5);
  let num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 30 + 1);
  const progression = [];

  for (let iter = 0; iter <= randomIter; iter += 1) {
    progression.push(num1);
    num1 += num2;
  }

  return progression;
};

const createProgressionTask = () => {
  const progression = createRandomProgression();
  const randomProgressionIndex = Math.floor(Math.random() * progression.length);
  const answer = String(progression[randomProgressionIndex]);

  // Hide the correct answer from the progression and display the progression correctly
  progression[randomProgressionIndex] = '..';
  const expression = progression.join(' ');

  return {
    expression,
    answer,
  };
};

const searchElementProgression = () => {
  const { expression, answer } = createProgressionTask();
  const userAnswer = askQuestion(expression);
  return {
    answer,
    userAnswer,
  };
};
export default () => playGame(searchElementProgression, TASK);
