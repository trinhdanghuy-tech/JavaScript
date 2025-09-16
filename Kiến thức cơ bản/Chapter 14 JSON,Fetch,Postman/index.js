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
//Bước 1: New Promise khowi tạo
//Promise có 3 trạng thái: Pending(chờ), Fulfilled(thành công), Rejected(thất bại)
//Pending => Fulfilled
//Pending => Rejected
//Promise chỉ chuyển từ trạng thái Pending sang 1 trong 2 trạng thái còn lại,không thể chuyển từ Fulfilled sang Rejected và ngược lại
//Promise có 2 tham số: resolve, reject
// 3 Trạng thái xảy ra khi nào?
//1. Khi new Promise => Trạng thái Pending
//2. Khi gọi hàm resolve() => Trạng thái Fulfilled
//3. Khi gọi hàm reject() => Trạng thái Rejected
//resolve: hàm được gọi khi promise thành công
//reject: hàm được gọi khi promise thất bại
//Bước 2: Excutor
var promise = new Promise(
    //Excutor   
    function(resolve, reject) {
        //Logic
        //Thành công: resolve()
        //Thất bại: reject()
        //Giả sử 1s sau mới có dữ liệu
        setTimeout(function() {
            // resolve([1,2,3]);
            reject('Co loi xay ra')
        }, 1000)
    }
)
promise
    .then(function() { //Hàm được gọi khi resolve()
        console.log("Thành công")
        return data; //return về data để có thể sử dụng ở .then() tiếp theo
    })
    .catch(function(err) { //Hàm được gọi khi reject()
        console.log("Thất bại")
    })
    .finally(function() { //Hàm luôn luôn được gọi dù resolve hay reject
        console.log('Done!')
    })
//Promise sinh ra để xử lý những thao tác bất đồng bộ,trước khi có promise thì có callback hell,xuất hiện ở bản Js ECMA 6



//---------------------------------------------//
//Tính chất chuỗi(chain) của Promise
// var promise2 = new Promise(
//     //Excutor   
//     // function(resolve, reject) {
//     //     //Logic
//     //     //Thành công: resolve()
//     //     //Thất bại: reject()
//     //     //Giả sử 1s sau mới có dữ liệu
//     //     setTimeout(function() {
//     //         resolve();
//     //         // reject('Co loi xay ra')
//     //     }, 1000)
//     // }
// )
// promise2
//     .then(function() { //Hàm được gọi khi resolve()
//         return 1; //return về data để có thể sử dụng ở .then() tiếp theo
//     })
//     .then(function(data) { //Hàm được gọi khi resolve()
//         console.log(data); //1
//         return 2; //return về data để có thể sử dụng ở .then() tiếp theo
//     })
//     .then(function(data) { //Hàm được gọi khi resolve()
//         console.log(data); //2
//         return 3;
//     })
//     .then(function(data) { //Hàm được gọi khi resolve()
//         console.log(data); //3
//     })
//     .catch(function(err) { //Hàm được gọi khi reject()
//         console.log("Thất bại")
//     })
//     .finally(function() { //Hàm luôn luôn được gọi dù resolve hay reject
//         console.log('Done!')
//     })


// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(4);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(5);
//     })
//     .catch(function() {
//         console.log('Co loi xay ra')
//     })
//     .finally(function() {
//         console.log('Done!')
//     })

//---------------------------------------------//
//Promise methods
//1. Promise.resolve()
//Trả về 1 promise đã thành công
// var promise3 = Promise.resolve('Success!');

var promise3 = Promise.reject('Error!');

promise3
    .then(function(result) {
        console.log("result: ", result); //Success!
    })
    .catch(function(err) {
        console.log("err: ", err);
    })
    .finally(function() {
        console.log('Done!')
    })


//2. Promise.all()
//Chạy song song
//Trả về kết quả khi tất cả các promise đều thành công
//Nếu 1 trong các promise bị lỗi thì trả về lỗi luôn
var promise4 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 2000);
    }
)
var promise5 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 5000);
    }
)

Promise.all([promise4, promise5])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2)); //[1,2,3]
    })
    .catch(function(err) {
        console.log(err);
    })
    .finally(function() {
        console.log('Done!')
    })