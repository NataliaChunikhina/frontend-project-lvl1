import readlineSync from 'readline-sync';
import goChecking, { randomize } from './common.js';

const IsEven = (n) => (!(n % 2) ? 'yes' : 'no');
const taskforGameBrainEven = (userName) => {
  let count = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count > 0) {
    const num = randomize(1, 100);
    console.log(`Question: ${String(num)}`);
    const AnswerUser = readlineSync.question('Your answer: ');
    const evenNum = IsEven(num);
    count = goChecking(userName, AnswerUser, evenNum, count);
  }
};
export default taskforGameBrainEven;
