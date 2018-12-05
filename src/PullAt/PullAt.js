function PullAt() {
	const indexes = new Set(arguments[1]);
	const result = [];
	let ii = 0;
	for (let i = 0; i < arguments[0].length; i++) {
		if (indexes.has(i)) {
			result.push(arguments[0][i]);
		} else {
// eslint-disable-next-line
			if (i === ii) {
				ii++;
			} else if (i > ii) {
				arguments[0][ii] = arguments[0][i];
				ii++;
			} else if (i < ii) {
				throw Error('Double pointer fail');
			}
		}
	}
	arguments[0].length = arguments[0].length - indexes.size;
	return result;
}

module.exports = PullAt;
