function InRange() {
	const i = arguments[0];
	const min = arguments[2] ? arguments[1] : 0;
	const max = arguments[2] ? arguments[2] : arguments[1];
	let result = false;
	if (min < max && min < i && i < max) {
		result = true;
	} else if (min > max && min > i && i > max) {
		result = true;
	}
	return result;
}
module.exports = InRange;
