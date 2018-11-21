function LastIndexOf(arr, value, index) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;
	let i = index ? Math.floor(index) : l - 1;
	if (i < 0) {
		i = Math.max(l + i, 0);
	}
	let result = -1;
	// they don't use a true modulo here
	if (l === 0) {
		return result;
	}
	for (i; i >= 0; i--) {
		if (arr[i] === value) {
			result = i;
			return result;
		}
	}
	return result;
}

// Doesn't handle deeper array

module.exports = LastIndexOf;
