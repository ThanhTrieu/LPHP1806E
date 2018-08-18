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
