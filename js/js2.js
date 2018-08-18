// dinh nghia ham trong js
// do lap trinh vien tao ra -  chu khong phai la cac ham co san cua js
function myFunction(name = 'ABC') {
    // name : tham so
    // myFunction :  ten cua ham
    console.log(name);
}
// su dung ham trong js ntn?
let myName = "LPHP1806E";
myFunction(myName);
function mySum(a = 10, b = 100){
    return a + b;
    console.log(a);
}
let sum = mySum(10,99);
console.log(sum);
// viet 1 ham  tinh tong cac so le tu 1 - 100;
function sumNumber(i = 1, j =100 ){
    let sum = 0;
    for(let k = i; k <= j; k++){
        if(k % 2 != 0){
            sum += k;
        }
    }
    return sum;
}
console.log(sumNumber(1,1000));
// viet ham kiem tra so nguyen to
function kiemTraSNT(number){
    if(number <= 0){
        return false;
    }
    if(number == 1 || number == 2){
        return true;
    }
    // kiem tra tu 2 cho toi can bac hai cua so do
    let check = true;
    for(let i = 2; i<= Math.sqrt(number); i++){
        if(number % i == 0){
            check = false;
            break;
        }
    }
    return check;
}
let myCheckNum = 10;
let kt = kiemTraSNT(myCheckNum);
if(kt){
    //console.log(myCheckNum + 'la so nguyen to');
    console.log(`${myCheckNum} la so nguyen to`);
} else {
    //console.log(myCheckNum + ' khong la so nguyen to');
    console.log(`${myCheckNum} khong la so nguyen to`);
}

// ham khong ten trong js
let test = function(test){
    return test;
}
console.log(typeof(test));
console.log(test('ABC123'));
// viet ham kiem tra nam nhuan duong lich
let  kiemTraNamNhuanDL = function(year){
    if(year <= 0){
        return false;
    } else if(year % 400 == 0){
        return true;
    } else if(year % 4 == 0 && year % 100 != 0){
        return true;
    } else {
        return false
    }
}
// viet ham tim tat ca BSC cua 2,3 tu 1-100;
let timBSN = function(a =2,b=3,i=1,j=100) {
    let result = '';
    for(let k = i; k<= j; k++){
        if(k % a == 0 && k % b == 0){
            result += (result == '') ? k : ',' + k;
        }
    }
    return result;
}

console.log(timBSN());

function chuViHCN(a,b){
    // tinh tong cua 2 canh
    function sumHCN(){
        return a + b;
    }
    function muplyHCN(c){
        return sumHCN()*2/c;
    }
    return muplyHCN;
}
console.log(chuViHCN(8,9)(3));
// Arrow function
// ham mui ten - ham chĩa
// let myArrow = (name) =>
//     return name;

//console.log(myArrow('ABC'));
let numberTest = 10;
function testMyFn(numberTest){
    numberTest += 10;
    return numberTest;
}
console.log(testMyFn(numberTest));
console.log(numberTest);

// viet 1 ham arrow function tu 1 - 100 co bao nhieu so  ma 60 chia het;

let num1 = 100;
let num2 = '100';
let num3 = '100.99';
// ep ve kieu so
num2 = Number.parseInt(num2); // so nguyen
num3 = Number.parseFloat(num3); // so thuc
// ==> ban chat van la kieu dl number trong js

let totalNumber = num1 + num2 + num3;
console.log(totalNumber);
let num4 = '99'; // string
// kiem tra co phai la so hay ko?
if(Number.isInteger(num4)){
    console.log('Y');
} else {
    console.log('N');
}

////////////////////////////
// Mang trong js
// mang 1 chieu
let arr = new Array(10,20,30,'tao','man','le','oi');
let arr2 = [10,20,30,'tao','man','le','oi'];
// mang da chieu
let arr3 = [
    [1,2,3,4],
    ['tao','le'],
    'age',
    'phone'
];
console.log(arr3);
// truy cap vao phan nam trong mang
// can biet chi so (key) cua phan tu o trong mang - chi so (key) luon luon dc danh tu dong tu 0
//  tenmang[chisophantu(key)];
console.log(arr[3]);
console.log(arr3[1][1]);
console.log(arr2.length);
let arr4 = [100,2,3,4,6,7,9,4,5];
let totalEl = arr4.length;
// duyet qua tat ca cac phan tu nam trong mag
let count = 0;
for(let i = 0; i < totalEl; i++){
    if(arr4[i] % 2 == 0){
        count++;
    }
}
console.log(count);
// dung forEach(): nameArr.forEach()
// arr4.forEach(function(item, index, array){
// // callback funtion cua forEach
//     console.log(item, index);
// });

for(let m of arr4) {
    console.log(m);
    // m : gia tri cua phan tu nam trong mang
    // arr4[m] : key - chi so cua phan tu
}

