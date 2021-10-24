import readlineSync from 'readline-sync';

const goWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const executeGameStep = (gameStep) => {
  const [question, result] = gameStep();
  console.log(question);

  const answerUser = readlineSync.question('Your answer: ');
  let answer = answerUser;
  if (typeof result === 'number') answer = Number(answerUser);

  if (answer === result) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.`);
  return false;
};

const startGame = (game) => {
  const userName = goWelcome();

  const [gameDescr, gameStep] = game();
  console.log(gameDescr);

  let count = 3;
  while (count > 0) {
    const isOk = executeGameStep(gameStep);
    if (isOk) {
      count -= 1;
      if (count === 0) console.log(`Congratulations, ${userName}!`);
    } else {
      count = 0;
      console.log(`Let's try again, ${userName}!`);
    }
  }
};

export default startGame;
