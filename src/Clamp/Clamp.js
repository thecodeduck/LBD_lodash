function Clamp() {
	const i = arguments[0];
	const min = arguments[2] && typeof arguments[1] === 'number' && !Number.isNaN(arguments[1]) ? arguments[1] : 0;
	let max;
	if (!arguments[2]) {
		max = arguments[1];
	} else if (arguments[2] && typeof arguments[2] === 'number' && !Number.isNaN(arguments[2])) {
		max = arguments[2];
	} else {
		max = 0;
	}
	let result = NaN;
	if (typeof i === 'number') {
		if (min < max && min <= i && i <= max) {
			result = i;
		} else if (min > max && min >= i && i >= max) {
			result = i;
		} else {
			result = min - i < i - max ? max : min;
		}
	}
	return result;
}
module.exports = Clamp;
