function Concat() {
	const result = !Array.isArray(arguments[0]) ? new Array(arguments[0]) : arguments[0].slice();
	const l = arguments.length;
	if (l === 0) {
		return [];
	}
	for (let i = 0; i < l - 1; i++) {
		let x = arguments[i + 1];
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

module.exports = Concat;
