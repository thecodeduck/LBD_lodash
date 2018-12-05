function PullAll() {
	const arr = arguments[0].slice();
	const argl = arguments.length - 1;
	if (argl === 0 || !Array.isArray(arguments[1])) {
		return arr;
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
