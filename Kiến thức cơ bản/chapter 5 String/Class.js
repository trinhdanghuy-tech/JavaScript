/** Chuoi trong JS- String
 * 1. Tạo chuỗi
 * - Các cách tạo chuỗi
 * - Nen dung cac nao ly do
 * - Kiểm tra date type
 * 2. Một số loại case sử dụng backslash(/)
 * 3. Xem độ dài của chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template String E56
 */
// 1.

//Cách tạo chuỗi
var fullName1 = 'Huy'
var fullName2 = new String('Huyy')


// 2.
var fullName = 'Dang Huy la \'Sieu nhan\'' 
console.log(fullName);      //Output: Dang Huy la 'Sieu nhan'


// 3.
console.log(fullName.length);       //Output: 23

// 4.
var write = 'Xin chao tat ca moi nguoi minh rat dep trai nha';
//Không nên để vượt quá 80 ký tự
//Cách nối chuỗi
var write1 = 'Xin chao tat ca moi nguoi '
+ 'minh rat dep trai nha';
console.log(write1)     //Output: Xin chao tat ca moi nguoi minh rat dep trai nha


// 5.
var firstName = 'Dang'
var lastName = 'Huy'
console.log(`Toi la ${firstName} ${lastName}`)      //Output: Toi la Dang Huy


/** Cách làm việc với chuỗi */

//Biến mẫu
var myString = '     Hoc JS tai F8    ';


// 1.Length đo độ dài của chuỗi
console.log(myString.length);       //Output: 22


// 2.Find index

//Giải thích: hàm indexOf sẽ tìm ký tự 'JS' tham số 6 đằng sau là tìm bắt đầu từ kí tự thứ 6 tính cả dấu cách
console.log(myString.indexOf('JS', 6));     //Output: 9

//Tìm ngược về từ vị trí kí tự thứ 6 tìm kí tự 'JS' nếu không thấy trả về -1
console.log(myString.lastIndexOf('JS', 6))      //Output: -1

//Tìm từ đầu chuối đến kí tự cần tìm
console.log(myString.search('JS'))      //Output: 9



// 3.Cut String. Cắt chuỗi
console.log(myString.slice(4));     //Output: ' Hoc JS tai F8    '
// Có thể cắt từ phải sang trái hoặc từ trái sang phải


// 4.Replace  //Biểu thức chính quy "/JS/g" Biến tất cả từ 'JS' thành 'JavaScript'
console.log(myString.replace(/JS/g, 'JavaScipt'))       //Output:      Hoc JavaScipt tai F8    


// 5.Convert to uppercase. In hoa toàn bộ
console.log(myString.toUpperCase())     //Output: '     HOC JS TAI F8    '


// 6.Convert to lowercase. In thường toàn bộ
console.log(myString.toLowerCase())     //Output: '     hoc js tai f8    '


// 7.Trim(). Loại bỏ khoảng trắng ở 2 đầu của chuỗi
console.log(myString.trim())        //Output: 'Hoc JS tai F8'


// 8.Spilit. Tách chuỗi thành Mảng
var language = 'JavaScript,PHP,Ruby';
console.log(language.split(''))     //Output: (19) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ',', 'P', 'H', 'P', ',', 'R', 'u', 'b', 'y']
console.log(language.split(' '))    //Output: ['JavaScript,PHP,Ruby']


// 9.Lấy kí tự bằng index
const myString2 = 'Dang Huy'
console.log(myString2.charAt(0))    //Output: D