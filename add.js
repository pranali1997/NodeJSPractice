var z = require('./z')

module.exports = {
    // callback

    // addition(x, y, cb) {
    //     return cb(x + y)
    // }

    // Promises

    // addition(x, y) {
    //     return new Promise((resolve, reject) => {
    //         var sum = x + y
    //         if (sum == 3) {
    //             resolve(x + y)
    //         }
    //         else {
    //             reject("Somethign went wromng")
    //         }
    //     })
    // }

    addition(x, y) {
        return z.addition(x, y)
    }
} 