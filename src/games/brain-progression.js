import { randomize } from '../utils.js';
import startGame from '../index.js';

const gameDescr = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (firstElement, stepProgression, hiddenElementPosition) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenElementPosition) {
      progression.push('..');
    } else {
      progression.push(String(firstElement + stepProgression * i));
    }
  }
  return progression.join(' ');
};

const generateGameData = () => {
  const firstElement = randomize(1, 100);
  const stepProgression = randomize(1, 10);
  const hiddenElementPosition = randomize(0, 9);
  const result = String(firstElement + stepProgression * hiddenElementPosition);
  return [generateProgression(firstElement, stepProgression, hiddenElementPosition), result];
};

export default () => startGame(gameDescr, generateGameData);
