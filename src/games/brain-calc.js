import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'What is the result of the expression?';

const operations = ['*', '+', '-'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
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

const generateGameData = () => {
  const num1 = randomize(1, 100);
  const num2 = randomize(1, 100);
  const operation = operations[randomize(0, 2)];
  const question = `${num1} ${operation} ${num2}`;
  const result = String(calculate(num1, num2, operation));
  return [question, result];
};

export default () => startGame(gameDescr, generateGameData);
