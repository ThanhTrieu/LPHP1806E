// comment cua js tren 1 dong
/*
cu phap comment tren nhieu dong
*/
alert('Hello word'); // bat thong bao
document.write('<b><i>Hello you</i></b>'); // ghi tai lieu HTML
console.log('where are you ?'); // ghi log o dev tool tren trinh duyet
confirm('abc'); // xac nhan
var a; // khai bao bien trong js
//var 1b;
//var break;
// var name # var Name
// var myName
// var myAge
console.log(typeof(a));
var b = 10;
console.log(typeof(b));
var c = 3.14;
console.log(typeof(c));
var d = "javascript";
console.log(typeof(d));
var e = true;
console.log(typeof(e));
var f = null;
console.log(typeof(f));
var num1 = 100;
var num2 = "200";
var sum = num1 - num2;
console.log(sum);
var t = '';
var t2 = false;
var t3 = 0;
var t4 = true;
var t5 = 1;
if(t === t3){
    console.log('A');
} else {
    console.log('B');
}

const PI = 3.14;
//PI = 3.15; // sai : vi const khong dc phep thay doi gia tri
console.log(PI);
function test(){
    let x = 10;
    if(true){
        x = 20;
        console.log(x);
    }
    console.log(x);
}
test();

let testNum = 100;
if(testNum == 99){
    //
} else if(testNum == 98){
    //
} else if(testNum == 100){
    //
} else if(testNum == 97){
    //
} else if(testNum == 94){

} else {

}

switch (testNum) {
    case 99:
        // statements_1
        break;
    case 98:
        break;
    case 100:
        break;
    case 101:
        break;
    default:
        // statements_def
        break;
}

// for (let i = 1; i < 100; i++){
//     for(let  j = i+1; j <= 100; j++){

//     }
// }
let  i = 10;
let j= 9;
let a2 = (i++) + (j--) + (--i) + (++j);
console.log(a2);