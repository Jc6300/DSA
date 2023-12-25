// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function sym() {
	// Convert the arguments object into an array
	let args = Array.from(arguments);

	// Function to reduce the array and find the symmetric difference
	let symDiff = function (arr1, arr2) {
		// Create an array from the union of the two arrays and filter out all elements that are not included in both arrays
		return arr1
			.concat(arr2)
			.filter((item) => arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1);
	};

	// Reduce the arguments array with the helper function inside
	return [...new Set(args.reduce(symDiff))];
}
