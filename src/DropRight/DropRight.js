function DropRight(arr, n) {
	if (arr === undefined || !Array.isArray(arr)) {
		return [];
	}
	n = n === undefined ? 1 : Math.round(n);
	if (Number.isNaN(n)) {
		return arr;
	}
	return arr.slice(0, arr.length - n);
}

// Always check for unexpected inputs, like Objects


module.exports = DropRight;
