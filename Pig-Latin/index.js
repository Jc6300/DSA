function translatePigLatin(str) {
	const vowels = ["a", "e", "i", "o", "u"];

	if (vowels.includes(str[0])) {
		// If the first letter is a vowel, add "way" to the end
		return str + "way";
	} else {
		// If the first letter is a consonant, move it to the end and add "ay"
		let consonantCluster = "";
		let i = 0;
		while (!vowels.includes(str[i]) && i < str.length) {
			consonantCluster += str[i];
			i++;
		}
		return str.slice(i) + consonantCluster + "ay";
	}
}
