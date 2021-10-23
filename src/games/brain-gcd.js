import goChecking, { randomize } from './common.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
const taskforGameBrainGdc = (userName) => {
  let count = 3;
  console.log('Find the greatest common divisor of given numbers.');
  while (count > 0) {
    const num1 = randomize(1, 100);
    const num2 = randomize(1, 100);
    console.log(`Question: ${String(num1)} ${String(num2)}`);

    count = goChecking(userName, gcd(num1, num2), count);
  }
};

export default taskforGameBrainGdc;
