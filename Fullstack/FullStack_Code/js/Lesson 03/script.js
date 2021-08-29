//---------------------- String ----------------------

// var ho = 'bui van ';
// var ten = 'nguyen';
// var hoten = ho + ten;
// console.log(hoten)
// console.log(ho.length); lấy ra độ dài

// var name1 = 'bui van nguyen';
// var vietHoa = name1.toUpperCase();
// console.log(vietHoa);

// var name1 = 'bui vAn NguYen';
// var vietThuong = name1.toLowerCase();
// console.log(vietThuong);

// var name1 = 'bui van nguyen';
// var catChuoi = name1.substring(6,-8);
// console.log(catChuoi);

// var name1 = 'bui van nguyen';
// var catChuoi = name1.substr(1,3);//cắt từ vị trí 1 3 kí tự
// console.log(catChuoi);

//Cắt 4 kí tự cuối cùng
// var name1 = 'bui van nguyen';
// console.log(name1.length);
// console.log(name1)
// console.log(name1.substr(name1.length-4, name1.length));
// console.log(name1.substr(-4));

// var name1 = 'bui van nguyen nguyen';
// console.log(name1);
// console.log(name1.replace('nguyen', 'tung'));//thay từ đầu tiên
// console.log(name1.replace('/nguyen/', 'tung'));//thay từ tất cả

// var name1 = '       bui van nguyen nguyen                   ';
// console.log(name1);
// console.log(name1.trim());

// var name1 = 'bui van nguyen';
// console.log(name1.indexOf('b'));//vị trí đầu tiên

// var name1 = 'bui van nguyen';
// console.log(name1.lastIndexOf('n'));//vị trí cuối cùng

// var name1 = 'bui van nguyen';
// var cat = name1.slice(4,7);
// console.log(cat);

// var name1 = 'bui van nguyen';
// console.log(name1.charAt(5));

// var name1 = 'bui van nguyen';
// var words = name1.split(' ');
// console.log(words);

//---------------------- Number ----------------------

// var tuoiCha = 35;
// var tuoiCon = 6;

// var tong = tuoiCha % tuoiCon;

// console.log('Tong: ',tong);

//---------------------- function ----------------------

// var chaoHoi = function () {
//     console.log('Toi ten la nguyen');
// }
// chaoHoi();
// function chaoHoi() {
//     console.log('Toi ten la nguyen');
// }
// chaoHoi();

// function chaoHoi(name, age) {
//     console.log('Xin chao');
//     console.log('Toi ten la: '+name);
//     console.log('Toi '+ age + ' tuoi');
// }
// chaoHoi('Nguyen', 30);
// chaoHoi('Tuan', 23);

// var sum1 = function(a,b) {
//     return a+b;
// }
// console.log(sum1(3,4));

// function cong(a,b) {
//     var sum = a + b;
//     return sum;
// }
// var sum = cong(5,4);
// console.log(sum);

// function cong(a,b = 1) {
//     return a+b;
// }
// console.log(cong(5));

// function cong(a,b = 1) {
//     return a+b;
// }
// console.log(cong(5,8));

// var cong = (b,c) => {
//     return b+c;
// }
// console.log(cong(1,2));

//======= Các cách để viết 1 hàm ======
// function cong(a,b) {
//     return a+b;
// }
// var cong = function(a,b) {
//     return a+b;
// }
// var cong = (a,b) => {
//     return a+b;
// }
// console.log(cong(1,2));

// function chaoHoi(name) {
//     console.log('Toi ten la: '+name);
// }
// var chaoHoi = function(name) {
//     console.log('Toi ten la: '+name);
// }
// var chaoHoi = name => {
//     console.log('Toi ten la: '+name);
// }
// chaoHoi('Nguyen');
//=====================================
// var chaoHoi = (name, chaoXong) => {
//     console.log('Xin chao, toi ten la: '+name);
//     chaoXong();
// }

// var batTay = () => {
//     console.log('bat tay');
// }

// var anCom = () => {
//     console.log('An com');
// }

// chaoHoi('Nguyen', () => {
//     console.log('Nguyen chao xong');
// });
// chaoHoi('Tung', anCom);

//================= Practice =================
var split = s => {
    return s.split('n');
}

console.log(split('nguyen tien khoi'));
