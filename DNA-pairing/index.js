function pairElement(str) {
	// Create an object with the base pairs
	const pairs = {
		A: "T",
		T: "A",
		C: "G",
		G: "C",
	};

	// Split the string into an array of characters
	const chars = str.split("");

	// Map each character to an array with the character and its pair
	const result = chars.map((char) => [char, pairs[char]]);

	return result;
}
