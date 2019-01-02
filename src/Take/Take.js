const Slice = require('../Slice/Slice.js');

function Take(arr, n) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	n = n === undefined ? 1 : n; // explicit because null
	const l = arr.length;

	if (l === 0) {
		return [];
	}

	const result = Slice(arr, 0, n);
	return result;
}

module.exports = Take;
