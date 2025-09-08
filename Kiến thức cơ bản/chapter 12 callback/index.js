/** CallBack - goi lai */
//La ham(function) duoc truyen doi so khi goi ham khac
//Phai duoc goi lai
// function myFunction(param) {
//     console.log(typeof param)
// }
// myFunction(myCallBack);
//function myCallBack() {}
/** Callback- Phan 2 */
// Array.prototype.map2 = function(callback) {
//     var output = []; var arrayLength = this.length;
    
//     for(var i = 0; i < arrayLength;i++){
//        var result =callback(this[i], i);
//        output.push(result);
//     }
//     return output;
// }
// var coures = ['Js', 'PHP', 'Ruby'];

// var htmls = coures.map2(function(coures){
//     return `<h2>${coures}</h2>`
// });
// console.log(htmls.join(' ')) 



//Bai tap tao forEach2(), find2(), reduce2(), filter2()
var MonHoc = [
    {
        id: 1,
        name: 'Java Script',
        price: 100
    },
    {
        id: 2,
        name: 'PHP',
        price: 50
    },
    {
        id: 3,
        name: 'HTML CSS',
        price: 150
    },
    {
        id: 4,
        name: 'Java',
        price: 120
    },
    {
        id: 5,
        name: 'ReactJS',
        price: 80
    }
]
Array.prototype.forEach2 = function(callback) {
    var output = [];

    var arrayLength = this.length;

    for(var i = 0; i < arrayLength; i++){
        var result = callback(this[i], i)
        output.push(result);
    }
    return output
}
var hienthi = MonHoc.forEach2(function(MonHoc, index) {
    return `${index} ${MonHoc.id} ${MonHoc.name}`
})
console.log(hienthi);
var hienthi2 = MonHoc.forEach(function(MonHocs,index) {
    console.log(index, MonHocs)
})
