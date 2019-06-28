//The sum of the squares of the first ten natural numbers is,

//1^2 + 2^2 + ... + 10^2 = 385

//The square of the sum of the first ten natural numbers is,

//(1 + 2 + ... + 10)^2 = 55^2 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumTo(number) {

	sum = 0;

	for (var i = 0; i <= number; i++) {
		sum += i;
	}

	return sum;
}

function squared(number) {
	return number * number;
}

function sumOfSquaredTo(number) {
	sum = 0;
	for (var i = 0; i <= number; i++) {
		sum += squared(i);
	}
	return sum;
}

console.log(squared(sumTo(100)) - sumOfSquaredTo(100));