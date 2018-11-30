function Last(arr) {
	let result = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : undefined;
	if (result === undefined || result.length === 0) {
		return result;
	}
	return result[result.length - 1];
}

module.exports = Last;
