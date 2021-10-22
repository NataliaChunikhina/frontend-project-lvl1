export const randomize = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
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

export default goChecking;
