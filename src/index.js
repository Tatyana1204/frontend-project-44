import readlineSync from 'readline-sync'; 
import getUserName from './cli.js';;
const sample = (random, correctAnswer) => {
console.log("Welcome to the Brain Games!");
let user = getUserName()
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let answer = '';
let iter = 3;
let isCorrect = true;
while((isCorrect) && (iter > 0)){
    console.log('Question: '+ random);
    answer = readlineSync.question('Your answer: ');
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

export default sample;
