//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

//What is the 10 001st prime number?

function isPrime(input) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (input > 1);
}

let primes = [];
let input = 1;

while (primes.length < 10001) {
	if (isPrime(++input)) {
		primes.push(input);
	}
}

console.log(primes[primes.length - 1]);
