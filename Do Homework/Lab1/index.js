// const color = "blue";
// document.querySelector(".red").style.backgroundColor = color;
//     console.log("Color changed to " + color);

// let x = 10;
// console.log("Value of x is " + x);
// const checkValue = () => {
//     let x = 2;
//     if (x > 5) {
//         console.log("x is greater than 5");
//     } else {
//         console.log("x is 5 or less");
//     }
// }   
// checkValue();

// {
//     const name = 'Huy';
//     let age = 20;
//     console.log(`Name: ${name}, Age: ${age}`);
// }


const fullName = 'Đăng Huy';
const birthYear = 2005;
const isStudent = false;

const today = new Date();
const currentYear = today.getFullYear();

const age = currentYear - birthYear;

console.log(`Full Name: ${fullName}, 
Age: ${age}, 
Student: ${isStudent}`);
