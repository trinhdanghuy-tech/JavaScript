/** Hàm(Function)
 * 1. Ham la gi?
 * - Một khối mã
 * - Làm 1 việc cụ thể
 * 2. Loại hàm
 * - Built-in
 * - Tự định nghĩa
 * 3. Tính chất
 * - Không thực thi khi định nghĩa
 * - Sẽ thực thi khi được gọi
 * - Có thể nhập tham số
 * - Có thể trả về 1 giá trị
 */

//Khai báo hàm cơ bản
function showDialog() {
    // alert('xin chao')
}
showDialog();


/** Tham số Hàm-JS cơ bản: 
 * 1.Tham số
 * -Định nghĩa: Dùng để làm gì đó trong 1 hàm
 * -Kiểu dữ liệu: Không giới hạn kiểu dữ liệu
 * -Tính private(Riêng tư):
 * -1 tham số
 * -Nhiều tham số
 * 2.Truyền tham số
 * -1 tham số
 * -Nhiều tham số
 * 3.Arguments
 * -Đối tượng Arguments
 * -Giới thiệu vòng lặp for
 */

//Hàm trả về 1 đoạn nhắn nào đó 
function writelog(message) {
    console.log(message);
}
writelog('hello')

function runLog() {
    console.log(arguments);
}
runLog('Log1', 'Log2');


function runLog() {
    var myString = ' ';
    for(var pram of arguments){
        myString += `${pram} -`
    }
    console.log(myString);  
}
runLog('Log1', 'Log2', 'Log3')


/** Return trong function. Hàm trả về*/
function sum(a, b){
    return a + b;
}
var result = sum(2,3);
console.log(result);


/** Mot so dieu can biet ve function
 * 1.Khi dat function cung ten?
 * 2.Khai bao bien trong ham
 * 3.Dinh nghia ham trong ham
 */

// 1.Hàm nào được khai báo sau thì hiện lên
function showDialog1() {
    console.log('Hello1')
}                               
function showDialog1() {
    console.log('Hello2')
}
showDialog1();

// 2.1 Biến khai báo trong hàm chi được sử dụng trong hàm
function showDialog3() {
    var fullName = 'Huy'
    console.log(fullName)
}                                
showDialog3();

// 3.Cũng giống như biến chỉ được sử dụng trong hàm
function showDialog() {
    function showDialog2() {
        console.log('Hello')
    }                            
    showDialog2();
}
showDialog();


/** Các loại hàm
 * 1.Declaration Function (Khai báo hàm)
 * 2.Expresstion function (Biểu thức hàm hoặc Hàm gán cho biến)
 * 3.Arrow function 
 */

//Declaration function
sum(); //Output: hello
function sum() {
    console.log('hello')
}

//Expresstion function
// sum2();  //Output: Uncaught TypeError: sum2 is not a function
var sum2 = function(){
    console.log('hello2')
}
setTimeout(function autoLogin() {

});                        
var myObject = {
    myFunction: function(){

    }
}
// Điểm khác nhau là khi Hàm Declaration có thể gọi trước khi khái báo còn hàm Expresstion thì không thể