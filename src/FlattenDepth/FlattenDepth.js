function FlattenDepth(arr, depth) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;
	const result = [];

	depth = depth === undefined ? 1 : Math.floor(depth);
	if (l === 0 || Number.isNaN(depth)) {
		return arr;
	}
	let counter = 0;

	const flatten = function (x) {
		if (Array.isArray(x)) {
			counter++;
			for (let ii = 0; ii < x.length; ii++) {
				if (counter === depth) {
					result.push(x[ii]);
				} else {
					flatten(x[ii]);
				}
			}
			counter--;
		} else {
			result.push(x);
		}
	};

	for (let i = 0; i < l; i++) {
		let x = arr[i];
		flatten(x);
	}

	return result;
}

module.exports = FlattenDepth;
