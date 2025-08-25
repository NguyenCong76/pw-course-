const numbers = [1, 2, 3];

//1.1

numbers.forEach((val) => {
    console.log(`${val}`);
});

// 1.2 
sum = 0;
numbers.forEach((val) => {
    sum += val;
});

console.log(sum);

let min = numbers[0];
numbers.forEach((val) => {
   if(min > val) {
    min = val;
   }
});

console.log(`Giá trị min: ${min}`);

let max = numbers[0];
numbers.forEach((val) => {
   if(max < val) {
      max = val ;
   }
});

console.log(`Giá trị max: ${max}`);

//1.3

let doub = [];
numbers.forEach((val) => {
    doub.push(val * 2);
});
console.log(doub);

//let doub = numbers.map((val) => val * 2);
//console.log(doub);








