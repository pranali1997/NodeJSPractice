function who() {
    // return new Promise(resolve => {
    setTimeout((cb) => {
        return cb('resolved');
    }, 2000);
    // });
}

function what() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('lurks');
        }, 300);
    });
}

function where() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('in the shaodws');
        }, 500);
    });
}


async function msg() {
    console.log("1")
    console.log("2")
    who(cb((data) => {
        console.log("3--> ",data)
    }));

    // who()
    //     .then((data) => {
    //         console.log(data)
    //     })
    //     .then((data) => {
    //         console.log(data)
    //     })
    //     .catch((e) => {
    //         console.error(e)
    //     })

    // const b=await what();
    // const c=await where();


}

msg();
