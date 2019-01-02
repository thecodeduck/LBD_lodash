function Uniq(arr) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;

	if (l === 0) {
		return [];
	}
	const result = [];
	const set = new Set(arr);
	for (let i = 0; i < l; i++) {
		if (set.has(arr[i])) {
			result.push(arr[i]);
			set.delete(arr[i]);
		}
	}
	return result;
}

module.exports = Uniq;
