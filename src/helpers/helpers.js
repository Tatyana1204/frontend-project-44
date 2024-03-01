#!/usr/bin/env node
import readlineSync from 'readline-sync';

const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
export default askQuestion;
