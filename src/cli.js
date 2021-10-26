import readlineSync from 'readline-sync';

const requestAndOutputName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default requestAndOutputName;
