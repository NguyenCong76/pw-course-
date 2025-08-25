const scores = [85, 90, 78];
const number = [1, 2, 3];
const expenses = [50, 100, 150];

//6.1
let sum = scores.reduce((total, val) => total + val, 0);
console.log(sum);

//6.2
let mul = number.reduce((total, val) => total * val, 1);
console.log(mul);

//6.3
let sumEx = expenses.reduce((total, val) => total + val, 0);
console.log(sumEx);

