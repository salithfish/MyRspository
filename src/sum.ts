//普通函数
function sum(x,y){
    return x+y;
}

//Function函数
let sum1 = new Function("x", "y", "return x+y;");
document.write(sum1(3,2));

//添加类型
function sum2(x:number,y:number):number{
    return x+y;
}

// 匿名函数
let  sum3  = function(x,y){return x+y};

//自执行的匿名函数
let sum4 = (function (x, y) { return x + y; }(3,2));
document.write(String(sum4));

//箭头函数
let sum5 = (x, y) => x + y ;// (x,y)=>{return x+y;}
document.write(sum5(3, 2));