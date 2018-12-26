function Intersection() {
	const arr = Array.isArray(arguments[0]) || typeof (arguments[0]) === 'string' ? arguments[0].slice() : [];
	let argl = arguments.length - 1;
	if (argl === 0) {
		return arr;
	}

	let result = [];

	const initArg = arguments[1];

	const getInit = function () {
		for (let i = 0; i < arr.length; i++) {
			for (let ii = 0; ii < initArg.length; ii++) {
				if (arr[i] === initArg[ii]) {
					result.push(arr[i]);
					break;
				}
			}
		}
	};

	const multiCompare = function (args) {
		let compareSet = new Set(result);
		for (let i = 1; i < argl; i++) {
			let temp = new Set();
			for (let ii = 0; ii < args[i].length; ii++) {
				if (compareSet.has(args[i][ii])) {
					temp.add(args[i][ii]);
				}
			}
			compareSet = temp;
		}
		let hold = [];
		for (let x = 0; x < result.length; x++) {
			if (compareSet.has(result[x])) {
				hold.push(result[x]);
			}
		}
		return hold;
	};

	getInit();
	if (argl === 1) {
		return result;
	}
	result = multiCompare(arguments);
	return result;
}

module.exports = Intersection;
