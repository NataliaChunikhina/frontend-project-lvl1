import { randomize } from './common.js';

const taskforGameBrainProgression = () => {
  const gameDescr = 'What number is missing in the progression?';
  const gameStep = () => {
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
  return [gameDescr, gameStep];
};

export default taskforGameBrainProgression;
