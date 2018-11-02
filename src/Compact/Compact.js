function Compact(arr) {
	const result = [];
	arr.forEach(function (e) {
		if (e) {
			result.push(e);
		}
	});
	return result;
}

module.exports = Compact;
