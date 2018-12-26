/* eslint-env mocha */
const Initial = require('./Initial.js');
const chai = require('chai');
const _ = require('lodash');

describe('Initial is equal to _.initial', () => {
	it('Initial is a function', () => {
		chai.assert.isFunction(Initial, 'Initial is not a function');
	});
	it('expected input', () => {
		var input = [ 1, 2, 3, 4, 5, 6 ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('[ array , integer ]', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	// Lodash baseSlice gives strange result - copy original?
	// it('string', () => {
	// 	var input = 'string';
	// 	var output = _.initial(input);
	// 	chai.assert.deepEqual(output, Initial(input), 'whoops');
	// });
	it('integer', () => {
		var input = 2;
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
});
