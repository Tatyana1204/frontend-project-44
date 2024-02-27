import readlineSync from 'readline-sync'; 
import getUserName from './cli.js';
import sample from './index.js';

console.log("Welcome to the Brain Games!");
let user = getUserName();
const isEven = () => {
const number = Math.floor(Math.random() * 101); 
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let answer = '';
let iter = 3;
let isCorrect = true;
while((isCorrect) && (iter > 0)){
    const number = Math.floor(Math.random() * 101); 
    console.log('Question: '+ number);
    answer = readlineSync.question('Your answer: ');
    const correctAnswer = (number %2 === 0)? 'yes':'no';
    if(answer.toLowerCase() === correctAnswer){
        console.log('Correct!');
            iter--;
        }
    else {
        isCorrect = false;
        const sadMessage = `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${user})`;
        console.log(sadMessage);
        return false;
        }
}
console.log("Congratulations, " + user);
};

export default isEven;
