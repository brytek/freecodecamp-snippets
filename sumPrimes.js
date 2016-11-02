// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. 
// For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(max) {
  var sum,
      sieve = [], 
      primes = [];
  for (var i = 2; i <= max; i++) {
    if (!sieve[i]) {
      primes.push(i);
      for (var j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  sum = primes.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum;
}
