var sum = require('./add')

function add() {
    var x = 3;
    var y = 2;
    sum.addition(x, y, (data) => {
        for (var i = 0; i < data; i++) {
            console.log(i)
        }
    })
    console.log("abc")
}

add();