import readlineSync from 'readline-sync';

const goWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const executeGameStep = (gameStep) => {
  let count = 3;
  let isOk = true;
  while (count > 0) {
    const [question, result] = gameStep();
    console.log(question);

    const answerUser = readlineSync.question('Your answer: ');
    let answer = answerUser;
    if (typeof result === 'number') answer = Number(answerUser);

    if (answer === result) {
      console.log('Correct!');
      count -= 1;
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.`);
      count = 0;
      isOk = false;
    }
  }

  return isOk;
};

const startGame = (game) => {
  const userName = goWelcome();

  if (!game) return;

  const [gameDescr, gameStep] = game();

  console.log(gameDescr);

  const isOk = executeGameStep(gameStep);
  if (isOk) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default startGame;
