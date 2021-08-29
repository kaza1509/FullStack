// function chiaHetChoBa(num) {
//     return num % 3 == 0
// }
// console.log(chiaHetChoBa(3));

// var students = ['Nguyen', 'Tung', 'Tuan', 'Hoang'];
// var lastStudent = students.pop();
// console.log(students);
// console.log(lastStudent);

// var students = ['Nguyen', 'Tung', 'Tuan', 'Hoang'];
// students.push('Hong');
// console.log(students);

// var students = ['Nguyen', 'Tung', 'Tuan', 'Hoang'];
// students.unshift('Hong');
// console.log(students);

// var students = ['Nguyen', 'Tung', 'Tuan', 'Hoang'];
// var firstStudent = students.shift();
// console.log(students);
// console.log(firstStudent);

// var students = ['Nguyen', 'Tung', 'Tuan', 'Hoang'];
// var twoFirstStudent = students.splice(0,2);
// console.log(students);
// console.log(twoFirstStudent);

// var students = ['Nguyen', 'Tung', 'Tuan', 'Hoang'];
// console.log(students.join());

//===== Tăng dần =====
// var students = ['Nguyen', 'Tung', 'Tuan', 'Hoang'];
// console.log(students.sort());
//===== Giam dần =====
// console.log(students.sort().reverse());

//Đảo ngược
// var students = ['Nguyen', 'Tung', 'Tuan', 'Hoang'];
// console.log(students.reverse());

// Đảo tên
// var name1 = 'bui van nguyen';
// var arrName = name1.split(' ');
// arrName = arrName.reverse();
// var backname = arrName.join(' ')
// console.log(backname);
//
// var name1 = 'bui van nguyen';
// console.log(name1.split(' ').reverse().join(' '));

// var students = ['Nguyen', 'Tung', 'Toan', 'Hoang'];
// students.forEach( student => {
//     console.log('Xin chao toi ten la: '+student);
//     console.log('Toi da an com roi');
// });

// var students = ['Nguyen', 'Tung', 'Toan', 'Hoang']; 
// var studentTeenName = students.map(function(student) {
//     return student+"'s";
// } );
// console.log(studentTeenName);

// var numbers = [3, 5, 8];
// //Muốn có 1 mảng nhiều hơn 1 đơn vị [4, 6, 9]
// var newNum = numbers.map( num => {
//     return num + 1;
// });
// console.log(newNum);

// var numbers = [3, 5, 8, 4, 1];
// //nhặt ra các số chẵn
// var evenNumber = numbers.filter( (num) => {
//     return num%2==0;
// } )
// console.log(evenNumber);

//Có phải tất cả các phần tử đều là chẵn hay không?
// var numbers = [3, 5, 8, 4, 1];
// var allNumberAreven = numbers.every(num => {
//     return num%2==0;
// });
// console.log(allNumberAreven);

//Cho 1 danh sách sinh viên, có phải tất cả sinh viên đều họ nguyễn hay không

// var students = ['Nguyen Van Tung', 'Nguyen Xuan Thai', 'Tao Manh Tuan', 'Nguyen Thi Nga'];

// var allHoNguyen = students.every ( student => {
//     var cacTuTrongTen = student.split(' ');
//     var ho = cacTuTrongTen[0];
//     return ho == 'Nguyen';
// });
// console.log(allHoNguyen);

// var numbers = [1, 5, 6, 3];
//Tính tổng các số
// var tong = 0;
// numbers.forEach(num => {
//     tong += num;
// });

// var totol = numbers.reduce( (tong, soHienTai) => {
//     return tong + soHienTai;
// }, 0);
// console.log(totol);

//Có bao nhiêu số chẵn trong mảng
// var sumEven = numbers.reduce((sum, i) => {
//     return sum + (i % 2 == 0);
// },0);
// console.log(sumEven);

//==================== Bài Tập ===================
// -  BT1: cho 1 mảng các tên người, xuất ra mỗi người một lời chào
// var arrName = ['nguyen tien khoi','bui van nguyen', 'nguyen phuong ly', 'ha manh tuan'];
// arrName.forEach(x => {
//     console.log('Hello '+x);
// });

// - BT2: cho một mảng các số xuất ra một mảng các số nhân đôi từ mảng cũ và sắp xếp tăng dần
// var numbers = [4, 8, 2, 4, 3, 7, 1, 9, 77];
// console.log(numbers.map(x => {
//     return x*2;
// }).sort((a,b) => {
//     if(a>b) return 1;
//     else return -1;
// }
// ));

// - BT3: cho một mảng họ tên người đầy đủ hãy đến xem có bao nhiêu người có chữ N trong tên

// var arrName = ['Nguyen tien khoi','bui van nguyen', 'Nguyen phuong ly', 'ha manh tuan'];
// var count = 0;
// var countN = arrName.filter(x => {
//     if(x.includes('N'))
//         count++;
//     return count;
// })
// console.log(count);

// var countN = arrName.reduce((count,element) => {
//     if(element.includes('N'))
//         count++;
//     return count;
// },0);

// console.log(countN);

// BT4: cho một mảng số, xuất ra mảng các số đã được thêm 2 và không chia hết cho 3

// var numbers = [4, 8, 2, 4, 3, 7, 1, 9, 77];
// var addTwo = numbers.map(x => {
//     return x + 2;
// })
// var dataProcess = addTwo.filter(x => {
//     return x%3!=0;
// });
// console.log(dataProcess);

// BT5: cho 1 mảng các chiều cao (cm). 
//         . Điều kiện:
//             . cao < 165: size S
//             . cao 165 -> 170: size M
//             . cao > 170: size L
//         . Đếm xem có bao nhiêu người mặc size: S
//         . Đếm xem có bao nhiêu người mặc size: M
//         . Đếm xem có bao nhiêu người mặc size: L

var height = [145, 166, 170, 154, 164, 180];
var sizeS = 0; sizeM = 0; sizeL = 0;
height.forEach(x => {
    if(x < 165)
        sizeS++;
    else if(x > 170)
        sizeL++;
    else
        sizeM++;
});
console.log('Size S has '+sizeS+' people');
console.log('Size M has '+sizeM+' people');
console.log('Size L has '+sizeL+' people');
