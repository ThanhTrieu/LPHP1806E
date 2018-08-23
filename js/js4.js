// dinh nghia object trong js
let car = {
    name: "BMV",
    weight: 500,
    color: "red",
    drive: function(a){
        return "40km/h";
    },
    stop: function(b){
        return "HN";
    }
};
// name : key (chi so) cua object
// "BMV": value tuong ung cho key do
// su dung object trong js
// nameObject.key; // truy cap vao thuoc tinh
// nameObject.method(); // truy cap vao phuong thuc
let nameCar = car.name;
console.log(nameCar);
let driveCar = car.drive();
console.log(driveCar);

let person = {
    info: {
        work: {
            name: "LTV",
            company: "ABC"
        }
    }
};
console.log(person.info.work.name);
let student = {
    name: "ABC",
    age: 20,
    address: "HN",
    phone: "0987654",
    email: "abc@gmail.com"
}
for(let i in student){
    console.log(student[i], i);
}

// constructor function - dung ham de tao 1 object
function sumNumber(a,b){
    this.hsa = a;
    // this.hsa : thuoc tinh
    this.hsb = b;
    // dinh nghia phuong thuc
    this.total = function(){
        return this.hsa + this.hsb;
    }
}
let sum = new sumNumber(5,6);
console.log(sum.total());
// su dung contructor fn nay viet giai PTBH
function PTBH(a,b,c){
    // khai bao thuoc tinh
    this.hsa = a;
    this.hsb = b;
    this.hsc = c;
    this.delta = function(){
        let d = (this.hsb * this.hsb) - (4*this.hsa*this.hsc);
        return d;
    };
    this.nghiem = function(){
        let mydt = this.delta();
        if(mydt < 0){
            return false;
        } else if(mydt == 0){
            return x;
        } else {
            let n1 = aassas;
            let n2 = fdfdf;
            return [n1, n2];
        }
    }
}


let numberText = prompt('Moi ban nhap so');
console.log(numberText);
console.log(typeof(numberText));

function checkNumber(num){
    this.myNumber = num;
    this.check = function(){
        if(this.myNumber % 2 == 0){
            return true;
        }
        return false;
    }
}
//numberText = Number.isInteger(numberText); // kiem tra co phai la so
numberText = Number.parseInt(numberText); // ep ve kieu so nguyen
console.log(typeof(numberText));

let myTest = new checkNumber(numberText);
let res = myTest.check();

if(res){
    console.log(`${numberText} la so chan`);
} else {
    console.log(`${numberText} la so le`);
}

let year  = prompt('Moi nhap nam');

function checkYear(y){
    // khai bao thuoc tinh
    this.year = y;
    this.myCheckYear = function(){
        // giai quyet van de o day
        // kiem tra this.year la nam nhuan hay ko
        if(this.year % 400 == 0){
            return true;
        } else if(this.year % 4 == 0 && this.year % 100 != 0){
            return true;
        } else {
            return false;
        }
    }
}
year = Number.parseInt(year);
let myYear = new checkYear(year);
let myRes = myYear.myCheckYear();
if(myRes){
    console.log(`${year} la nam nhuan`);
} else {
    console.log(`${year} la so ko nhuan`);
}
