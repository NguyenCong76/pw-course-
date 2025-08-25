//3.1
const student = {
    "name": "Alex",
    age: 10,
    salary: 20
}

for (let obj in student) {
    console.log(obj);
    console.log(student[obj]);
}


//3.2
let sum = 0;
for (let obj in student) {
    if (typeof student[obj] === "number") {
        sum += student[obj]
    }
}

console.log(`Tổng giá trị số của object: ${sum}`);

//3.3
let objStudent = [];
for (let obj in student) {
    objStudent.push(obj);
}

console.log(objStudent);