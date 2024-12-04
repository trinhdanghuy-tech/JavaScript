/** Ham(Function)
 * 1.Ham la gi?
 * -Mot khoi ma
 * -Lam 1 viec cu the
 * 2.Loai ham
 * -Built-in
 * -Tu dinh nghia
 * 3.Tinh chat
 * -Khong thuc thi khi dinh nghia
 * -Se thuc thi khi duoc goi
 * -Co the nhan tham so
 * -Co the tra ve 1 gia tri
 */
// function showDialog() {
//     alert('xin chao')
// }
// showDialog();
/** Tham so  ham-Js co ban
 * 1.Tham so
 * -Dinh nghia: Dung de lam gi do trong 1 ham
 * -Kieu du lieu: Khong gioi han kieu du lieu
 * -Tinh private:
 * -1 tham so
 * -Nhieu tham so
 * 2.Truyen tham so
 * -1 tham so
 * -Nhieu tham so
 * 3.Arguments
 * -Doi tuong Arguments
 * -Gioi thieu vong lap for of
 */
// function writelog(message) {
//     console.log(message);
// }
// writelog('hello')
// function runLog() {
//     console.log(arguments);
// }
// runLog('Log1', 'Log2');
// function runLog() {
//     var myString = ' ';
//     for(var pram of arguments){
//         myString += `${pram} -`
//     }
//     console.log(myString);  
// }
// runLog('Log1', 'Log2', 'Log3')
/** Return trong function */
// function sum(a, b){
//     return a + b;
// }
// var result = sum(2,3);
// console.log(result);
/** Mot so dieu can biet ve function
 * 1.Khi dat function cung ten?
 * 2.Khai bao bien trong ham
 * 3.Dinh nghia ham trong ham
 */
// function showDialog() {
//     console.log('Hello1')
// }                               1.Ham nao khai bao sau thi duoc hien len
// function showDialog() {
//     console.log('Hello2')
// }
// showDialog();
// function showDialog() {
//     var fullName = 'Huy'
//     console.log(fullName)
// }                                2.1 bien khai bao trong ham chi dung duoc trong ham
// showDialog();
// function showDialog() {
//     function showDialog2() {
//         console.log('Hello')
//     }                            3.Cung giong nhu bien chi su dung duoc trong ham
//     showDialog2();
// }
// showDialog();
/** Cac loai ham
 * 1.Declaration Function
 * 2.Expresstion function
 * 3.Arrow function
 */
// function sum() {
//     console.log('hello')
// }
//           //Declaration function
// var sum2 = function(){
//     console.log('hello2')
// }
// setTimeout(function autoLogin() {

// });                        //Expresstion function
// var myObject = {
//     myFunction: function(){

//     }
// }
// Diem khac nhau la Dec co the goi truoc ham con Ex thi khong