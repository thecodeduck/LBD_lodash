function Drop(arr, n) {
	if (arr === undefined || !Array.isArray(arr)) {
		return [];
	}
	n = n === undefined ? 1 : Math.round(n);
	if (Number.isNaN(n)) {
		return arr;
	}
	return arr.slice(n, arr.length);
}

module.exports = Drop;
