function sumAll(arr) {
	// Get the minimum and maximum values in the array
	let min = Math.min(arr[0], arr[1]);
	let max = Math.max(arr[0], arr[1]);

	// Calculate the sum using a loop
	let sum = 0;
	for (let i = min; i <= max; i++) {
		sum += i;
	}

	return sum;
}

sumAll([1, 4]);
