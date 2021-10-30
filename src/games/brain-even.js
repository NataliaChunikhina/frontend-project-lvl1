import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (!(num % 2));

const generateGameData = () => {
  const num = randomize(1, 100);
  return [String(num), isEven(num) ? 'yes' : 'no'];
};

export default () => startGame(gameDescr, generateGameData);
