const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//2.1
let resultScore = scores.filter((val) => val > 80);
console.log(resultScore);

//2.2
let resultAge = ages.filter((val) => val >= 18);
console.log(resultAge);

//2.3
let resultWord = words.filter((val) => val.length > 5);
console.log(resultWord);

