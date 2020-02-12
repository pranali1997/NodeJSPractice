// function scaryClown(){
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             resolve('promise reolved');
//         },2000);
//     });
// }

// async function msg(){
//     const msg=await scaryClown();
//     console.log('massage is :',msg);
    
// }

// msg();



const getPromise = async (s) => {  
    console.log('ksjdhfbkjsdhfdkjs                 1');

    return new Promise((resolve, reject) => {
        console.log('ksjdhfbkjsdhfdkjs             2');

        setTimeout(() => resolve(s), 500);   
        console.log('ksjdhfbkjsdhfdkjs            3');
     
    });
}

getPromise();