// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.

function multiply(a, b) {
    return a * b;
}

let mul = multiply(3, 6);

console.log(mul);

let mul_2 = multiply(100, 200);

console.log(mul_2);


// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.

function findMin(a, b ,c) {
    let min = a;
    if (min > b) {min = b};
    if (min > c) {min = c};
    return min
}

console.log(findMin(10, 9, 8));

console.log(findMin(100, 90, 80));


// 3. Viết hàm getTopStudents nhận 2 tham số:
//● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
//● threshold: ngưỡng điểm để được coi là "top" (số).
//Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
//Gọi hàm với danh sách thực tế và in kết quả. 


function getTopStudents (student, threshold) {
    let result = []
    for (let i = 0; i < student.length; i++) {
        if (student[i].score >= threshold) {
            result.push(student[i].name);
        }
    }

    return result;

}

let students = [
  { "name": "A", score: 8 },
  { "name": "B", score: 7 },
  { "name": "C", score: 9 },
  { "name": "D", score: 10 },
  { "name": "E", score: 5 }
];

console.log(getTopStudents(students, 6));

//4. Viết hàm calculateInterest nhận 3 tham số:
//● principal: số tiền gửi ban đầu (số).
//● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
//● years: số năm gửi.
//Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và in kết quả.

function calculateInterest(principal, rate, years) {
    return total = principal + (principal * rate * years) / 100;
}

let cal = calculateInterest(1000000, 5, 3)

console.log(cal);


