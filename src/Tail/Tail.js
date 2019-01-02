const Slice = require('../Slice/Slice.js');

function Tail(arr) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;

	if (l === 0) {
		return [];
	}

	const result = Slice(arr, 1, l);
	return result;
}

module.exports = Tail;
