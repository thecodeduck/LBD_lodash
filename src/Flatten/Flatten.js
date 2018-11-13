function Flatten(arr) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;
	const result = [];
	if (l === 0) {
		return [];
	}
	for (let i = 0; i < l; i++) {
		let x = arr[i];
		if (Array.isArray(x)) {
			for (let ii = 0; ii < x.length; ii++) {
				result.push(x[ii]);
			}
		} else {
			result.push(x);
		}
	}
	return result;
}

module.exports = Flatten;
