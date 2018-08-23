// dinh nghia va lam viec voi chuoi (string) trong js
let myString = "This is class LPHP1806E";
console.log(typeof myString);
//console.log(typeof(myString));
// cac phuong thuc (cac ham) lam viec voi js - luu y : day la cac phuong thuc co san cua js
let postChar = myString.indexOf('PHP');
console.log(postChar);
let postChar2 = myString.indexOf('PHP', 17);
console.log(postChar2);
let postChar3 = myString.lastIndexOf('PHP', 17);
console.log(postChar3);

let fruit = 'tao man oi,le';
let arrFruit = fruit.split(','); // chuyen chuoi ve mang
console.log(arrFruit, typeof arrFruit);

let newStr = myString.slice(13,8);
console.log(newStr);
let newStr2 = myString.substr(8,13);
console.log(newStr2);
let newStr3 = myString.substring(13,8);
console.log(newStr3);

myString = myString.toLowerCase(); // ve chu thuong
console.log(myString);

myString = myString.toUpperCase(); // ve chu hoa
console.log(myString);

fruit = fruit.replace('le','dua');
console.log(fruit);

let js = "chung ta dang hoc js vao buoi thu nam";

function xuLyChuoiTrongJS(charater, str) {
    let newString;
    let p = str.indexOf(charater);

    if(p != -1){
        // tim thay
        newString = str.slice(p, str.length);
    } else {
        // khong tim thay
        newString= str.slice(0, Math.floor((str.length)/2));
    }

    return newString;
}

let kq = xuLyChuoiTrongJS('js', js);
console.log(kq);

let url = "https://thethao.vnexpress.net/tin-tuc/cac-mon-khac/cau-may-nu-viet-nam-bi-xu-ep-o-ban-ket-asiad-3796349.html";

let searchIdUrl = (url) => {
    let arrUrl = url.split('-');
    let strId = arrUrl.pop();
    let pos = strId.indexOf('.');
    let id = strId.slice(0, pos);
    return id;
}

let kqURL = searchIdUrl(url);
console.log(kqURL);

let myNumber = '1000';
myNumber = eval(myNumber);
console.log(typeof myNumber);

let numStr = 10000;
numStr = toString(numStr);
console.log(typeof numStr);

/**********************************************************/
// xu ly ve date trong js

let myDate = new Date();
// lay ra thong tin ngay thang hien tai
console.log(myDate);

let d = new Date(2018,(8-1),22);
console.log(d);

let myDay = myDate.getDay() + 1;
let date = myDate.getDate(); // 22 : hien tai
let month = myDate.getMonth() + 1;
let time = myDate.getTime();
console.log(myDay, date, month, time);
let time2 = Date.parse('2018-08-22'); // 00h22 - 24h21
console.log(time, time2);

myDate.setDate(29); // thiet lap lai ngay
let date2 = myDate.getDate();
console.log(date2);

let birthDay = prompt('nhap sinh nhat cua ban - hay nhap theo dinh dang yyyy-mm-dd');

let CheckYourBirthday = (birthday) => {
    let currentDate = new Date();
    let days = currentDate.getDate();
    days = (days < 10) ? "0"+days : days;

    let month = currentDate.getMonth() + 1;
    month = (month < 10) ? "0"+month : month;

    let year = currentDate.getFullYear();
    let myDays = year+"-"+month+"-"+days;

    // khong quan tam nguoi dung nhap nam bao nhieu
    // toi chi can lay ra duoc ngay va thang nguoi dung nhap vao roi noi voi nam hien tai
    // let myStrBirthDay = birthday.split('-');

    // luon luon tra ve dinh dang nam-thang-ngay cua ngay hien tai
    //
    // can kiem tra xem ngay ma nguoi dung nhap vao voi ngay hien tai ma chung ta vua tinh duoc, xem thang nao lon ho hay nho hon hay bang nhau
    let timeCurrent = Date.parse(myDays);
    let timeBirthday = Date.parse(birthday);
    // so sanh chung
    if(timeCurrent  < timeBirthday){
        // chua toi sinh nhat - can tinh con bao nhieu ngay
        let ranDay = timeBirthday - timeCurrent;
        let kq = (ranDay/86400000);
        return kq;
        // ranDay :  milisecond => day
        // dung cac meo ve toan hoc doi ve so ngay
    } else if(timeCurrent == timeBirthday){
        // chuc mung sinh nhat no luon
        return "Happy birthday to you";
    } else {
        // thong bao cho no biet qua sinh nhat roi
        return "Sorry you";
    }
}

console.log(CheckYourBirthday(birthDay));
