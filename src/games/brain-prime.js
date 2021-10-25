import { randomize } from '../utils.js';
import startGame from '../index.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return (n > 1) ? 'yes' : 'no';
};

const gameDescr = 'Answer "yes" if the number is prime, otherwise answer "no".';

const generateGameData = () => {
  const num = randomize(1, 100);
  const question = `${String(num)}`;
  const result = isPrime(num);
  return [question, result];
};

export default () => startGame(gameDescr, generateGameData);
