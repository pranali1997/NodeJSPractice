// var employeeDetail = require('./employee.json')
var detail = require('./xyz.json')
/*{
    "pranali": "hello",
    "prasad": "hi",
    "nisaa": "hie",
    "sachin": "kaa manhtey"
}*/

function employee() {
    // let details = employeeDetail
    // console.log(details)
    // console.log(details.EMPLOYEE)
    var keys = Object.keys(detail)
    console.log(keys.length)
    for (var i = 0; i < keys.length; i++) {
        // console.log(employeeDetail.EMPLOYEE[i].name + " " + employeeDetail.EMPLOYEE[i].salary)
        console.log(keys[i])
    }
}

employee()