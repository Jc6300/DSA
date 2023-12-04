// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

// A substring is a contiguous sequence of characters within a string.
// There may be leading zeroes in num or a good integer.

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
	let max = "";
	for (let i = 0; i < num.length - 2; i++) {
		let substring = num.substring(i, i + 3);
		if (substring[0] === substring[1] && substring[1] === substring[2]) {
			if (substring > max) {
				max = substring;
			}
		}
	}
	return max;
};
