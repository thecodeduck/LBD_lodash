function Pull() {
	const arr = Array.isArray(arguments[0]) || typeof (arguments[0]) === 'string' ? arguments[0].slice() : undefined;
	let argl = arguments.length - 1;
// need more evaluation on !Array return
	if (argl === 0 || !Array.isArray(arguments[0])) {
		return arguments[0];
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

module.exports = Pull;
