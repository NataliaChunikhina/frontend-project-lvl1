import { randomize } from './common.js';

const isEven = (n) => (!(n % 2) ? 'yes' : 'no');

const taskforGameBrainEven = () => {
  const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameStep = () => {
    const num = randomize(1, 100);
    const question = `Question: ${String(num)}`;
    const result = isEven(num);
    return [question, result];
  };
  return [gameDescr, gameStep];
};
export default taskforGameBrainEven;
