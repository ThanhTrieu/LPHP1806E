function hello(){
    alert('Ban da clik vao toi');
}

function myOnBlur(){
    console.log('This is event blur');
}

function myOnfocus(){
    //alert('This is event focus');
    console.log('This is event focus');
}
function myChange(obj){
    console.log(obj.value);
    let gender = obj.value;
    if(gender == 1){
        console.log('ban la nam');
    } else if(gender == 0){
        console.log('ban la nam');
    } else {
        console.log('khong xac dinh');
    }
}
function myDbClick(){
    console.log('dbclick');
}
function myError(){
    console.log('khong tai dc trang')
}
function myKeyDown(){
    console.log('key-down');
}
function myKeyPress(){
    console.log('key-Press');
}
function myKeyUp(){
    console.log('key-Up');
}
function myLoad(){
    console.log('tai trang web hoan toan');
}
function myMouseDown(){
    console.log('mouse down');
}
function myMouseMove(){
    console.log('mouse move');
}
function myMouseOver(obj){
    obj.width =300;
    obj.height = 300;
    console.log('mouse over');
}
function myMouseOut(obj){
    obj.width = 150;
    obj.height =150;
}
function myMouseUp(){
    console.log('mouse up');
}
function myResize(obj){
    console.log(obj);
}
function mySelect(ob){
    let data = ob.value;
    console.log(data);
}

window.onbeforeunload = function(){
    return "Exit";
}