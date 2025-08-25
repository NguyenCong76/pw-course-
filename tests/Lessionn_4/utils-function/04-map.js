
//4.1
const scores = [85, 90, 78];

let resultScore = scores.map((val) => {
    if (val < 90) {
        return val * 1.1;
    }
    else {
        return val * 0.95;
    }
}
)
console.log(resultScore);

//4.2
const number = [1, 2, 3];

let str = number.map((val) => {
    return val.toString();
}
).join("");

console.log(str);

//4.3
let resultNumber = number.map((val) => val * 2);
console.log(resultNumber);


