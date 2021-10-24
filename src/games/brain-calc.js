import { randomize } from './common.js';

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
const taskforGameBrainCalc = (rndMin = 1, rndMax = 100) => {
  const gameDescr = 'What is the result of the expression?';
  const gameStep = () => {
    const num1 = randomize(rndMin, rndMax);
    const num2 = randomize(rndMin, rndMax);
    const operStr = oper();
    const question = `Question: ${String(num1)} ${operStr} ${String(num2)}`;
    const result = calculate(num1, num2, operStr);
    return [question, result];
  };
  return [gameDescr, gameStep];
};

export default taskforGameBrainCalc;
