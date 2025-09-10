
// Cú pháp khai báo biến
var fullName = 'Trinh Dang Huy';
var age = 26;


// Cách cmt trong JS
//Cach vo hieu hoa dung 2 dau gach cheo
//Phim tat: Crtl + /
/*
huy
huy
comment nhieu dong
*/

//  Gioi thieu 1 so ham built-in
//  alert : gui thong bao
//    Gui thong diep

// alert(age);
// alert(fullName);


//  console:
console.log('Trinh Dang Huy');
// Hàm cảnh báo
console.warn(123);
// Hàm báo lỗi
console.error('Hoc js');
// confirm: Xac nhan

// confirm('Xac nhan ban du tuoi');

// prompt:Nhap gia tri. Nó dùng để hiển thị một hộp thoại (dialog) yêu cầu người dùng nhập dữ liệu

// prompt('Xac nhan ban du tuoi')

// Set timeout: Cài thoi gian xuat hien

// setTimeout(function() {
//     alert('Huy dep trai')
// }, 10000)

// Set interval : Nó được dùng để lặp đi lặp lại một đoạn code theo khoảng thời gian cố định (tính bằng milliseconds, tức 1/1000 giây).

// setInterval(function() {
//     console.log('Tra loi hoac chet')
// }, 1000)






/** GIỚI THIỆU VỀ TOÁN TỬ TRONG JS
 * 1.Toan tu so hoc
 * 2.Toan tu gan
 * 3.Toan tu so sanh
 * 4.Toan tu logic
 */
// 1. Toán tử số học
var a = 1 + 3
console.log(a);

// 2. Toán tử gán
var fullName1 = 'Trinh Dang Huy';
console.log(fullName1);

//3.Toán tử so sánh
var b = 4;
var c = 4;
if( c == b){
    console.log('Dung')
}

//4. Toán tử logic
if(a > 0 && b > 0){
     console.log('Chuan roi')
    } 


/** TOÁN TỬ SỐ HỌC
 *  1. Cong: +
 *  2. Tru: -
 *  3. Nhan: *
 *  4. Luy Thua: **\
 *  5. Chia: /
 *  6. Chia lay du: %
 *  7. Tang 1 gia tri so: ++
 *  8. Giam 1 gia tri so: --
 */
var number1 = 3;
var number2 = 2;

// Tổng 2 số
var total = number1 + number2;
console.log(total);     //Output 5

// Hiệu 2 số
var difference = number2 - number1;
console.log(difference);    //Output: -1

// Lũy Thứa
var LuyThua = number1**number2;
console.log(LuyThua);       //Output: 9

// Tích 2 số
var product = number1 * number2
console.log(product);       //Output: 6

// Chia bình thường
var quotient  = number1 / number2;
console.log(quotient)  //output: 1.5

// Chia lấy dư
var remainder = number1 % number2;
console.log(remainder);     //Output: 1

// Cộng tăng tiến 1 đơn vị

// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
var i = number1++
console.log(i)      //Output = 3

// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
var j = ++number1;
console.log(j);     //Output: 5

// Trừ đi 1 đơn vị

// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
var k = number2--;
console.log(k);     //Output: 2

// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
var h = --number2;
console.log(h);     //Output: 0


/** TOÁN TỬ GÁN
 * Toan tu    Vi du     Tuong Duong
 * =          x=y        x = y
 * +=         x+=y       x = x+y
 * -=         x-=y       x = x-y
 * *=         x*=y       x = x*y
 * /=         x/=y       x = x/y
 * **=        x**=y      x = x**y
 */
var currentValue = 3
currentValue+= 2    // Output: 5
currentValue-= 2    // Output: 3
currentValue*= 2    // Output: 6
currentValue/= 2    // Output: 3
currentValue**= 2   // Output : 9
console.log(currentValue)



/** TOÁN TỬ CHUỖI - STRING OPERATOR
 */

//Cú pháp đặt tên biến
var firtsName2 = 'Dang';
var lastName = 'Huy';


// Thay vi su dung thế này
console.log(firtsName2);
console.log(lastName);
//Output: Dang
//        Huy
// Thì nối 2 chuỗi với nhau theo cách sau
console.log(firtsName2 + ' ' + lastName)  // Output: Dang Huy

// Hoặc có thể dùng theo kiểu sau:
var name ='Dang'
console.log(name + ' Huy');



/** TOÁN TỬ SO SÁNH
 * == : Bang
 * != : Khong bang
 * > : Lon hon
 * < : Nho hon
 * >= : Lon hon hoac bang
 * <= : Nho hon hoac bang
 */
var x = 2;
var y  = 3;
if( x == y){
    console.log('Dung');
}
if (x != y){
    console.log('Sai')
}
if(x > y){
    console.log('x lon hon y');
}
if(x < y){
    console.log('x nho hon y')
}
if(x >= y){
    console.log('x lon hon hoac bang y')
}
if(x <= y){
    console.log('x nho hon hoac bang y')
}

//Output: Sai. In ra điều kiện thứ 2
//        x nho hon y. In ra điều kiện thứ 4
//        x nho hon hoac bang y. In ra điều kiện số 6 


// ---TOÁN TỬ SO SÁNH P2-----
/**
 * ===: so sanh ca gia tri va kieu du lieu
 * !==: so sanh ca gia tri va kieu du lieu
 */
// var x = 2;
var str = '1';

// !==: so sanh ca gia tri va kieu du lieu
console.log(x !== str);
console.log(typeof(document.all))
/** Hieu hon ve cau lenh dieu kien va phep so sanh
 * 
 */
// var x = 2;
// var y = 3;
var result = x < y;
var result = x < y &&  x < 0
console.log('result', result);   
if (a < b) {
    console.log(true);
}else{
    console.log(false);
}

/** BOOLEAN
 */
// Đặt biến isSucces là true 
var isSucces = true;
console.log(isSucces);      //Output: true

// Có thể kiếm tra như sau
var real = x > y;
console.log(real);



/** Lệnh If-Else
 * 6 Giá trị convert sang là false
 * 0
 * false
 * ''-""
 * undefined
 *  NaN
 * null 
 * Ngoài ra tất cả đều là true
 */


//Cấu trúc 1 lệnh if-else cơ bản
var ketqua = -1 > 0;
if(ketqua){
    console.log('Dung vay');            //Output:  Điều kiện thứ 2:  Sai roi
}else{
    console.log('Sai roi')
}



/** Toán tử Logical
 * 1. && : And - Cả 2 cùng đúng thì đúng
 * 2. || : Or - 1 trong 2 đúng thì đúng
 * 3. ! : Not
 */


// var x = 2;
// var y = 3;
var z = -3;
if ( x > 0 && y>0){
    console.log('Dieu kien dung');  //Outout: Dieu kien dung
}
if(x > 0 || z < 0){
    console.log('Dieu kien dung')   // Output: Dieu kien dung
}
if(!(x > 0)){
    console.log('Dieu kien sai');   //Output: Do sai điều kiện nên không in ra gì cả
}



/** KIỂU DỮ LIỆU
 * 1.Kiểu dữ liệu nguyên thủy - Primitive Data
 * -Number
 * -String
 * -Boolean
 * -Undefined
 * -Null
 * -Symbol
*/

var m = 1 // Kiểu dữ liệu Number

var text = 'Hello World'  // Kiểu dữ liệu String(Chuỗi)


var ketqua = true   //Kiểu dữ liệu boolean

var f  // Kiểu dữ liệu undifined do không được gán bất kỳ giá trị nào. "chưa được gán" hoặc "không tồn tại".
console.log(f)  //Output: undefined

var isNull = null //Không có gì cả. "không có gì" (do bạn chủ động gán).
console.log(isNull) //Output: null
// Nếu ta thêm giá trị như sau
console.log(isNull + 1) //Output: 1. Do null rỗng nhưng khi cộng giá trị thì null sẽ đưa thành 0 
//Còn undifined không thể +1 do không có gì trong biến đó cả


//Nó dùng để tạo ra giá trị duy nhất (unique value).
var id = Symbol('id'); //unique
var id2 = Symbol('id'); //unique

//Ngay cả khi bạn tạo 2 Symbol có cùng mô tả (description), chúng vẫn khác nhau.
console.log(id == id2)      //Output: false



/** 
 * 2.Kiểu dữ liệu phức tạp - Complex Data
 * - Function
 * - Object
 */


// ----Function---- Hàm
var myFunction = function (a, b) {
    console.log(a + b)
}

// Không thể xuất hiện bình thường mà phải gọi hàm
myFunction(7, 5);       // Truyền 2 tham số là 7, 5.  Output: 12

// ----Object----
var myObject = {
    name1: 'Huy',
    age: 20,
    adress: 'Ha Noi',
    myFunction: function(){}
};
console.log('myObject', myObject);      //Output: {name1: 'Huy', age: 20, adress: 'Ha Noi', myFunction: ƒ}



// -----Array------ Mảng
var myArray = ['Html', 'PHP', 'Ruby'];
console.log(myArray);  // Output: (3) ['Html', 'PHP', 'Ruby']

//Truyền tham số để gọi trực tiếp phần tử trong mảng
console.log(myArray[0])  //Output: Html
