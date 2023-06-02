function steamrollArray(arr) {
	let flattenedArray = [];
	arr.forEach((item) => {
		if (Array.isArray(item)) {
			flattenedArray.push(...steamrollArray(item));
		} else {
			flattenedArray.push(item);
		}
	});
	return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
