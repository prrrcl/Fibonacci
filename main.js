'use strict';

var limit = 30;
var num1 = 0;
var num2 = 1;
/*
if (limit > 0) {
    console.log(num1);
    console.log(num2);
    while (num1 + num2 <= limit) {

        var temp = num2;

        num2 = num1 + num2;
        num1 = temp;

        console.log(num2);
    }
}else{
    console.log(num2)
}
*/for(num1 = 0;num1 <= limit;){
    console.log(num1);
    var temp = num1 + num2;
    num1= num2;
    num2 = temp;
}