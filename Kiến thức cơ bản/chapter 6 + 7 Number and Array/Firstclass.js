
//Xem giá trị trả về có phải số hữu hạn hay không. Kiểu Boolean
console.log(Number.isFinite(2 / 0))     //Output: false

//Xem có phải trả về kiểu giá trị số nguyên không
console.log(Number.isInteger(2/2))      //Output: true

//Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
console.log(Number.parseFloat(3,5))     //Output: 3

//Chuyển đổi chuỗi đã cho thành một số nguyên
console.log(Number.parseInt('6.7'))     //Output: 6

//Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
var numberObject = 1234.56789
console.log(numberObject.toFixed())     //Output: 1235
console.log(numberObject.toFixed(1))    //Output: 1234.6


//Chuyển đổi và trả về số đã cho dưới dạng chuỗi
var a = 11;

console.log(a.toString()); //Output: 11
console.log(typeof(a)) //Output: string


/*20 là số.

'abc' là chuỗi không thể ép thành số.

Khi chia, JavaScript cố convert 'abc' sang số.

Nhưng 'abc' không phải số hợp lệ → kết quả là NaN (Not-a-Number). */
var result = 20 / 'abc'
console.log(isNaN(result)) //output: true


/** Mảng trong JS
 * 1.Tạo mảng
 * -Cách tạo
 * Su dung cach nao? Tai sao
 * -Kiem tra data type?
 * 2.Truy xuat mang
 * -Do dai mang
 * -Lay phan tu theo index
 */

//Cách tạo mảng
//Cách 1:
var language = ['JS', 'PHP', 'HTML', null ,undefined];
console.log(language)       //Output: (5) ['JS', 'PHP', 'HTML', null, undefined]

//Cách 2:
var language1 = new Array('JS', 'PHP', 'HTML', null ,undefined) 
console.log(typeof language1)       //Output: object
console.log(Array.isArray(language1))   //Output: true
console.log(language.length)        //Output: 5
console.log(language[1])            //Output: PHP
/** Lam viec voi Array
 * 1.To String 
 * 2.Join
 * 3.Pop
 * 4.Push
 * 5.Shift
 * 6.Unshift
 * 7.Splicing
 * 8.Concat
 * 9.Slicing
 */
var language2 = ['PHP', 'HTML', 'Java']
var language3 = ['C++', 'Css']

//Chuyen sang kieu String
console.log(language2.toString())       //Output: 'PHP,HTML,Java'

//Them vao giua cac phan tu trong Mang
console.log(language2.join('-'))        //Output: 'PHP-HTML-Java'

//Xoa di phan tu cuoi mang va in ra no
console.log(language2.pop())            //Output: 'Java'    //Mảng hiện tại ['PHP', 'HTML']

//Them phan tu và hiện ra độ dài của mảng
console.log(language2.push('C++', 'Python'))    //Output: 4     //Mảng hiện tại ['PHP', 'HTML', 'C++', 'Python']

//Xoa di thang dau tien va in ra no
console.log(language2.shift())          //Output: PHP      //Mảng hiện tại có['HTML', 'C++', 'Python']

//Thêm vào đầu mảng và hiển thị độ dài của mảng
console.log(language2.unshift('C#', 'Css'))     //Output: 5     //Mảng hiện tại có['C#', 'Css','HTML', 'C++', 'Python']

//Xóa phần tử trong mảng. 2 tham số, số thứ nhất là vị trí bắt đầu, thứ 2 là số lượng muốn xóa và in ra phần tử đã xóa
console.log(language2.splice(1,1))          //Output: ['Css']

//Chèn phần tử. truyền vào 3 tham số, tham số thứ nhất là ví trí muốn chèn , tham số thứ 2 là số lượng phần tử muốn xóa, và thứ 3 là từ chèn vào
language2.splice(1, 0, 'Dart')      //Mảng hiện tại có ['C#', 'Dart', 'HTML', 'C++', 'Python']
console.log(language2)      //Ouput: 

//Ghép 2 mảng với nhau
console.log(language2.concat(language3))   //Mảng hiện tại có ['C#', 'Dart', 'HTML', 'C++', 'Python', 'C++', 'Css']

//Cắt chuỗi. Tham số thứ nhất là vị trí bắt đầu, tham số thứ 2 là vị trí kết thúc. cắt chuỗi không tính cả vị trí end
console.log(language2.slice(1,2))    //Output: ['Dart']