/** Lenh re nhanh if-else*/
var date = new Date
day = date.getDay() + 1;
console.log(day)
if(day === 2){
    console.log("Hom nay la thu 2");
}
else if(day === 3){
    console.log("Hom nay la thu 3");
}
else if(day ===4){
    console.log("Hom nay la thu 4");
}
else if(day === 5){
    console.log("Hom nay la thu 5");
}
else{
    console.log("Khong biet");
}
/* Lenh re nhanh switch*/

switch (day) {
    case 2:
        console.log("Hom nay la thu 2")
        break;
    case 3:
        console.log("Hom nay la thu 3")
        break;
    case 4:
        console.log("Hom nay la thu 4")
        break;
    case 5:
        console.log("Hom nay la thu 5")
        break;
    case 6:
        console.log("Hom nay la thu 6")
        break;
    case 7:
        console.log("Hom nay la thu 7")
        break;
    default:
        console.log("Khong hop le")
        break;
}
/** Toan tu 3 ngoi - Ternary Operator */
var course = {
    name: 'Java Script',
    coin: 250
}
if(course.coin > 0){
    console.log(`${course.coin} Coin` )
}else{
    console.log("Mien phi")
}
var result = course.coin > 0 ? `${course.coin} Coin` : "Mien phi"
console.log(result)

var a = 2
var b = 4
var ketqua = b > a ? "Dung roi" : "Sai roi"
console.log(ketqua)
