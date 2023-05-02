function sumPrimes(num) {
	let isPrime = new Array(num + 1).fill(true);
	let sum = 0;

	// Start with the first prime number, 2
	for (let i = 2; i <= Math.sqrt(num); i++) {
		// If i is prime, mark all its multiples as composite
		if (isPrime[i]) {
			for (let j = i * i; j <= num; j += i) {
				isPrime[j] = false;
			}
		}
	}

	// Sum up all prime numbers less than or equal to num
	for (let i = 2; i <= num; i++) {
		if (isPrime[i]) {
			sum += i;
		}
	}

	return sum;
}
