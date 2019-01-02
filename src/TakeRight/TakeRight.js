const Slice = require('../Slice/Slice.js');

function TakeRight(arr, n) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	n = n === undefined ? 1 : n; // explicit because null
	const l = arr.length;

	if (l === 0) {
		return [];
	}

	const result = Slice(arr, (l - n > -1 ? l - n : 0), l);
	return result;
}

module.exports = TakeRight;
