import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => (!(n % 2));

const generateGameData = () => {
  const num = randomize(1, 100);
  return [String(num), isEven(num)];
};

export default () => startGame(gameDescr, generateGameData);
