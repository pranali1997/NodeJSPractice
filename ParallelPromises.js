async.parallel([
    function(callback){
        setTimeout(() => {
            console.log('task one');
            callback(null,1);
        }, 200);
    },
    function(callback){
        setTimeout(() => {
            console.log('task two');
            callback(null,2);
        }, 100);
    }
],
    function(err,result){
        console.log(result);
    });
