import goChecking, { randomize } from './common.js';

const isEven = (n) => (!(n % 2) ? 'yes' : 'no');

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return (n > 1) ? 'yes' : 'no';
};

const taskforGameBrainEvenPrime = (userName, gameType) => {
  let count = 3;
  console.log(`Answer "yes" if the number is ${gameType}, otherwise answer "no".`);
  while (count > 0) {
    const num = randomize(1, 100);
    console.log(`Question: ${String(num)}`);
    let result;
    switch (gameType) {
      case 'even':
        result = isEven(num);
        break;
      case 'prime':
        result = isPrime(num);
        break;
      default:
        result = null;
        break;
    }
    count = goChecking(userName, result, count);
  }
};
export default taskforGameBrainEvenPrime;
