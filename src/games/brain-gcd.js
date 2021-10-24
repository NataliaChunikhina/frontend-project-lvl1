import { randomize } from './common.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
const taskforGameBrainGdc = () => {
  const gameDescr = 'Find the greatest common divisor of given numbers.';
  const gameStep = () => {
    const num1 = randomize(1, 100);
    const num2 = randomize(1, 100);
    const question = `Question: ${String(num1)} ${String(num2)}`;
    const result = gcd(num1, num2);
    return [question, result];
  };
  return [gameDescr, gameStep];
};

export default taskforGameBrainGdc;
