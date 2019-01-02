function Union() {
	const arr = Array.isArray(arguments[0]) ? arguments[0].slice() : [];
	if (arr.length === 0) {
		return [];
	}
	if (arguments.length > 0) {
		for (let i = 0; i < arguments.length - 1; i++) {
			let x = arguments[i + 1];
			if (Array.isArray(x)) {
				for (let ii = 0; ii < x.length; ii++) {
					arr.push(x[ii]);
				}
			} else {
				arr.push(x);
			}
		}
	}

	const result = [];
	const set = new Set(arr);
	for (let i = 0; i < arr.length; i++) {
		if (set.has(arr[i])) {
			result.push(arr[i]);
			set.delete(arr[i]);
		}
	}
	return result;
}


module.exports = Union;
