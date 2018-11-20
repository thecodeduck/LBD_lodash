function FlattenDeep(arr) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;
	const result = [];
	if (l === 0) {
		return [];
	}
	const flatten = function (x) {
		if (Array.isArray(x)) {
			for (let ii = 0; ii < x.length; ii++) {
				flatten(x[ii]);
			}
		} else {
			result.push(x);
		}
	};
	for (let i = 0; i < l; i++) {
		let x = arr[i];
		flatten(x);
	}
	return result;
}

module.exports = FlattenDeep;
