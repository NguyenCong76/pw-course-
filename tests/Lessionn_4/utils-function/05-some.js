const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//5.1
let resultScore = scores.some((val) => val > 80);
console.log(resultScore);

//5.2
let resultAge = ages.some((val) => val < 18);
console.log(resultAge);

//5.3
let resultWord = words.some((val) => val.length > 5);
console.log(resultWord);
