import _ from 'lodash';
import readlineSync from 'readline-sync';

const AnswerStr = (QuestionStr) => {
    return readlineSync.question(QuestionStr);
};
const goWelcome = () => {
    console.log('Welcome to the Brain Games!');
    const userName = AnswerStr('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
};
const goChecking = (userName, Answer, Result, count) => {
    
    if (Answer === Result) {
        console.log('Correct!');
        count -= 1;
        if (count === 0) {
            console.log('Congratulations, ' + userName + '!');    
        }
    } else {
        count = 0;
        console.log(`\'${Answer}\' is wrong answer ;(. Correct answer was \'${Result}\'.`);
        console.log('Let\'s try again, '+ userName + '!');
    }
    return count;
};
const even = n => {
    return !(n % 2) ? 'yes' : 'no';
};
const oper = () => {
    const n = _.random(1, 3);
    switch (n) {
        case 1 : return '*';
        case 2 : return '+';
        case 3 : return '-';
        default: return null;
    }
};
const calculate = (num1, num2, operStr) => {
    if (operStr === '+') {
        return num1 + num2;
    }
    if (operStr === '-') {
        return num1 - num2;
    }
    if (operStr === '*') {
        return num1 * num2;
    }
};
const gcd = (a, b) => {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
};
const isPrime = n => {
    for (let i = 2; i < n; i += 1) {
        if (n % i === 0) {
            return 'no';
        }
    }
    return (n > 1) ? 'yes' : 'no';
}
export const startGame = (numGame) => {
    
    const userName = goWelcome();
    if (numGame === 0) {
        return;
    }
    let count = 3;
    if (numGame === 1) {
        const AnswerYes='yes';
        const AnswerNo='no';
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        while (count > 0) {
            const num = _.random(1,100);
            console.log('Question: ' + String(num));
            const AnswerUser = AnswerStr('Your answer: ');
            const evenNum = even(num);
            count = goChecking(userName, AnswerUser, evenNum, count);
        }    
    }
    if (numGame === 2) {
        console.log('What is the result of the expression?');
        while (count > 0) {
            const num1 = _.random(1,100);
            const num2 = _.random(1,100);
            const operStr = oper();
            console.log('Question: ' + String(num1) + ' ' + operStr + ' ' + String(num2));
            const AnswerUser = AnswerStr('Your answer: ');
            const result = calculate(num1, num2, operStr);
            if (isNaN(Number(AnswerUser))) {
                count = goChecking(userName, AnswerUser, result, count);  
            } else {
                count = goChecking(userName, Number(AnswerUser), result, count);   
            }
            
        }    
    }
    if (numGame === 3) {
        console.log('Find the greatest common divisor of given numbers.');
        while (count > 0) {
            const num1 = _.random(1,100);
            const num2 = _.random(1,100);
            console.log('Question: ' + String(num1) + ' ' + String(num2));
            const AnswerUser = AnswerStr('Your answer: ');
            const result = gcd(num1, num2);
            if (isNaN(Number(AnswerUser))) {
                count = goChecking(userName, AnswerUser, result, count);  
            } else {
                count = goChecking(userName, Number(AnswerUser), result, count);   
            }
            
        }    
    }
    if (numGame === 4) {
        console.log('What number is missing in the progression?');
        while (count > 0) {
            const arrNum = [];
            const step = _.random(1,10);
            const pos = _.random(0,9);
            arrNum.push(_.random(1,100));
            for (let i = 1; i < 10; i += 1) {
                arrNum.push(arrNum[i-1] + step);
            }
            const result = arrNum[pos];
            const ProgressionStr = ' ' + arrNum.join(' ') + ' ';
            const ProgressionStrNew = ProgressionStr.replace(' ' + String(result) + ' ',' .. ');
            console.log('Question: ' + ProgressionStrNew.trim());
            const AnswerUser = AnswerStr('Your answer: ');
            
            if (isNaN(Number(AnswerUser))) {
                count = goChecking(userName, AnswerUser, result, count);  
            } else {
                count = goChecking(userName, Number(AnswerUser), result, count);   
            }
            
        }    
    }
    if (numGame === 5) {
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
        while (count > 0) {
            const num = _.random(1,100);
            console.log('Question: ' + String(num));
            const AnswerUser = AnswerStr('Your answer: ');
            const result = isPrime(num);
            count = goChecking(userName, AnswerUser, result, count);
        }    
    }
};