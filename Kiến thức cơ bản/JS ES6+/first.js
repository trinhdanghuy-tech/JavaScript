//------------------------------//
// let, const
// let là từ khóa khai báo biến trong JavaScript, được giới thiệu trong ES6 (ECMAScript 2015). 
// Biến khai báo bằng let có phạm vi khối (block scope), nghĩa là nó chỉ tồn tại trong 
// khối mã nơi nó được khai báo (ví dụ: bên trong một cặp dấu ngoặc nhọn {}). Điều này giúp tránh các vấn đề liên quan đến phạm vi

// const cũng là từ khóa khai báo biến trong JavaScript, được giới thiệu trong ES6. 
// Biến khai báo bằng const có phạm vi khối (block scope) giống như let, nhưng nó được sử dụng để khai báo 
// các hằng số, tức là giá trị của biến không thể thay đổi sau khi đã được gán lần đầu tiên. 
// Nếu cố gắng gán lại giá trị cho một biến const, JavaScript sẽ ném ra lỗi.

//------------------------------//

{
    // Sử dụng let
    // console.log(x) // Lỗi: Cannot access 'x' before initialization
    let x = 10;  // x chỉ tồn tại trong khối này
    console.log(x); // In ra: 10
    if (x > 5) {
        let y = 20; // y chỉ tồn tại trong khối if
        console.log(x, y); // In ra: 10 20
    }
    // console.log(y); // Lỗi: y is not defined

    // Sử dụng const
    const PI = 3.14;
    console.log(PI); // In ra: 3.14
    // PI = 3.14159; // Lỗi: Assignment to constant variable.
}

//------------------------------//
// Hoisting với let và const
var a;

a = 1
console.log(a) // 1

b = 2;

// let b;
console.log(b) // Lỗi: Cannot access 'b' before initialization

c = 3;
// const c;
console.log(c) // Lỗi: Missing initializer in const declaration
//------------------------------//
// Scope (Phạm vi)
{
    let localVar = "Tôi là biến cục bộ";
    const localConst = "Tôi là hằng số cục bộ";
    console.log(localVar); // In ra: Tôi là biến cục bộ
    console.log(localConst); // In ra: Tôi là hằng số cục bộ
}

// console.log(localVar); // Lỗi: localVar is not defined
// console.log(localConst); // Lỗi: localConst is not defined
//------------------------------//
// Tái khai báo (Re-declaration)
let var1 = 5;
// let var1 = 10; // Lỗi: Identifier 'var1' has already been declared

const const1 = 15;
// const const1 = 20; // Lỗi: Identifier 'const1' has already been declared
//------------------------------//
// Tái gán (Re-assignment)
let var2 = 25;
var2 = 30; // Hợp lệ
console.log(var2); // In ra: 30

const const2 = 35;
// const2 = 40; // Lỗi: Assignment to constant variable.
//------------------------------//
// Kết luận
// Sử dụng let khi bạn cần khai báo biến có thể thay đổi giá trị và có phạm vi khối.
// Sử dụng const khi bạn cần khai báo hằng số hoặc biến mà giá trị không nên thay đổi.

// Code thuần: var
// Babel: let, const
// Khi cần định nghĩa biến và không gán lại biến đó: const
// Khi cần định nghĩa biến và gán lại biến đó: let


//------------------------------//
// Template literals (Template strings)

const name = 'JavaScript';
const description = 'ngôn ngữ lập trình phổ biến';

const message1 = `Tôi đang học ${name}, một ${description}.`;
console.log(message1); // In ra: Tôi đang học JavaScript, một ngôn ngữ lập trình phổ biến.

// Multiline strings (Chuỗi nhiều dòng)
const message2 = `Đây là dòng đầu tiên.
Đây là dòng thứ hai.
Đây là dòng thứ ba.`;
console.log(message2);
// In ra:
// Đây là dòng đầu tiên.
// Đây là dòng thứ hai.
// Đây là dòng thứ ba.
//------------------------------//
// Arrow functions (Hàm mũi tên)

// Cách viết hàm truyền thống
// Declaration function
function loggger(log) {
    console.log(log);
}

loggger('Message...'); // In ra: Message...

// Expression function
const logger2 = function (log) {
    console.log(log);
};

logger2('Message 2...'); // In ra: Message 2...

// Arrow function
const logger3 = (log) => {
    console.log(log);
};

logger3('Message 3...'); // In ra: Message 3...

//------------------------------//
// Classes (Lớp)
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

//------------------------------//
// Default parameters value (Tham số mặc định)
// Nên dùng khi định nghĩa hàm
// Tránh lỗi khi không truyền tham số
// Tham số mặc định được sử dụng khi không có giá trị nào được truyền vào hàm 
// hoặc khi giá trị truyền vào là undefined.
function log(message = 'Default message') {
    
    console.log(message);
}

log('Hello!'); // In ra: Hello!
log(); // In ra: Default message

//------------------------------//
// Enhanced object literals (Cải tiến cú pháp đối tượng)
// Giúp viết code ngắn gọn, dễ đọc hơn khi định nghĩa các thuộc tính và phương thức trong đối tượng
const name2 = 'JavaScript';
const age2 = 25;

// Cách viết cũ
const obj1 = {
    name: name2,
    age: age2,
    getName: function() {
        return this.name;
    }
};

console.log(obj1);
// In ra: { name: 'JavaScript', age: 25, getName: [Function: getName] }
console.log(obj1.getName()); // In ra: JavaScript

// Cách viết mới (ES6+)
const obj2 = {
    name2,
    age2,
    getName() {
        return this.name2;
    }
};

console.log(obj2);
// In ra: { name2: 'JavaScript', age2: 25, getName: [Function: getName] }
console.log(obj2.getName()); // In ra: JavaScript


//Định nghĩa key dưới dạng object
const feildName = 'name';
const feildAge = 'age';

const obj3 = {
    [feildName]: 'JavaScript',
    [feildAge]: 25
};

console.log(obj3); 
// In ra: { name: 'JavaScript', age: 25 }
//------------------------------//
// Destructuring assignment (Phân rã cấu trúc)
// Giúp trích xuất dữ liệu từ mảng hoặc đối tượng một cách dễ dàng và ngắn gọn hơn

// Destructuring mảng
const array = ['JavaScript', 'Python', 'Java'];
const [first, second, third] = array;
console.log(first); // In ra: JavaScript
console.log(second); // In ra: Python
console.log(third); // In ra: Java

const [firstLang, , thirdLang] = array; // Bỏ qua phần tử thứ hai
console.log(firstLang); // In ra: JavaScript
console.log(thirdLang); // In ra: Java

const [firstLang2, ...restLangs] = array; // Sử dụng rest operator để lấy phần còn lại
console.log(firstLang2); // In ra: JavaScript
console.log(restLangs); // In ra: [ 'Python', 'Java' ]

// Destructuring đối tượng
const object = {
    name: 'JavaScript',
    age: 25,
    description: 'ngôn ngữ lập trình phổ biến'
};
const { name: objName, age: objAge, description: objDescription } = object;
console.log(objName); // In ra: JavaScript
console.log(objAge); // In ra: 25
console.log(objDescription); // In ra: ngôn ngữ lập trình phổ biến

const { name: objName2, ...restProps } = object; // Sử dụng rest operator để lấy phần còn lại
console.log(objName2); // In ra: JavaScript
console.log(restProps); // In ra: { age: 25, description: 'ngôn ngữ lập trình phổ biến' }


//------------------------------//
//Rest parameters (Tham số còn lại)
// Giúp thu thập các tham số còn lại của hàm vào một mảng
function sum(a,...numbers) {
    console.log(numbers); // In ra mảng các tham số

}

console.log(sum(1, 2, 3)); // In ra: [1, 2, 3]
//------------------------------//
// Spread operator (Toán tử trải)
// Giúp trải các phần tử của mảng hoặc thuộc tính của đối tượng thành các phần tử riêng lẻ

var array5 = ['JavaScript', 'Ruby', 'PHP']

var array6 = ['React', 'Dart']

var totalArray = [...array5, ...array6]

console.log(totalArray) // In ra: [ 'JavaScript', 'Ruby', 'PHP', 'React', 'Dart' ]

var object5 = {
    name: 'JavaScript',
    age: 25
}

var object6 = {
    description: 'ngôn ngữ lập trình phổ biến',
    version: 'ES6+'
}

var totalObject = {...object5, ...object6}

console.log(totalObject) // In ra: { name: 'JavaScript', age: 25, description: 'ngôn ngữ lập trình phổ biến', version: 'ES6+' }

//---------------------/---------//
// Tagged template literals (Chuỗi mẫu có thẻ)
// Giúp xử lý chuỗi mẫu theo cách tùy chỉnh bằng cách sử dụng hàm thẻ (tag function)
// Hàm thẻ nhận vào các phần của chuỗi mẫu và các giá trị được chèn vào
// và trả về một chuỗi đã được xử lý

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return `${result}${str}<span class="highlight">${values[i] || ''}</span>`;
    }, '');
}

const name3 = 'JavaScript';
const description3 = 'ngôn ngữ lập trình phổ biến';

const message3 = highlight`Tôi đang học ${name3}, một ${description3}.`;
console.log(message3); 
// In ra: Tôi đang học <span class="highlight">JavaScript</span>, một <span class="highlight">ngôn ngữ lập trình phổ biến</span>.

function TaggedExample(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return `${result}${str}xin chao moi nguoi minh ten la ${values[i] || ''}`;
    }, '');
}

const name4 = 'Nguyen Van A';

const message4 = TaggedExample`Toi la ${name4}`;
console.log(message4); 
// In ra: Toi la xin chao moi nguoi minh ten la Nguyen Van A
//------------------------------//