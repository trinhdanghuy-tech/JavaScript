/** Vong lap -Loop
 * 1. for - Vong lap voi dieu kien dung
 * 2. for/in -Lap qua key cua doi tuong
 * 3. for/of -Lap qua value cua doi tuong
 * 4. while -Lap khi dieu kien dung
 * 5. do/while - Lap it nhat 1 lan/sau do lap khi dieu kien dung
 */
// 1.Vong lap for
for(var i = 1; i < 10; i++) {
    console.log(i);
}                                   //Output: vòng lặp chạy từ đến 9

//Kết hợp vòng lặp với hàm để tính tổng của mảng
function getTotal(arr) {
    var sum = 0;
    var dodai = arr.length;
    for(var i = 0;i < dodai ; i++){
        sum = sum + arr[i];
    }
    return  sum;
}
console.log(getTotal([4, 5, -3]));          //Output 6


//Kết hợp vòng lặp for với array
var myArray = [
    'JS',
    'Java',
    'Ruby',
    'Unity'
];
for(var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);                //Output : Chạy lần lượt phần tử của mảng myArray
}


/** Vong lap for-in */
var myObj ={
    name: 'Huy',
    age: 20,
    address: 'hanoi'
};
for (const key in myObj) {
    console.log(myObj[key]);
}
var language = [
    'JS',
    'Ruby',
    'Python'
]
for(var key in language){
    console.log(language[key])
}
var huhu = 'JavaScript';
for(var key in huhu){
    console.log(huhu[key])
}
/** Vong lap for of */

var myInfo = {
    name: 'Huy',
    age: 20
}
for(var value of Object.keys(myInfo)){
    console.log(myInfo[value])
}
/** Vong lap While */
// var i = 0;
while (i < 10)  {
    i++
    console.log(i);
}
/** Vong lap do while */
var sucess = false;
do{ 
    i++
    console.log('Nap the lan ' + i)
    if(false){
        sucess = true;
    }
}while(!sucess && i<=3);
/** Lenh Break va Continue */
for(var i = 0; i < 10; i++){
    if(i >= 5){
        break;          // Nếu i lớn hơn 5 dừng vòng lặp
    }
    if(i%2 !==0){
        continue;       // Nếu chia ra dư thì bỏ qua số đó đến số tiếp theo
    }
    console.log(i);
}
/** Vong lap long nhau */
var myArray = [
    [1,2],
    [3,4],
    [5,6]
];
for(var i = 0;i < myArray.length; i++){
    for(var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j])
    }
}
/** De quy */
//Bai tap xoa pha tu thừa trong mảng
var array = ['a', 'b', 'c', 'a', 'b', 'c']
console.log(new Set(array))
//1.Xac dinh diem dung
//2.Logic handle --> Tao ra diem dung
function countDown(num){
    if(num > 0){
        console.log(num)
        return countDown(num -1);
    }
    return num;
}
countDown(3);


function loop(start, end, cb){
    if(start < end) {
        cb(start)
        loop(start + 1, end, cb)
    }
}
var myAray = ['Js', 'PHP', 'CSS']
loop(0, myAray.length,function(index) {
    console.log(myAray[index]);
})
/** Tinh gia thua */
function giaiThua(num){ 
    var output = 1;
    for(var i = num; i > 0; i--){
        output *= i;
    }
    return output;
}
console.log(giaiThua(3))

