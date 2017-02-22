// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Takes a number, n, and returns a array of
// all the factors of n.
function factorsOf(n) {
    var factors = [];
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i);
            factors.push(n/i);
        }
    }
    return factors;
}

// Takes a array of proper factors for some number, n,
// and returns a array of the prime factors of n.
function factorsToPrimes(factors) {
    var primes = [];
    // Go through each factor
    for (var i=0; i<factors.length; i++) {
        var iIsPrime = true;
        // Check to see if any other factor divides it
        for (var j=0; j<factors.length; j++) {
            if (factors[i]%factors[j] == 0 && i != j)
                iIsPrime = false;
        }
        // If no other factor divides it, it must be prime
        if (iIsPrime)
            primes.push(factors[i]);
    }
    return primes;
}

var primeFactors = factorsToPrimes(factorsOf(600851475143));

primeFactors.sort(function(a, b){return a-b});

console.log(primeFactors[primeFactors.length-1]);
