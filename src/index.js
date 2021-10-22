import readlineSync from 'readline-sync';
import taskforGameBrainEven from './games/brain-even.js';
import taskforGameBrainCalc from './games/brain-calc.js';
import taskforGameBrainGdc from './games/brain-gcd.js';
import taskforGameBrainPrime from './games/brain-prime.js';
import taskforGameBrainProgression from './games/brain-progression.js';

const goWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const startGame = (numGame) => {
  const userName = goWelcome();
  switch (numGame) {
    case 1:
      taskforGameBrainEven(userName);
      break;
    case 2:
      taskforGameBrainCalc(userName);
      break;
    case 3:
      taskforGameBrainGdc(userName);
      break;
    case 4:
      taskforGameBrainProgression(userName);
      break;
    case 5:
      taskforGameBrainPrime(userName);
      break;
    default:
  }
};

export default startGame;
