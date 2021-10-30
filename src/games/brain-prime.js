import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return (num > 1);
};

const generateGameData = () => {
  const num = randomize(1, 100);
  return [String(num), isPrime(num) ? 'yes' : 'no'];
};

export default () => startGame(gameDescr, generateGameData);
