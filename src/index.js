import readlineSync from 'readline-sync';

const startGame = (gameDescr, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescr);

  const count = 3;

  for (let numStep = 1; numStep <= count; numStep += 1) {
    const [question, result] = generateGameData();
    let resultStr = '';
    switch (typeof result) {
      case 'boolean':
        resultStr = result ? 'yes' : 'no';
        break;
      case 'number':
        resultStr = String(result);
        break;
      case 'string':
        resultStr = result;
        break;
      default:
        break;
    }

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
