function PullAll() {
	const arr = Array.isArray(arguments[0]) || typeof (arguments[0]) === 'string' ? arguments[0].slice() : undefined;
	const argl = arguments.length - 1;
	if (argl === 0 || !Array.isArray(arguments[0]) || !Array.isArray(arguments[1])) {
		return arguments[0];
	}
	const compareSet = new Set();
	const hold = [];
	for (let i = 0; i < arguments[1].length; i++) {
		compareSet.add(arguments[1][i]);
	}
	for (let i = 0; i < arr.length; i++) {
		if (!compareSet.has(arr[i])) {
			hold.push(arr[i]);
		}
	}
	return hold;
}

module.exports = PullAll;
