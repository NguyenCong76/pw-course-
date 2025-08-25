const str = "Playwright";

//2.1
for (let word of str) {
    console.log(word)
};

//2.2
let array = [];
for (let words of str){
    array.unshift(words);
}

console.log(array);

//2.3 
const arr = [1, 2, 3, 4, 3, 55, 23];

let viTriDau = -1;
let viTriCuoi = -1;
let viTri = 0;
for (let val of arr ) {
    if (val=== 3) {
        if (viTriDau === -1) {
            viTriDau = viTri;
        }
        viTriCuoi = viTri
    }
    viTri++;
};
console.log("Vị trí đầu tiên của 3:", viTriDau);
console.log("Vị trí cuối cùng của 3:", viTriCuoi);

//2.4
const dupArr = [1, 2, 3, 1, 2, 4, 5];
let count = {};
dupArr.forEach(val => {
  count[val] = (count[val] || 0) + 1;
});

let uniqueArr = [];
dupArr.forEach(val => {
  if (count[val] === 1) {
    uniqueArr.push(val);
  }
});

console.log(uniqueArr);





