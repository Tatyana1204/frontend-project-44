import readlineSync from 'readline-sync'; 
const getUserName = () =>{
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
    return userName;
}
export default getUserName;
