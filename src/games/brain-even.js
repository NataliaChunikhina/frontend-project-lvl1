import { randomize } from './common.js';

const isEven = (n) => (!(n % 2) ? 'yes' : 'no');

const taskforGameBrainEven = () => {
  const descr = 'Answer "yes" if the number is even, otherwise answer "no".';
  const step = () => {
    const num = randomize(1, 100);
    const question = `Question: ${String(num)}`;
    const result = isEven(num);
    return [question, result];
  }
  return [descr, step];
};
export default taskforGameBrainEven;
