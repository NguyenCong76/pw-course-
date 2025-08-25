//1.1
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

//1.1
let resultScore = scores.every((val) => val > 70);
console.log(resultScore);

//1.2
let resultAge = ages.every((val) => val > 15);
console.log(resultAge);

//1.3
let resultWord = words.every((val) => val.length > 3);
console.log(resultWord);





