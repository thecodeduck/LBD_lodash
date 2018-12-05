function Reverse(arr) {
	let ii = arr.length - 1;
	let hold;
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		hold = arr[ii];
		arr[ii] = arr[i];
		arr[i] = hold;
		ii--;
	}
	return arr;
}

module.exports = Reverse;
