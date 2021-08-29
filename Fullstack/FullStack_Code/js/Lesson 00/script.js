// var number = [1, 2, 3, 4, 5];
// var number = new Array(1, 2, 3, 4, 5);
// console.log(number);

// const number = [1, 2, 3];
// console.log(number.push(7));//trả về độ dài + add cuối
// console.log(number) // [1, 2, 3, 5]

// const number = [1, 2, 3];
// console.log(number.pop());
// console.log(number); // [1, 2]

// const number = [1, 2, 3];
// console.log(number.shift());//trả về pt đầu và xoá nó
// console.log(number);

// const number = [1, 2, 3, 5, 6];
// console.log(number);
// number.splice(2,1);
// console.log(number);

// const number = [1, 2, 3, 4];
// console.log(number.includes(2));

// const number = [1, 2, 3, 4, 3, 4];
// console.log(number.indexOf(-3));//trả về vị trí số 4 đầu tiên

// const number = [1, 2, 3, 4, 3, 4];
// console.log(number.lastIndexOf(4));

// const number = [1, 2, 3, 4, 3, 4];
// console.log(number.join('->'));

//================= forEach =================
// dùng để duyệt các phần tử và xử lí nó nhưng không thể trả về
// const numbers = [1, 2, 3, 4, 3, 4];
// var sum = 0;
// numbers.forEach(number => {
//     sum+=number;
// })
// console.log(sum);

// function sumOfArray(numbers){
//     numbers.forEach(function sumElement(element){
//       console.log(element);
//     });
// }
// console.log(sumOfArray([1,2,3]));

//=================== map ==================
// Dùng để duyệt qua từng phần tử có trả trả về mảng
// const numbers = [1, 2, 3, 4, 3, 4]; 
// var sum = 0;
// let total = numbers.map(element => {
//     return sum *= element;
// });
// console.log(sum);

// const numbers = [1, 2, 3, 4, 3, 4];
// var arrChange = numbers.map(element => {
//     return element%2==0;
// });
// console.log(arrChange);

//================== filter =================
// Dùng để chọn lọc phần tử theo điều kiện
// const numbers = [1, 2, 3, 4, 3, 4]; 
// let result = numbers.filter(element => {
//     return element!=3;
// });
// console.log(result);

//================== every =================
// Dùng để xác định đúng hoặc sai, nếu mảng có ít nhất phần tử sai => sai còn lại là đúng
// const numbers = [1, 2, 3, 4, 3, 4]; 
// console.log(numbers.every(element => {
//     return element%2==0;
// }));

//================== reduce =================
const numbers = [1, 2, 3]; 
var sum = numbers.reduce((tong,current) => {
    return tong+current;
},0);
console.log(sum);
