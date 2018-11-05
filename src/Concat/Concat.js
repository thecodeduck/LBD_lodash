function Concat() {
	const result = arguments[0].slice();
	const l = arguments.length - 1;
	for (let i = 0; i < l; i++) {
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
