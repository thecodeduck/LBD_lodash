function Difference() {
	const arr = arguments[0].slice();
	const arrl = arr.length;
	const argl = arguments.length - 1;
	if (argl === 0) {
		return arr;
	}
	const argSet = new Set();
	for (let i = 0; i < argl; i++) {
		let x = arguments[i + 1];
		if (Array.isArray(x)) {
			for (let ii = 0; ii < x.length; ii++) {
				argSet.add(x[ii]);
			}
		}
	}
	const result = [];
	for (let i = 0; i < arrl; i++) {
		if (!argSet.has(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
}
// Inputs must be in arrays
// Wanted to use Set but order is determined by org arr
// Instead of doing a triple for loop, I'd rather use Set, but for the arguments
// var input = [ ["first", 1, 12, "x", "a", 14], [14, [1], 12], [13, "x"] ] ;


module.exports = Difference;
