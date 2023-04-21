function titleCase(str) {
	return str.toLowerCase().replace(/(^|\s)\S/g, function (letter) {
		return letter.toUpperCase();
	});
}

function titleCase(str) {
	// Split the string into an array of words
	let words = str.split(" ");

	// Capitalize the first letter of each word and make sure the rest of the word is in lower case
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
	}

	// Join the words back into a string
	return words.join(" ");
}
// Two different answers
