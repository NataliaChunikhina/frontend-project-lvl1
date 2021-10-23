import readlineSync from 'readline-sync';

export const randomize = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const goChecking = (userName, result, count) => {
  const answerUser = readlineSync.question('Your answer: ');
  let answer = answerUser;
  if (typeof result === 'number') {
    answer = Number(answerUser);
  }

  let countNew = count;
  if (answer === result) {
    console.log('Correct!');
    countNew -= 1;
    if (countNew === 0) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    countNew = 0;
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
  return countNew;
};

export default goChecking;
