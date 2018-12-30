function Slice(arr, start, end) {
	arr = Array.isArray(arr) || typeof (arr) === 'string' ? arr.slice() : [];
	const l = arr.length;
	start = start ? Math.floor(start) : 0;
	end = end ? Math.floor(end) : l;
	const result = [];
	if (l === 0) {
		return [];
	}
	for (let i = start; i < end; i++) {
		let x = arr[i];
		result.push(x);
	}
	return result;
}
module.exports = Slice;
