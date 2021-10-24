import readlineSync from 'readline-sync';

const goWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startGame = (game) => {
  const userName = goWelcome();
  
  if (!game) return;

  const [descr, runStep] = game();
  console.log(descr);

  let count = 3;
  while (count > 0) {
    const [question, result] = runStep();
    console.log(question);

    const answerUser = readlineSync.question('Your answer: ');
    let answer = answerUser;
    if (typeof result === 'number') {
      answer = Number(answerUser);
    }

    if (answer === result) {
      console.log('Correct!');
      count -= 1;
      if (count === 0) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      count = 0;
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
};

export default startGame;
