import readlineSync from 'readline-sync';

const startGame = (gameDescr, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescr);

  let count = 3;
  let gameRes = true;
  while (count > 0) {
    const [question, result] = generateGameData();
    const resultStr = result.toString();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== resultStr) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      gameRes = false;
      break;
    }

    console.log('Correct!');
    count -= 1;
  }

  if (gameRes) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default startGame;
