/** Array methods:
 *  forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */
var courses = [
   { 
    id: 1,
    name: 'Java Script',
    coin: 0
},
{ 
    id: 2,
    name: 'PHP',
    coin: 2
},
{ 
    id: 3,
    name: 'Java',
    coin: 1
},
{ 
    id: 4,
    name: 'Java Script',
    coin: 0
},
{ 
    id: 5,
    name: 'HTML',
    coin: 70
},
{ 
    id: 6,
    name: 'CSS',
    coin: 120
},
]
1.//forEach()----Duyet qua tung phan tu cua mang
courses.forEach(function(course,index) {
    console.log(index,course)
});
//2.every()-----Kiem tra ca phan tu ma thoa man 1 dieu kien nao do 1 phan sai tra bang false
var isFree = courses.every(function(course,index){
    console.log(index);
    return course.coin === 0;
});console.log(isFree)
//3.some()---Kiem tra cac phan tu cua mang tra lai true neu 1 trong cac phan tu mang du dieu kien
var isFree = courses.some(function(course,index){
    console.log(index);
    return course.coin === 0;
});
console.log(isFree)
//4.find()---Tim kiem phan tu muon tim se tra ve phan tu dau tien thoa man
var isFree = courses.find(function(course,index){
    return course.name === 'Java Script'
})
console.log(isFree)
//5.filter-----Tim cac phan tu thoa man dieu kien
var isFree = courses.filter(function(course,index){
    return course.name === 'Java Script'
})
console.log(isFree)
//6.map()----Hien thi lai cai gi thi nhan cai do
function coursesHandle(course, index, originArray){
    // console.log(course)
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        index: index,
        originArray: originArray
    }
}
var newCourses = courses.map(coursesHandle); 
console.log(newCourses)
//7.reduce()----
var i = 0   
function coinHandle(accumulator, currentValue, currentIndex,originArray) {
    i++
    var total = accumulator + currentValue.coin;
    console.table({
        'Luot chay: ': i,
        'Bien luu tru': accumulator,
        'Gia khoa hoc': currentValue.coin,
        'Tich tru duoc: ':total
    });
    console.log(currentValue)
    console.log(currentIndex)
    console.log(originArray)
    return total 
}
var totalCoin = courses.reduce(coinHandle, 0);//y nghia cua 0:Khoi tao bien luu tru
console.log(totalCoin)
//Bai 1 
// var depthArray = [1,2,[3,4],5,6,[7,8,9]]
// var flatArray = depthArray.reduce(function(flatOut, depthItem) {
//     return flatOut.concat(depthItem);
// }, [])
// console.log(flatArray)
//Bai 2
// var topic =[
//     {
//         topic: 'Fron-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'Html, Css',
//                 coin: 100
//             },
//             {
//                 id: 2,
//                 title: 'Js',
//                 coin: 100
//             }
//         ]
//     },
//     {
//         topic: 'Back-end',
//         courses:[ {
//             id: 1,
//             title: 'PHP',
//             coin: 100
//         },
//         {
//             id: 2,
//             title: 'NodeJS',
//             coin:150
//         }
       
//     ]
//     }
// ];
// var newCourses = topic.reduce(function(course, topics){
//     return course.concat(topics.courses);
// }, [])
// console.log(newCourses);
// var html = newCourses.map(function(course){
//     return `
//             <div>
//                 <h2>${course.title}</h2>
//                 <p>ID: ${course.id}</p>
//             </div>`;
// })
// console.log(html.join(' '))
Array.prototype.reduce2 = function(callback, initialValue) {

}
/** includes methods */
//Truong hop su dung voi String
var title = 'Responsive web design'
console.log(title.includes('Responsive'));
var arr = [
    'JS', 'PHP', 'Dart'
]
console.log(arr.includes('JS', -1))