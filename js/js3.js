// tiep tuc lam viec voi mang trong js
let number = [100,300,5,3,7,8,0,10];
// them con so 1000 vao cuoi mang
number.push(1000);
console.log(number);
for(let  i = 1; i <= 10; i++){
    if(i%2==0){
        number.push(i);
    }
}
console.log(number);
// xoa bo phan tu nam cuoi mang va tra ve chinh no
let last = number.pop();
console.log(last);
console.log(number);
// xoa bo phan tu nam dau tien trong mang va tra ve chinh no
let first = number.shift();
console.log(first);
console.log(number);
// them 1 phan tu vao dau mang
number.unshift(last);
console.log(number);
// tim cac phan nam trong mang
let number2 = [1,2,3,4,5,6,7,8,9,10];
let pos = number2.indexOf(5,10);
console.log(pos);
let pos2 = number2.lastIndexOf(5,6);
console.log(pos2);
// dao cac phan tu nam trong mang
//number2.reverse();
//console.log(number2);
// cat 1 mang con tu mang cha
let newArr = number2.slice(7,9);
console.log(newArr);
let newArr2 = number2.splice(3,3,400,500,600);
console.log(number2);

// kiem tra xem phan tu 500 co nam trong mang hay ko? neu co tra ve 1 mang moi bat tu vi tri no xuat hien cho den het mang. neu khong them no vao dau mang.
//  viet ham trong js
// [500,600,7,8,9,10]
// [500,1,2,3,4,5,6,7,8,9,10];
let myEx = (number2) => {
    // code in here
    // kiem tra 500 co nam trong mang ko
    let posNumber = number2.indexOf(500);
    if(posNumber != -1){
        // co ton tai trong mang
        // cat  hay tra ve 1 mang moi bao gom cac phan tu tu vi tri ma thang 500 no xuat hien cho den het mang
        let newArr3 = number2.slice(posNumber,number2.length);
        return newArr3;
    } else {
        // khong ton tai trong mang
        number2.unshift(500);
        return number2;
    }
}

console.log(myEx(number2));

let myNumberArr = [1,2,3,5,6,7,8,9,10];
// kiem tra xem so 4 co nam trong mang ko ? neu co tra ve 1 mang moi la cac phan tu chia het cho 5 nam trong mang, neu ko, them thang 4 vao giua mang.
// viet ham
// [5,10];
let myExp2 = (arr) => {
    let posEl = arr.indexOf(4);
    if(posEl != -1){
        let myArr = [];
        arr.forEach( function(element, index) {
            if(element % 5 == 0){
                myArr.push(element);
            }
        });
        return myArr;
    } else {
        // them thang so 4 vao giua mang
        let arr1 = arr.slice(0, Math.floor(arr.length/2));
        let arr2 = arr.slice(Math.floor(arr.length/2), arr.length);
        arr1.push(4);
        arr2.forEach( function(el, i) {
            arr1.push(el);
        });
        return arr1;
    }
}
console.log(myExp2(myNumberArr));
let result = myExp2(myNumberArr);
// chuyen mang ve chuoi
let result2 = result.join();
console.log(result2, typeof(result2));
// chuyen mang ve chuoi
let result3 = result.toString();
console.log(result3, typeof(result3));
// kiem tra 1 bien co phai la mang hay ko?
// let a = true;
// if(a){
//     console.log('Y');
// }
if(Array.isArray(result)){
    console.log('Yes');
}
// sap xep mang
console.log(result);
result.sort(function(b,a){
    return a-b;
});
console.log(result);

let arrMySort = [9,4,5,6,100,3,10,11,23];
// viet ham sap xep mang theo tang dan hoac giam dan tuy y. (Tuy y lua chon cac thuatj sap xep - khong dc dung ham co san)
let sapXepMangKhongDungHam = (myArr) => {
    // dung thuat toan noi bot
    let countArr = myArr.length;
    for(let i = 0; i < countArr; i++){
        for(let j = i+1; j<= countArr; j++){
            // xu ly tiep
            if(myArr[i] < myArr[j]){
                let tg = myArr[i];
                myArr[i] = myArr[j];
                myArr[j] = tg;
            }
        }
    }

    return myArr;
}
console.log(sapXepMangKhongDungHam(arrMySort));

