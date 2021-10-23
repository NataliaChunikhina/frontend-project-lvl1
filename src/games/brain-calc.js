impor:wt goChecking, { randomize } from './common.js';

const calculate = (num1, num2, operStr) => {
  let result = 0;
  if (operStr === '+') {
    result = num1 + num2;
  }
  if (operStr === '-') {
    result = num1 - num2;
  }
  if (operStr === '*') {
    result = num1 * num2;
  }
  return result;
};

const oper = () => {
  const n = randomize(1, 3);
  switch (n) {
    case 1: return '*';
    case 2: return '+';
    case 3: return '-';
    default: return null;
  }
};
const taskforGameBrainCalc = (userName) => {
  let count = 3;
  console.log('What is the result of the expression?');
  while (count > 0) {
    const num1 = randomize(1, 100);
    const num2 = randomize(1, 100);
    const operStr = oper();
    console.log(`Question: ${String(num1)} ${operStr} ${String(num2)}`);
    const result = calculate(num1, num2, operStr);
    count = goChecking(userName, result, count);
  }
};

export default taskforGameBrainCalc;
