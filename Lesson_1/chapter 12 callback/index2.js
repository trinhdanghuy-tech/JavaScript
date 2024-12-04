//forEach
Array.prototype.forEach2 = function(callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};
var courses = [
    'Java Script',
    'PHP',
    'Ruby'
]
//forEach()
// courses.forEach(function(course,index) {
//    console.log(index, course)
// })
//courses.forEach2(function(course,index,array){
//    console.log(course, index, array)
//});
//filter
Array.prototype.filter2 = function(callback) {
    var output = [];

    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(result) {
                output.push(this[index]); 
            }
                
        }
    }
    return output   
}
var monHoc = [
    {
        name: 'Java',
        coin: 600
    },
    {
        name: 'C++',
        coin: 650
    },
    {
        name: 'Python',
        coin: 800
    }
]
// var timkiem = monHoc.filter(function(monhoc, index) {
//     if(monhoc.coin >= 650){
//         console.log(index, monhoc)
//     }
// })
var timkiem2 = monHoc.filter2(function(monhoc, index, array) {
     return monhoc.coin >= 650
 })
// console.log(timkiem2)
/** Xay dung ham some 2 */
Array.prototype.some2 = function(cb) {
    var output = false;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(cb(this[index], index, this)){
                output = true;
            }
        }
    }
    return output;
}
var subjects = [
    {
        name: 'Java',
        coin: 600,
        isFinish: true
    },
    {
        name: 'C++',
        coin: 650,
        isFinish: false
    },
    {
        name: 'Python',
        coin: 800,
        isFinish: true
    }
]
// var check = subjects.some(function(subject, index) {
//     return subject.isFinish === true
    
// })
// console.log(check)
// var check = subjects.some2(function(subject, index, arr) {
//     return subject.isFinish;
// })
// console.log(check)
/** Xay dung every 2 */
Array.prototype.every2 = function(cb) {
    var output = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index], index, this)
            if(!result){
                output = false;
            }
               
            
        }
    }
    return output;
}
    
    

var subjects = [
    {
        name: 'Java',
        coin: 600,
        isFinish: true
    },
    {
        name: 'C++',
        coin: 650,
        isFinish: false
    },
    {
        name: 'Python',
        coin: 800,
        isFinish: true
    }
]
// var result = subjects.every(function(subject, index) {
//     return subject.isFinish
// })
// console.log(result)
var result = subjects.every2(function(subject, index){
    return subject.coin > 500
})
console.log(result)