function msg(num) {
	console.log('completed', num);
}

 async function test1(callback) {

 	 await setTimeout(function() {
        console.log('middle one');

		var prime = 0;
		var flag = true;
		for (var i = 3; i < 1000; i++) {
			flag = true;
			for (var j = 2; j < i; j++) {
				if (i % j === 0) {
					flag = false;
					break;
				}
			}
			if (flag) {
				console.log(i);
				prime += 1;
			}
		}
		callback(prime);
    }, 0);
    console.log('another middle ');
    
}


var a= console.log('started');
var b=test1(msg);
var c=console.log('finished');

