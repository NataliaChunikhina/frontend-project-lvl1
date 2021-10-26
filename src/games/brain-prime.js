import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return (n > 1);
};

const generateGameData = () => {
  const num = randomize(1, 100);
  return [String(num), isPrime(num)];
};

export default () => startGame(gameDescr, generateGameData);
