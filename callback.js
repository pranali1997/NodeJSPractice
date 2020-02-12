// function first() {
//     // Simulate a code delay
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();
var add = require('./add')

// function display() {
//     var a = 1;
//     var b = 2;
//     add.addition(a, b, (data => {
//         console.log("sum--> ", data)
//     }))
// }

// function display() {
//     var a = 1;
//     var b = 2;
//     add.addition(a, b)
//         .then((data) => {
//             console.log("sum--> ", data)
//         }).catch((error) => {
//             console.error("Something went wromg", error)
//         })
// }


// function mood() {
//     console.log("i'm good")
// }

// async function display() {
//     mood()
//     var a = 1;
//     var b = 2;
//     var sum =   add.addition(a, b)
//     console.log("sum--> ", sum)
// }

// mood()

function first() {
    // var x;
    // Simulate a code delay
    var x = setTimeout(function (a = 1, b = 2) {
        add.addition(a,b)
    }, 500);
    return x;
}

function second() {
    console.log(2);
}

async function display() {
    var x = await first();
    console.log("sum--> ", x)
    second();
}

display();
