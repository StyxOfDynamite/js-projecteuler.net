// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// helper function to determine if a number is palindromic by casting it to a string
//  and comparing it against itself reversed
function isPalindrome(input) {
    input = String(input);
    return input === input.split('').reverse().join('');
}

// initial state
var min = 100;
var max = 999;
var found = 0;
var a = 0;
var b = 0;

for (var i = max; i >= min; i--) {
    for (var j = max; j >= min; j--) {
        var result = i * j;
        if (isPalindrome(result)) {
            if (result > found) {
                found = result;
                a = i;
                b = j;
            }
        }
    }
}

console.log(a + ' times ' + b + ' = ' + found);