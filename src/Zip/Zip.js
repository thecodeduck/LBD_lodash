function Zip() {
	// lodash will still run as long as the first argument is an array
	const argl = Array.isArray(arguments[0]) ? arguments.length : 0;
	if (argl === 0) {
		return [];
	}
	let l = 0;
	for (let i = 0; i < argl; i++) {
		l = arguments[i].length > l ? arguments[i].length : l;
	}
	let result = [];
	for (let i = 0; i < l; i++) {
		let temp = [];
		for (let ii = 0; ii < argl; ii++) {
			temp.push(arguments[ii][i]);
		}
		result.push(temp);
	}
	return result;
}
module.exports = Zip;
