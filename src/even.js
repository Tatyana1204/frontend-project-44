import readlineSync from 'readline-sync'; 
import getUserName from './cli.js';
console.log("Welcome to the Brain Games!");
let user = getUserName();
const isEven = () => {
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let result = '';
let answer = '';
let iter = 0;
let correct = 'Correct!';
while((correct === 'Correct!') && (iter < 3)){
    let number = Math.floor(Math.random() * 101); 
    console.log('Question: '+ number);
    answer = readlineSync.question('Your answer: ');
    result = (number %2 === 0)? 'yes':'no';
    if(answer === result){
        console.log(correct);
            iter++;
        }
    else {
        correct = false;
        console.log(' "'+ answer + '" '+ 'is wrong answer ;(. Correct answer was' + ' "'  + result + '". ' + "Let's try again, " + user);
        }
}
if(iter === 3){
    console.log("Congratulations, " + user);
}
};

export default isEven;
