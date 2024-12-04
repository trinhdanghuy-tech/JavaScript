// console.log(Number.isFinite(2 / 0))
// //Xem gia tri co phai tra ve so huu han hay khong.Kieu Boolean
// console.log(Number.isInteger(2/2))
// //Xem co phai tra ve kieu gia tri so nguyen khong
// console.log(Number.parseFloat(3,5))
// //Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// console.log(Number.parseInt('6.7'))
// //Chuyển đổi chuỗi đã cho thành một số nguyên
// var numberObject = 1234.56789
// console.log(numberObject.toFixed())
// console.log(numberObject.toFixed(1))
// //Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// console.log((11).toString());
// //Chuyển đổi và trả về số đã cho dưới dạng chuỗi
// var result = 20 / 'abc'
// console.log(isNaN(result))
// // var age = 18;
/** Mang trong JS
 * 1.Tao mang
 * -Cach tao
 * Su dung cach nao?Tai sao
 * -Kiem tra data type?
 * 2.Truy xuat mang
 * -Do dai mang
 * -Lay phan tu theo index
 */
// var language = ['JS', 'PHP', 'HTML', null ,undefined];
// console.log(language)               //Cach 1
// var language = new Array('JS', 'PHP', 'HTML', null ,undefined) //Cach 2
// console.log(typeof language)
// console.log(Array.isArray(language))
// console.log(language.length)
// console.log(language[1])
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
var language = ['PHP', 'HTML', 'Java']
var language2 = ['C++', 'Css']
// console.log(language.toString()) //Chuyen sang kieu String
// console.log(language.join('-')) //Them vao giua cac phan tu trong Mang
// console.log(language.pop())     //Xoa di phan tu cuoi  mang va in ra no
// console.log(language.push('C++', 'Python')) //Them phan tu
// console.log(language.shift()) //Xoa di thang dau tien va in ra no
// console.log(language.unshift('C#', 'Css')) //them vao dau mang va hien thi do dai cua mang
// console.log(language.splice(1,1)) //Xoa phan tu trong mang 2 tham so so thu nhat la vi tri bat dau t2 la so luong phan tu muon xoa
// language.splice(1, 0, 'Dart')
// console.log(language) //Chen phan tu
// console.log(language.concat(language2))//Ghep 2 mang voi nhau
console.log(language.slice(1,2))    