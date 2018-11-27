function Initial(arr) {
	const result = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = result.length;
	if (l === 0) {
		return result;
	}
	result.pop();
	return result;
}

module.exports = Initial;
