import { randomize } from '../utils.js';
import startGame from '../index.js';

const isEven = (n) => (!(n % 2) ? 'yes' : 'no');

const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const num = randomize(1, 100);
  return [`${num}`, isEven(num)];
};

export default () => startGame(gameDescr, generateGameData);
