import { randomize } from '../utils.js';
import startGame from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const gameDescr = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const num1 = randomize(1, 100);
  const num2 = randomize(1, 100);
  const question = `Question: ${String(num1)} ${String(num2)}`;
  const result = gcd(num1, num2);
  return [question, result];
};

export default () => startGame(gameDescr, generateGameData);
