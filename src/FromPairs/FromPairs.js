function FromPairs(arr) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;
	const result = {};
	if (l === 0) {
		return {};
	}
	for (let i = 0; i < l; i++) {
		if (arr[i]) {
			let x = arr[i];
			result[x[0]] = x[1];
		}
	}
	return result;
}

module.exports = FromPairs;
