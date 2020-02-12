var infinity = {
    [Symbol.iterator]: function*() {
      var c = 1;
      for (;;) {   
        yield c++;
      }
    }
  }
  
  console.log("start")
  for (var n of infinity) {
    // truncate the sequence at 1000
    if (n > 10)
      break;
    console.log(n);
  }
  