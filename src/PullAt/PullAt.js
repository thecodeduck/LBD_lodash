function PullAt() {
	const target = Array.isArray(arguments[0]) || typeof (arguments[0]) === 'string' ? arguments[0].slice() : undefined;
	const argl = arguments.length - 1;
	if (argl === 0 || !Array.isArray(target) || !Array.isArray(arguments[1])) {
		return [];
	}

	const indexes = new Set(arguments[1]);
	const result = [];
	let ii = 0;
	for (let i = 0; i < target.length; i++) {
		if (indexes.has(i)) {
			result.push(target[i]);
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
	target.length = target.length - indexes.size;
	return result;
}

module.exports = PullAt;
