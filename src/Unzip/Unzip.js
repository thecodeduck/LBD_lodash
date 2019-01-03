function Unzip(arr) {
	arr = Array.isArray(arr) ? arr.slice() : [];
	const l = arr.length;
	if (l === 0) {
		return [];
	}
	const arrl = arr[0] && Array.isArray(arr[0]) ? arr[0].length : 0;

	let result = [];
	for (let i = 0; i < arrl; i++) {
		let temp = [];
		for (let ii = 0; ii < l; ii++) {
			temp.push(arr[ii][i]);
		}
		result.push(temp);
	}
	return result;
}
module.exports = Unzip;
