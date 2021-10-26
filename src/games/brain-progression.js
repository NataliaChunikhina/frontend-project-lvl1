import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'What number is missing in the progression?';

const generateProgression = () => {
  const arrNum = [];
  const step = randomize(1, 10);
  const pos = randomize(0, 9);
  const base = randomize(1, 100);
  arrNum.push(String(base));
  for (let i = 1; i < 10; i += 1) {
    if (i === pos) {
      arrNum.push('..');
    } else {
      arrNum.push(String(base + step * i));
    }
  }
  return [arrNum.join(' '), base + step * pos];
};

const generateGameData = () => generateProgression();

export default () => startGame(gameDescr, generateGameData);
