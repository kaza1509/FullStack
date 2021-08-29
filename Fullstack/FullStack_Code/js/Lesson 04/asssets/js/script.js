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

var numbers = [1, 5, 6, 3];
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
var sumEven = numbers.reduce((sum, i) => {
    return sum + (i % 2 == 0);
},0);

console.log(sumEven);
