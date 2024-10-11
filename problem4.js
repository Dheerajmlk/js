const numb = [1, 2, 3, 4, 5];
const evenNum = numb.filter(num => num % 2 === 0);
const squaredNum = evenNum.map(num => num * num);
const sumOfSq = squaredNum.reduce((acc, num) => acc + num, 0);
console.log(sumOfSq);