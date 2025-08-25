//1.Khởi động Tàu Vũ trụ K17
const departurePlanet = "Trái đất";
const mission = "Khám phá Vũ trụ K17";
const crew = ["Cong", "Yen", "Ngan", "Thinh", "Jimmy", "Duom", "Long", "Anh", "Huong", "Ngan"
    , "Huong", "Co", "Thanh", "Minh", "Dao", "Minh", "Nga", "Thi"];

function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}`;
}

let center = [crew];

//console.log(launchShip(center));

//2. Du hành đến hành tinh bí ẩn

function calculateDistance(speed, time) {
    return speed * time;
}

let distance = calculateDistance(1000, 24);

console.log(`Khoảng cách đến hàng tính bí ẩn là: ${distance}km`);

//3. Hành tinh kỳ lạ

function convertTimeToHex(time) {
    return time.toString(16);
}

let time = convertTimeToHex(120);

console.log(`Thời gian theo hệ thập lục phân là: ${time}s`);

// 4. Khám phá kho báu

function decryptCode(code) {
    let str = "";
    for (let i = 0; i < code.length; i++) {
        let char = code[i];
        if (char === char.toLowerCase()) {
            str += char.toUpperCase();
        }
        else {
            str += char.toLowerCase();
        }
    }
    return str;
}

let result = decryptCode("K17 Challenge");

console.log(result);

//5. Trở về Trái Đất

function returnToEarth(){
    return `Chuẩn bị trở về Trái Đất!`;
}

console.log(returnToEarth());





