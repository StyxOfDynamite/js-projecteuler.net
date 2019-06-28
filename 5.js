//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function isDivisible(number) {
	for (d = 1; d <=20; d++) {
		if (number % d === 0) {
			continue;
		} else {
			return false;
		}
	}
	return true;
}

var number = 2;
do {
	number += 2;
} while (! isDivisible(number));

console.log(number);