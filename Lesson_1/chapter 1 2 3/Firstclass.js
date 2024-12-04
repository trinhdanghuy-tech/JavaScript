//var fullName = 'Trinh Dang Huy';
// Khai bao bien fullName la ten cua ban
//var age = 26;
// Khai bao tuoi
//alert(fullName);
// Gui thong diep
//alert(age);
/*
huy
huy
comment nhieu dong
*/
//Cach vo hieu hoa dung 2 dau gach cheo
//Phim tat: Crtl + /
/**
 * Gioi thieu 1 so ham built-in
 * alert : gui thong bao
 * console:
 * confirm: Xac nhan
 * prompt:Nhap gia tri
 * Set timeout: Cai thoi gian xuat hien
 * Set interval
 */
// console.log('Trinh Dang Huy');
// console.warn(123);
// console.error('Hoc js');
// confirm('Xac nhan ban du tuoi');
// prompt('Xac nhan ban du tuoi')
// setTimeout(function() {
//     alert('Huy dep trai')
// }, 10000)
// setInterval(function() {
//     console.log('Tra loi hoac chet')
// }, 1000)
/** Gioi thieu ve toan tu trong JS
 * 1.Toan tu so hoc
 * 2.Toan tu gan
 * 3.Toan tu so sanh
 * 4.Toan tu logic
 */
// 1.var a = 1 + 3
// console.log(a);
//2. var fullName1 = 'Trinh Dang Huy';
// console.log(fullName1);
//3. var b = 1;
// var c = 4;
// if( c == a){
//     console.log('Dung')
// }
//4.var e = 2
//var f = 5
// if(a > 0 && b > 0){
//     console.log('Chuan roi')
// } 
/** Toan tu so hoc
 *  1. Cong: +
 *  2. Tru: -
 *  3. Nhan: *
 *  4. Luy Thua: **\
 *  5. Chia: /
 *  6. Chia lay du: %
 *  7. Tang 1 gia tri so: ++
 *  8. Giam 1 gia tri so: --
 */
// var a = 3;
// var b = 2;
// var c = a + b;
// console.log(c);
// var d = b - a;
// console.log(d);
// var e = a**b;
// console.log(e);
// var f = a * b
// console.log(f);
// var g  = a / b;
// console.log(g)
// var h = a % b;
// console.log(h);
// var i = a++;
// console.log(i);
// var k = b--;
// console.log(k);
/** Toan tu gan
 * Toan tu    Vi du     Tuong Duong
 * =          x=y        x = y
 * +=         x+=y       x = x+y
 * -=         x-=y       x = x-y
 * *=         x*=y       x = x*y
 * /=         x/=y       x = x/y
 * **=        x**=y      x = x**y
 */
// var a = 3
// a+= 2
// a-= 2
// a*= 2
// a/= 2
// a**= 2
// console.log(a)
// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
/** Toan tu chuoi - String operator
 */
// var firtsName = 'Dang';
// var lastName = 'Huy';
// // Thay vi su dung tnay
// // console.log(firtsName);
// // console.log(lastName);
// // Thi
// console.log(firtsName + ' ' + lastName)
// var name ='Dang'
// console.log(name + ' Huy');
/** Toan tu so sanh
 * == : Bang
 * != : Khong bang
 * > : Lon hon
 * < : Nho hon
 * >= : Lon hon hoac bang
 * <= : Nho hon hoac bang
 */
// var a = 2;
// var b  = 3;
// if( a == b){
//     console.log('Dung');
// }
// if (a != b){
//     console.log('Sai')
// }
// if(a > b){
//     console.log('a lon hon b');
// }
// if(a < b){
//     console.log('a nho hon b')
// }
// if(a >= b){
//     console.log('a lon hon hoac bang b')
// }
// if(a <= b){
//     console.log('a nho hon hoac bang b')
// }
/** Boolean
 */
// 
// var isSucces = true;
// console.log(isSucces);
// var a = 1;
// var b = 0;
// var real = a < b;
// console.log(real);
/** Lenh If-else
 * 6 gia tri convert sang la false:
 * 0
 * false
 * ''-""
 * undefined
 *  NaN
 * null 
 * -Ngoai ra tat ca deu true
 */
// var ketqua = -1 > 0;
// if(ketqua){
//     console.log('Dung vay');
// }else{
//     console.log('Sai roi')
// }
/** Toan tu logical
 * 1. && : And - Ca 2 cung dung thi dung
 * 2. || : Or - 1 trong 2 dung thi dung
 * 3. ! : Not
 */
// var a = -1;
// var b = 2;
// var c = -3;
// if ( a > 0 && b>0){
//     console.log('Dieu kien dung');
// }
// if(a > 0 || c < 0){
//     console.log('Dieu kien dung')
// }
// if(!(a > 0)){
//     console.log('Dieu kien sai');
// }
/** Kieu du lieu
 * 1.Kieu du lieu nguyen thuy - Primitive Data
 * -Number
 * -String
 * -Boolean
 * -Undefined
 * -Null
 * -Symbol
 * 2.Kieu du lieu phuc tap - Complex Data
 * - Function
 * - Object
 */
//  var a = 1; // Number
// // var name = 'Huy' //String
// // var ketqua = true; //Boolean
// // var b;
// // console.log(b); // Undefided
// // var isNull = null; //nothing
// // console.log(isNull);
// // var id = Symbol('id'); //unique
// // var id2 = Symbol('id'); //unique
// // console.log(id == id2)
// // ----Function----
// // var myFunction = function(){
// //     alert('xin chao ca ban');
// // }
// // myFunction();
// // //Khong the hien binh thuong ma phai goi ham
// // ----Object----
// // var myObject = {
// //     name1: 'Huy',
// //     age: 20,
// //     adress: 'Ha Noi',
// //     myFunction: function(){

// //     }
// // };
// // console.log('myObject', myObject);
// // -----Array------
// // var myArray = ['Html', 'PHP', 'Ruby'];
// // console.log(myArray);
// console.log(typeof(a));
// ---Toan tu so sanh P2-----
/**
 * ===: so sanh ca gia tri va kieu du lieu
 * !==: so sanh ca gia tri va kieu du lieu
 */
// var a = 1;
// var b = '1';
// console.log(a !== b);
// console.log(typeof(document.all))
/** Hieu hon ve cau lenh dieu kien va phep so sanh
 * 
 */
// var a = 1;
// var b = 2;
// var result = a < b;
// var result = a < b &&  a < 0
// console.log('result', result);
// if (a < b) {
//     console.log(true);
// }else{
//     console.log(false);
// }