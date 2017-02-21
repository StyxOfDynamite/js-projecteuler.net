// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function factorsOf(n) {
	var factors = [];
	for (var i = 1; i <= n; i++) {
		if (n % i === 0) {
  		factors.push(i);
  	}
	}
  return factors;
}

function isPrime(number) {
	for (var i=2; i < number; i++) {
  	if (number % i === 0) {
    	return false;
    }
  }
  return number > 1;
}

function primes(factors) {
	var primes = [];
	for (var i=1; i<factors.length; i++) {
  	if (isPrime(factors[i])) {
    	primes.push(factors[i]);
    }
  }
  return primes;
}


var factors = factorsOf(13195);
var arr = primes(factors);

console.log(arr[arr.length-1]);
