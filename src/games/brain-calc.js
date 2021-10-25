import { randomize } from '../utils.js';
import startGame from '../index.js';

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

const gameDescr = 'What is the result of the expression?';

const generateGameData = () => {
  const num1 = randomize(1, 100);
  const num2 = randomize(1, 100);
  const operStr = oper();
  const question = `Question: ${String(num1)} ${operStr} ${String(num2)}`;
  const result = calculate(num1, num2, operStr);
  return [question, result];
};

export default () => startGame(gameDescr, generateGameData);
