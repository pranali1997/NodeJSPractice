// var require=require('../employee.json')
var fs=require('fs');

// fs.(require,'uft8')
// console.log(readLine);

function reading(){
var ws = fs.readFileSync('./ex.json','utf8',function(error,data){
    console.log(data);
})

console.log(ws)

console.log('jdhascgfjshcbg');
}


reading()
var ws=fs.readFileSync('./ex.json','utf8')

fs.writeFileSync('written1.json',ws)