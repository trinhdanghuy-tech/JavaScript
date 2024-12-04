/** Chuoi trong JS- String
 * 1.Tao chuoi
 * -Cac cach tao chuoi
 * -Nen dung cac nao ly do
 * -Kiem tra data type
 * 2.Mot so loai case su dung backslash(/)
 * 3.Xem do dai cua chuoi
 * 4.Chu y do dai khi viet code
 * 5.Template String E56
 */
// 1.
// var fullName1 = 'Huy'
// var fullName2 = new String('Huyy')
// 3.
// var fullName = 'Dang Huy la \'Sieu nhan\''
// console.log(fullName);
// 4.
// console.log(fullName.length);
// var write = 'Xin chao tat ca moi nguoi minh rat dep trai nha';
// //Khong nen de vuot qua 80 ky tu
// //Cach noi chuoi
// var write = 'Xin chao tat ca moi nguoi '
// + 'minh rat dep trai nha';
// 5.
// var firstName = 'Dang'
// var lastName = 'Huy'
// console.log(`Toi la ${firstName} ${lastName}`)
/** Cach lam viec voi chuoi */
var myString = '     Hoc JS tai F8    ';
//1.Length
// console.log(myString.length);
//2.Find index
// console.log(myString.indexOf('JS', 6));
// console.log(myString.lastIndexOf('JS', 6))
// console.log(myString.search('JS'))
//3.Cut String
// console.log(myString.slice(4));
//Co the cat tu trai sang phai va tu phai sang trai
//4.Replace  //Bieu thuc chinh quy /JS/g bien tat ca tu JS thanh JavaScript
// console.log(myString.replace(/JS/g, 'JavaScipt'))
//5.Convert to uppercase
// console.log(myString.toUpperCase())
//6.Convert to lowercase
// console.log(myString.toLowerCase())
//7.Trim //Loai bo khoang trang thua o 2 dau
// console.log(myString.trim())
//8.Spilit //Tach chuoi thanh Array
// var language = 'JavaScript,PHP,Ruby';
// console.log(language.split(''))
//9.Get a character by index
// const myString2 = 'Dang Huy'
// console.log(myString2.charAt(0))