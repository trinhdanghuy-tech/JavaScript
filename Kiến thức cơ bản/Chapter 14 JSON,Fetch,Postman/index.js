//---------------JSON------------------------//
// var json = 'false';
// var json = '["JavaScript","PHP"]'
var json = '{"name":"Dang Huy","age":19}'
// var json = '1'
var obj = JSON.parse(json);
console.log(obj)
console.log(JSON.stringify([
    'JS', 'PHP'
]))
//-----------Promise(sync,async)------------------//
// setTimeout(function() {
//     console.log(1);
//     setTimeout(function() {
//         console.log(2);
//         setTimeout(function () {
//             console.log(3);
//             setTimeout(function () {
//                 console.log(4);
//             })
//         }, 1000)
//     }, 1000)
// }, 1000)             //Đây là điển hình của callback hell


//---------------------------------------------//
//Lý thuyết và cách hoạt động của Promise
//Bước 1: New Promise
//Bước 2: Excutor
var promise = new Promise(
    //Excutor
    function(resolve, reject) {
        //Logic
        //Thành công: reslove
        //Thất Bại: reject
        
        //Fake call API
        reject(
            console.log('Co loi!')
        )
    }
);  
promise
    .then(function(courses) {
        console.log(courses);
    })
    .catch(function(error) {
        console.log(error)
    })
    .finally(function() {
        console.log('Done')
    })
//Promise sinh ra để xử lý những thao tác bất đồng bộ,trước khi có promise thì có callback hell,xuất hiện ở bản Js ECMA 6