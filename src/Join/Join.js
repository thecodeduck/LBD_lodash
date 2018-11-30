function Join(arr, seperator) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;
	// lodash will coerce null into string
	seperator = seperator === undefined ? ',' : String(seperator);
	const sl = seperator.length ? seperator.length : 1;
	let result = "";
	if (l === 0) {
		return result;
	}
	for (let i = 0; i < l; i++) {
	// eslint-disable-next-line
		let x = arr[i] != undefined ? arr[i] : '';
		result = result + (String(x) + seperator);
	}
	return result.slice(0, result.length - sl);
}

module.exports = Join;
