function Fill() {
	let arr = arguments[0] ? arguments[0] : [];
	const n = arguments[1];
	let start = Number.isInteger(Math.round(arguments[2])) ? Math.round(arguments[2]) : 0;
	const end = Number.isInteger(Math.round(arguments[3])) ? Math.round(arguments[3]) : arr.length;

	if (arr === [] || !Array.isArray(arr)) {
		if (typeof arr === 'string') {
			return arr;
		} else {
			return [];
		}
	}
	for (start; start < end; start++) {
		arr[start] = n;
	}
	return arr;
}

// Always check for unexpected inputs, like Objects
// Results don't match for unexpected inputs on anything other than string??
// need to check for arrays passed in as start and end

module.exports = Fill;
