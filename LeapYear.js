function leap()
 {
    var utility=require('../nodeJs/example1');
var year=utility.inputRead();
var result=utility.leapYear(year);
console.log('yes');

 }
 leap();