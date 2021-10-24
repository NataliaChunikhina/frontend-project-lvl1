import readlineSync from 'readline-sync';

const goWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const execGameFunc = (gameFunc) => {
  const [question, result] = gameFunc();
  const resultStr = result.toString();

  console.log(question);

  const answer = readlineSync.question('Your answer: ');

  if (answer !== resultStr) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const playGame = (game) => {
  const userName = goWelcome();
  const [gameDescr, gameFunc] = game();
  console.log(gameDescr);

  let count = 3;
  let gameRes = true;
  while (count > 0) {
    gameRes = execGameFunc(gameFunc);

    if (!gameRes) break;

    count -= 1;
  }

  if (gameRes) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

const startGame = (game) => {
  if (!game) {
    goWelcome();
    return;
  }

  playGame(game);
};

export default startGame;
