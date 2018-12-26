/* eslint-env mocha */
const IndexOf = require('./IndexOf.js');
const chai = require('chai');
const _ = require('lodash');

describe('IndexOf is equal to _.indexOf', () => {
	it('IndexOf is a function', () => {
		chai.assert.isFunction(IndexOf, 'IndexOf is not a function');
	});
	it('expected input', () => {
		var input = [ [ 0, 1, 2, 3, 4 ], 4 ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.indexOf(input);
		chai.assert.deepEqual(output, IndexOf(input), 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('[ array, integer ]', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('[ string, string ]', () => {
		var input = [ 'string', 's' ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.indexOf(input);
		chai.assert.deepEqual(output, IndexOf(input), 'whoops');
	});
	it('[ array, integer, [ integer ], [ integer ] ]', () => {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
});
