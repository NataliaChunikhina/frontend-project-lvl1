import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'What number is missing in the progression?';

const generateGameData = () => {
  const arrNum = [];
  const step = randomize(1, 10);
  const pos = randomize(0, 9);
  arrNum.push(randomize(1, 100));
  for (let i = 1; i < 10; i += 1) {
    arrNum.push(arrNum[i - 1] + step);
  }
  const result = arrNum[pos];
  const ProgressionStr = ` ${arrNum.join(' ')} `;
  const ProgressionStrNew = ProgressionStr.replace(` ${String(result)} `, ' .. ');
  const question = `Question: ${ProgressionStrNew.trim()}`;
  return [question, result];
};

export default () => startGame(gameDescr, generateGameData);
