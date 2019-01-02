function Reverse(arr) {
// check if org is mutated - pull also
	const target = Array.isArray(arr) || typeof (arr) === 'string' ? arr : undefined;
	const argl = arr.length;
	if (argl === 0 || !Array.isArray(target)) {
		return arr;
	}
	let ii = target.length - 1;
	let hold;
	for (let i = 0; i < Math.floor(target.length / 2); i++) {
		hold = target[ii];
		target[ii] = target[i];
		target[i] = hold;
		ii--;
	}
	return target;
}

module.exports = Reverse;
