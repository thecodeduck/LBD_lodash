/* eslint-env mocha */
const FromPairs = require('./FromPairs.js');
const chai = require('chai');
const _ = require('lodash');

describe('FromPairs is equal to _.fromPairs', () => {
	it('FromPairs is a function', () => {
		chai.assert.isFunction(FromPairs, 'FromPairs is not a function');
	});
	it('expected input', () => {
		var input = [ [ 'a', 1 ], [ 'b', 2 ] ];
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});

	it('undefined', () => {
		var input = undefined;
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	// it('[ undefined ]', () => {
	// 	var input = [ undefined ];
	// 	var output = _.fromPairs(input);
	// 	chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	// });
	// it('[ [ undefined ], undefined ]', () => {
	// 	var input = [ [ undefined ], undefined ];
	// 	var output = _.fromPairs(input);
	// 	chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	// });
	it('[ array, array ]', () => {
		var input = [ [ 1, 2 ], [ 3, [ 4 ] ], [ 5, 6 ] ];
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('[ array, array, integer]', () => {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ], 2, 4 ];
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('[ array, integer, [ integer ], [ integer ] ]', () => {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
});
