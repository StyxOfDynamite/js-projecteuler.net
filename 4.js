// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

<?php

function isPalindrome($input) {
    return (string) $input === strrev($input);
}

$max = 999;
$min = 100;
$found = 0;

for ($i = $max; $i >= $min; $i--) {
    for ($j = $max; $j >= $min; $j--) {
        $result = $i * $j;
        if (isPalindrome($result)) {
            if ($result > $found) {
                $found = $result;
                $a = $i;
                $b = $j;
            }
        }
    }
}

print sprintf("Found %d times %d = %d", $a, $b, $found);
