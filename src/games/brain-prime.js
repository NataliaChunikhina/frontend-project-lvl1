import goChecking, { randomize } from './common.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return (n > 1) ? 'yes' : 'no';
};
const taskforGameBrainPrime = (userName) => {
  let count = 3;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (count > 0) {
    const num = randomize(1, 100);
    console.log(`Question: ${String(num)}`);
    count = goChecking(userName, isPrime(num), count);
  }
};

export default taskforGameBrainPrime;
