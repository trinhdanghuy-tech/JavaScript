/* Object trong Js*/
// var emailKey = 'email'

// var myObj = {
//     full_name: 'Huy',
//     age: 18,           // Cac khoi tao obj
//     adress: 'Ha Noi',
//     myKey: 123,
//     [emailKey]: 'huythoha@gmail.com',
//     getName: function(){
//         return this.full_name    //Function --> Methods
//                                 //Others --> Thuoc tinh/property
//     }
// }
// myObj.email = 'huythoha@gmail.com' // Muon them vao obj
//console.log(myObj);                 // Cach goi obj
// console.log(myObj.full_name)   //Cach lay phan tu trong obj
// console.log(myObj.live)  //Kiem tra xem co trong obj khong
// var myKey = 'adress';
// console.log(myObj[myKey]) // tim 1 dia chi ngoai obj
/*Cach xoa 1 key value */
// delete myObj.age
// console.log(myObj)
/** Obj Constructor 
 * 
*/
// function User(firstName,lastName,avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;


//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var author = new User('Dang', 'Huy', 'Avatar');
// var user = new User('Dang', 'Nga', 'Avatar2');
// author.title = 'Chia se dao tao'
// user.comment= 'Cam on'
// console.log(author)
// console.log(user)
// console.log(author.getName());
// console.log(user.getName());
/** OBJ prototype - Basic
 * 1.Prototyle la gi: 
 * 2.Su dung khi nao:
 */
// function User(firstName,lastName,avatar) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.avatar = avatar;
//         this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//         }
// }
// User.prototype.className = 'F8'
// User.prototype.getClassName = function() {
//     return this.className
// }
// var author = new User('Dang', 'Huy', 'Avatar');
// var user = new User('Dang', 'Nga', 'Avatar2');
// console.log(author.className)
// console.log(author)
// console.log(user.getClassName())
/** Doi tuong Date 
 * Nghien cu them tai day https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
// var date = new Date();
// console.log(date.getFullYear())
// var month = date.getMonth() + 1;  // month: 0 --> 11
// console.log(month);
// var day = date.getDate();// day: 0 --> 29
// console.log(day);
/** Math OBJ 
 * 
 * 1.Math PI
 * 2.Math.round()
 * 3.Math.abs()
 * 4.Math.ceil()
 * 5.Math.floor()
 * 6.Math.random
 * 7.Math.min()
 * 8.Math.max()
*/
console.log(Math.PI); // So pi
console.log(Math.round(3.25)) //Lam tron so gan nhat
console.log(Math.abs(-6)) // Tri tuyet doi
console.log(Math.ceil(4.11111)) //Lam tron tren
console.log(Math.floor(6.7))   //Lam tron duoi
console.log(Math.random() * 10) //Random so bat ki
var random = Math.floor(Math.random() * 5)
var bonus = [
    '10',
    '20',
    '30',
    '40',
    '50'
]
console.log(bonus[random])
console.log(Math.min(90, 70, 100, 50))
console.log(Math.max(100, 20, 50, 200))


