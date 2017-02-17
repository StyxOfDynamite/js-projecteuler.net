//

var fib = [1,2];
var max = 4000000;
var i = 2;
var loop = true

while (loop) {
	if (fib[i-1] + fib[i-2] > max) {
  		loop = false;
  	} else {
		fib.push(fib[i-1] + fib[i-2]);
  		i++;
    }
}

console.log(fib);
