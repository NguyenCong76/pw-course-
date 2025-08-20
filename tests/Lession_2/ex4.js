//a
const chieuCao = 160;

const soLeChieuCao = chieuCao % 100;

const canNangLyTuong = (soLeChieuCao * 9) / 10;

const mucCanToiDa = soLeChieuCao;

const mucCanToiThieu = (soLeChieuCao * 8) / 10;

//b
console.log("Cân nặng lý tưởng của bạn là: ", canNangLyTuong, "kg;", "Mức cân tối đa là:", mucCanToiDa, "kg;", "Cân nặng tối thiểu là: ", mucCanToiThieu, "kg;")


