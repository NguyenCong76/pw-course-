const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống";
const numbersStr = "1,234,567";

//1.
let phoneNumRep = phoneNumber.replace(" ", ".");
console.log(phoneNumRep);

//2.
let reportRep = report.replace("lỗi", "bug");
console.log(reportRep);

//3. 
let numRep = numbersStr.replace(",", ".");
console.log(numRep);