import readlineSync from 'readline-sync';

const convertToStr = (value) => {
  switch (typeof value) {
    case 'boolean':
      return value ? 'yes' : 'no';
    case 'number':
      return String(value);
    case 'string':
      return value;
    default:
      return null;
  }
};

const startGame = (gameDescr, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescr);

  const count = 3;

  for (let numStep = 1; numStep <= count; numStep += 1) {
    const [question, result] = generateGameData();

    const resultStr = convertToStr(result);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== resultStr) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${resultStr}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
