/* Object trong Js*/
var emailKey = 'email'

var myObj = {
    full_name: 'Huy',
    age: 18,           // Cac khoi tao obj
    adress: 'Ha Noi',
    myKey: 123,
    [emailKey]: 'huythoha@gmail.com',
    getName: function(){
        return this.full_name    //Function --> Methods
                                //Others --> Thuoc tinh/property
    }
}

// Muốn thêm vào OBJ
myObj.email = 'huythoha@gmail.com' 

//Cách gọi Đối tượng
console.log(myObj);     //Output: {full_name: 'Huy', age: 18, adress: 'Ha Noi', myKey: 123, email: 'huythoha@gmail.com', …}

//Cách gọi phần tử chính xác
console.log(myObj.full_name)   //Output: Huy

//Tìm 1 địa chỉ ngoài OBJ
console.log(myObj.live)         //Output:  undefined


//Kiểm tra xem có trong đối tượng được gọi không
var myKey = 'adress';
console.log(myObj[myKey])       //Output: Ha Noi



/*Cach xoa 1 key value */
delete myObj.age
console.log(myObj)      //Output: {full_name: 'Huy', adress: 'Ha Noi', myKey: 123, email: 'huythoha@gmail.com', getName: ƒ}

/** Obj Constructor 
 * 
*/

//Đối tượng khởi tạo với từ key "This"
function User(firstName,lastName,avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;


    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Tạo đối tượng thứ 1 tên author
var author = new User('Dang', 'Huy', 'Avatar');

//Tạo đối tượng thứ 2 tên user
var user = new User('Dang', 'Nga', 'Avatar2');

// Thêm thuộc tính title vào đối tượng t1
author.title = 'Chia se dao tao'

//Thêm thuộc tính comment với đối tượng thứ 2
user.comment= 'Cam on'

console.log(author)     // Output: User {firstName: 'Dang', lastName: 'Huy', avatar: 'Avatar', title: 'Chia se dao tao', getName: ƒ}

console.log(user)       // Output: User {firstName: 'Dang', lastName: 'Nga', avatar: 'Avatar2', comment: 'Cam on', getName: ƒ}

// Gọi hàm getName() trả về tên đầy đủ của 2 đối tượng
console.log(author.getName());      // Output: Dang Huy
console.log(user.getName());        // Output:  Dang Huy
/** OBJ prototype - Basic
 * 1.Prototyle la gi: 
 * Trong JavaScript, mỗi object đều có một thuộc tính ẩn gọi là [[Prototype]], thường được truy cập qua .prototype (với function) hoặc __proto__ (với object).
 *
 *  Prototype giống như “khuôn mẫu” hoặc “kế thừa” để các object khác có thể dùng chung các thuộc tính hoặc phương thức.
 * 
 *  2.Su dung khi nao:
 *      1. Khi cần chia sẻ phương thức giữa nhiều object
 *      2. Khi cần kế thừa (Inheritance)
 *      3. Khi làm việc với Class trong ES6
 *      4. Khi muốn mở rộng built-in object
 */
function User(firstName,lastName,avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
        this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
        }
}
User.prototype.className = 'F8'
User.prototype.getClassName = function() {
    return this.className
}
//Khởi tạo 2 đối tượng
var author1 = new User('Dang', 'Huy', 'Avatar');
var user1 = new User('Dang', 'Nga', 'Avatar2');

//Gọi đến phược thức className và trả về giá trị đã gán
console.log(author1.className)      //Output: F8
console.log(author1)                //Output: User {firstName: 'Dang', lastName: 'Huy', avatar: 'Avatar', getName: ƒ}
console.log(user1.getClassName())   //Output: F8

/** Doi tuong Date 
 * Nghien cu them tai day https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
var date = new Date();
console.log(date.getFullYear())     //Output: 2025

// month: 0 --> 11
var month = date.getMonth() + 1;  //Output: 9
console.log(month);

// day: 0 --> 29
var day = date.getDate();
console.log(day);       //Output: 11

//Thứ trong tuần
var thu_trong_tuan = date.getDay() + 1;
console.log(thu_trong_tuan)  //Output =  5
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

//Làm tròn số gần nhất
console.log(Math.round(3.25))       //Output: 3

//Trị tuyệt đối
console.log(Math.abs(-6))       //Output: 6

//Làm tròn phía trên
console.log(Math.ceil(4.11111))         //Output: 5

//Làm tròn dưới
console.log(Math.floor(6.7))            //Output: 6


//Random so bat ki
console.log(Math.random() * 10) 
var random = Math.floor(Math.random() * 5)
var bonus = [
    '10',
    '20',
    '30',
    '40',
    '50'
]
console.log(bonus[random])

// Min
console.log(Math.min(90, 70, 100, 50))
// Max
console.log(Math.max(100, 20, 50, 200))


