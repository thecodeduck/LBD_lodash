function Nth(arr, n) {
	const result = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : undefined;
	n = n === undefined || isNaN(n) ? 0 : Math.floor(n);
	if (result === undefined || result.length === 0) {
		return undefined;
	}
	return result[n];
}

module.exports = Nth;
