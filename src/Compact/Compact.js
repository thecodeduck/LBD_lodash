function Compact(arr) {
	if (arr === undefined || !Array.isArray(arr)) {
		return [];
	}
	const result = [];
	const l = !arr.length ? 0 : arr.length;
	for (let i = 0; i < l; i++) {
		if (arr[i]) {
			result.push(arr[i]);
		}
	}
	return result;
}

module.exports = Compact;
