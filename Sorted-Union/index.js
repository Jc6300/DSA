function uniteUnique(...arr) {
	let result = new Set(); // create a new Set object to store unique elements
	for (let i = 0; i < arr.length; i++) {
		// iterate through each input array
		for (let j = 0; j < arr[i].length; j++) {
			// iterate through each element in the current input array
			result.add(arr[i][j]); // add the current element to the result set
		}
	}
	return [...result]; // convert the result set to an array and return it
}
