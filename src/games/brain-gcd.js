import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generateGameData = () => {
  const num1 = randomize(1, 100);
  const num2 = randomize(1, 100);
  const question = `${num1} ${num2}`;
  const result = String(gcd(num1, num2));
  return [question, result];
};

export default () => startGame(gameDescr, generateGameData);
