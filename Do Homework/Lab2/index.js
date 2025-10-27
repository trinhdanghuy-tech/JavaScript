// let x = 4
// while (x < 10) {
//   console.log(x)
//   x++
// }
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

const tinhTrungBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3
}

const xepLoai = (trungBinh) => {
    if (trungBinh >= 8) {
        return "Gioi"
    } else if (trungBinh >= 6.5) {
        return "Kha"
    } else if (trungBinh >= 5) {
        return "Trung Binh"
    } else {
        return "Yeu"
    }
}

const toan = 7.5
const van = 6.0
const anh = 8.0
const trungBinh = tinhTrungBinh(toan, van, anh)
console.log("Diem Trung Binh: " + trungBinh)
console.log("Xep Loai: " + xepLoai(trungBinh))