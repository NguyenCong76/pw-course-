const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//3.1
let resultScore = scores.find((val) => val > 80);
console.log(resultScore);

//3.2
let resultAge = ages.find((val) => val >= 20);
console.log(resultAge);

//3.1
let resultWord = words.find((val) => val.length > 5);
console.log(resultWord);