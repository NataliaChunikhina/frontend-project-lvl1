import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'What is the result of the expression?';

const calculate = (num1, num2, operStr) => {
  switch (operStr) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return null;
  }
};

const oper = () => {
  const operArr = ['*', '+', '-'];
  const n = randomize(0, 2);
  return operArr[n];
};

const generateGameData = () => {
  const num1 = randomize(1, 100);
  const num2 = randomize(1, 100);
  const operStr = oper();
  const question = `${num1} ${operStr} ${num2}`;
  const result = calculate(num1, num2, operStr);
  return [question, result];
};

export default () => startGame(gameDescr, generateGameData);
