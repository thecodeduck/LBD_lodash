function SortedIndex(arr, insert) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;
	const greater = function greater(a, b, c) {
		return (a >= b && b >= c);
	};
	const less = function less(a, b, c) {
		return (a <= b && b <= c);
	};

	if (l === 0) {
		return 0;
	}
	let op;
	let result;
	let start = 0;
	let end = l - 1;

	const mid = function mid() {
		return Math.floor((start + end) / 2);
	};

	if (arr[start] > arr[end]) {
		op = greater;
	} else if (arr[start] < arr[end]) {
		op = less;
	} else {
		throw Error('start and end issue');
	}

	const compare = function compare() {
		if (start + 1 === end) {
			result = end;
		} else if (op(arr[start], insert, arr[mid()])) {
			end = mid();
			compare();
		} else if (op(arr[mid()], insert, arr[end])) {
			start = mid();
			compare();
		}
		return result;
	};
	compare();
	return result;
}
module.exports = SortedIndex;
