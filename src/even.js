import readlineSync from 'readline-sync';
import getUserName from './cli.js';

console.log("Welcome to the Brain Games!");
let user = getUserName();

// Вынесли генерацию числа и ответ в отдельную функцию, которая возвращает объект с числом и правильным ответом
const createRandomNumber = () => {
    const number = Math.floor(Math.random() * 101);
    const answer = (number % 2 === 0) ? 'yes' : 'no';

    return {
        number,
        answer
    }
}
const isEven = () => {
    let userAnswer = '';
    // Я бы количество итераций вынес в аргумент функции, а тут бы написал let iter = iterCount. Так функция была бы более переиспользуемая
    let iter = 3;
    let isGameOver = false;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (!isGameOver && iter > 0) {
        // Юзаем деструктуризацию объекта, когда мы можем сразу достать из объекта хранящиеся там ключи. Это удобно, но, возможно, ты еще с этим не знакома
        const { number, answer } = createRandomNumber();

        console.log('Question: ' + number);

        userAnswer = readlineSync.question('Your answer: ');

        // Тут приводим ответ юзера к нижнему регистру, потому что YeS или YES тоже должно быть верным ответом, если ты сравниваешь с каким-то словом
        if (userAnswer.toLowerCase() === answer) {
            console.log("Correct!");

            iter--;
        } else {
            const gameOverMessage = `"${userAnswer.toLowerCase()}" is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${user})`;

            console.log(gameOverMessage);

            isGameOver = false;
            return isGameOver;
        }
    }
    console.log("Congratulations, " + user);
};

export default isEven;
