/* eslint-env mocha */
const LastIndexOf = require('./LastIndexOf.js');
const chai = require('chai');
const _ = require('lodash');

describe('LastIndexOf is equal to _.lastIndexOf', () => {
	it('LastIndexOf is a function', () => {
		chai.assert.isFunction(LastIndexOf, 'LastIndexOf is not a function');
	});
	it('expected input', () => {
		var input = [ [ 0, 0, 1, 1, 1, 0, 0 ], 1 ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.lastIndexOf(input);
		chai.assert.deepEqual(LastIndexOf(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	// Lodash error
	// it('[ [ undefined ], undefined ]', () => {
	// 	var input = [ [ undefined ], undefined ];
	// 	var output = _.lastIndexOf(...input);
	// 	chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	// });
	it('[ array, array ]', () => {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	it('[ array , integer ]', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	it('[ string, string ]', () => {
		var input = [ 'string', 's' ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.lastIndexOf(input);
		chai.assert.deepEqual(LastIndexOf(input), output, 'whoops');
	});
	it('[ array , integer, [ integer ], [ integer ] ]', () => {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
});
