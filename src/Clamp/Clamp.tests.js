/* eslint-env mocha */
const Clamp = require('./Clamp.js');
const chai = require('chai');
const _ = require('lodash');

describe('Clamp is equal to _.clamp', () => {
	it('Clamp is a function', () => {
		chai.assert.isFunction(Clamp, 'Clamp is not a function');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.clamp(input);
		chai.assert.deepEqual(Clamp(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.clamp(...input);
		chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	});
	// lodash evals empty array as 0
	// it('[ [ undefined ], undefined ]', () => {
	// 	var input = [ [ undefined ], undefined ];
	// 	var output = _.clamp(...input);
	// 	chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	// });
	it('expected input', () => {
		var input = [ 2, 1, 3 ];
		var output = _.clamp(...input);
		chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	});
	it('default max', () => {
		var input = [ 2, 3 ];
		var output = _.clamp(...input);
		chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	});
	it('outside of range lower', () => {
		var input = [ 2, 2.5, 3 ];
		var output = _.clamp(...input);
		chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	});
	it('outside of range higher', () => {
		var input = [ 4, 2.5, 3 ];
		var output = _.clamp(...input);
		chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	});

	// lodash doesn't handle min/max reversal like inRange
	// it('auto reverse', () => {
	// 	var input = [ 2, 3, 1 ];
	// 	var output = _.clamp(...input);
	// 	chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	// });

	// it('negative range', () => {
	// 	var input = [ -3, -2, -6 ];
	// 	var output = _.clamp(...input);
	// 	chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	// });

	it('non-integer', () => {
		var input = [ 1.2, 2 ];
		var output = _.clamp(...input);
		chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	});
	it('string', () => {
		var input = [ 'b', 'c' ];
		var output = _.clamp(...input);
		chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.clamp(...input);
		chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.clamp(...input);
		chai.assert.deepEqual(Clamp(...input), output, 'whoops');
	});
});
