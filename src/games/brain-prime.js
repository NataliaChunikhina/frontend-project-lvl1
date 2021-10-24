import { randomize } from './common.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return (n > 1) ? 'yes' : 'no';
};
const taskforGameBrainPrime = () => {
  const gameDescr = 'Answer "yes" if the number is prime, otherwise answer "no".';
  const gameStep = () => {
    const num = randomize(1, 100);
    const question = `Question: ${String(num)}`;
    const result = isPrime(num);
    return [question, result];
  };

  return [gameDescr, gameStep];
};

export default taskforGameBrainPrime;
