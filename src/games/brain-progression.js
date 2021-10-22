import readlineSync from 'readline-sync';
import goChecking, { randomize } from './common.js';

const taskforGameBrainProgression = (userName) => {
  let count = 3;
  console.log('What number is missing in the progression?');
  while (count > 0) {
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
    console.log(`Question: ${ProgressionStrNew.trim()}`);
    const AnswerUser = readlineSync.question('Your answer: ');
    if (Number.isNaN(Number(AnswerUser))) {
      count = goChecking(userName, AnswerUser, result, count);
    } else {
      count = goChecking(userName, Number(AnswerUser), result, count);
    }
  }
};

export default taskforGameBrainProgression;
