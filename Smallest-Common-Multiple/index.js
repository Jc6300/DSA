function smallestCommons(arr) {
	// sort the array in ascending order
	arr.sort(function (a, b) {
		return a - b;
	});
	// find the GCD of the two numbers in the range
	function gcd(a, b) {
		return b === 0 ? a : gcd(b, a % b);
	}
	// calculate the LCM of all numbers in the range
	let lcm = arr[0];
	for (let i = arr[0] + 1; i <= arr[1]; i++) {
		lcm = (lcm * i) / gcd(lcm, i);
	}
	return lcm;
}
