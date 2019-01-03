function Without() {
	const arr = Array.isArray(arguments[0]) ? arguments[0].slice() : [];
	let argl = arguments.length - 1;
	if (argl === 0) {
		return arr;
	}
	let compareSet = new Set();
	let hold = [];
	for (let i = 1; i < arguments.length; i++) {
		compareSet.add(arguments[i]);
	}
	for (let i = 0; i < arr.length; i++) {
		if (!compareSet.has(arr[i])) {
			hold.push(arr[i]);
		}
	}
	return hold;
}
module.exports = Without;
