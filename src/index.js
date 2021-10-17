import readlineSync from 'readline-sync';

function randomize(min,max) {
  return min + Math.floor(Math.random()*(max - min + 1));
}

const AnswerStr = (QuestionStr) => readlineSync.question(QuestionStr);

const goWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = AnswerStr('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const goChecking = (userName, Answer, Result, count) => {
  let countNew = count;
  if (Answer === Result) {
    console.log('Correct!');
    countNew -= 1;
    if (countNew === 0) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    countNew = 0;
    console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${Result}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
  return countNew;
};
const even = (n) => (!(n % 2) ? 'yes' : 'no');
const oper = () => {
  const n = randomize(1, 3);
  switch (n) {
    case 1: return '*';
    case 2: return '+';
    case 3: return '-';
    default: return null;
  }
};
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
const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return (n > 1) ? 'yes' : 'no';
};
const taskforGame1 = (userName) => {
  let count = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count > 0) {
    const num = randomize(1, 100);
    console.log(`Question: ${String(num)}`);
    const AnswerUser = AnswerStr('Your answer: ');
    const evenNum = even(num);
    count = goChecking(userName, AnswerUser, evenNum, count);
  }
};
const taskforGame2 = (userName) => {
  let count = 3;
  console.log('What is the result of the expression?');
  while (count > 0) {
    const num1 = randomize(1, 100);
    const num2 = randomize(1, 100);
    const operStr = oper();
    console.log(`Question: ${String(num1)} ${operStr} ${String(num2)}`);
    const AnswerUser = AnswerStr('Your answer: ');
    const result = calculate(num1, num2, operStr);
    if (Number.isNaN(Number(AnswerUser))) {
      count = goChecking(userName, AnswerUser, result, count);
    } else {
      count = goChecking(userName, Number(AnswerUser), result, count);
    }
  }
};
const taskforGame3 = (userName) => {
  let count = 3;
  console.log('Find the greatest common divisor of given numbers.');
  while (count > 0) {
    const num1 = randomize(1, 100);
    const num2 = randomize(1, 100);
    console.log(`Question: ${String(num1)} ${String(num2)}`);
    const AnswerUser = AnswerStr('Your answer: ');
    const result = gcd(num1, num2);
    if (Number.isNaN(Number(AnswerUser))) {
      count = goChecking(userName, AnswerUser, result, count);
    } else {
      count = goChecking(userName, Number(AnswerUser), result, count);
    }
  }
};
const taskforGame4 = (userName) => {
  let count = 3;
  console.log('What number is missing in the progression?');
  while (count > 0) {
    const arrNum = [];
    const step = randomize(1, 10);
    const pos = randomize(0, 9);
    arrNum.push(randomize(1, 100));
    for (let i = 1; i < 10; i += 1) {
      arrNum.push(arrNum[i - 1] + step);
    }
    const result = arrNum[pos];
    const ProgressionStr = ` ${arrNum.join(' ')} `;
    const ProgressionStrNew = ProgressionStr.replace(` ${String(result)} `, ' .. ');
    console.log(`Question: ${ProgressionStrNew.trim()}`);
    const AnswerUser = AnswerStr('Your answer: ');
    if (Number.isNaN(Number(AnswerUser))) {
      count = goChecking(userName, AnswerUser, result, count);
    } else {
      count = goChecking(userName, Number(AnswerUser), result, count);
    }
  }
};
const taskforGame5 = (userName) => {
  let count = 3;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (count > 0) {
    const num = randomize(1, 100);
    console.log(`Question: ${String(num)}`);
    const AnswerUser = AnswerStr('Your answer: ');
    const result = isPrime(num);
    count = goChecking(userName, AnswerUser, result, count);
  }
};

const startGame = (numGame) => {
  const userName = goWelcome();
  switch (numGame) {
    case 1:
      taskforGame1(userName);
      break;
    case 2:
      taskforGame2(userName);
      break;
    case 3:
      taskforGame3(userName);
      break;
    case 4:
      taskforGame4(userName);
      break;
    case 5:
      taskforGame5(userName);
      break;
    default:
  }
};

export default startGame;
