function IndexOf(arr, value, index) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	// let i = typeof (index) === 'number' ? Math.floor(index) : 0;
	let i = index ? Math.floor(index) : 0;
	const l = arr.length;
	if (i < 0) {
		i = Math.max(l + i, 0);
	}
	let result = -1;
	// Lodash doesn't use a true modulo here
	if (l === 0) {
		return result;
	}
	for (i; i < l; i++) {
		if (arr[i] === value) {
			result = i;
			return result;
		}
	}
	return result;
}

// Doesn't handle deeper array

module.exports = IndexOf;
