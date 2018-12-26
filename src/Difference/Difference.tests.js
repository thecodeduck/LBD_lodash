/* eslint-env mocha */
const Difference = require('./Difference.js');
const chai = require('chai');
const _ = require('lodash');

describe('Difference is equal to _.difference', () => {
	it('Difference is a function', () => {
		chai.assert.isFunction(Difference, 'Difference is not a function');
	});
	it('expected input', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ] ], [ 1, 2 ], [ [ 4 ] ] ];
		var output = _.difference(...input);
		chai.assert.deepEqual(Difference(...input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.difference(...input);
		chai.assert.deepEqual(Difference(...input), output, 'whoops');
	});
	it('[ null ]', () => {
		var input = [ null ];
		var output = _.difference(...input);
		chai.assert.deepEqual(Difference(...input), output, 'whoops');
	});
	it('[ [ ], [ ] ]', () => {
		var input = [ [], [] ];
		var output = _.difference(...input);
		chai.assert.deepEqual(Difference(...input), output, 'whoops');
	});
	it('[ [ -0 ], [ +0 ] ]', () => {
		var input = [ [ -0 ], [ +0 ] ];
		var output = _.difference(...input);
		chai.assert.deepEqual(Difference(...input), output, 'whoops');
	});
	it('[ [ undefined ], args ]', () => {
		var input = [ [ undefined ], undefined, 1, 2, 3 ];
		var output = _.difference(...input);
		chai.assert.deepEqual(Difference(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.difference(...input);
		chai.assert.deepEqual(Difference(...input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 2 ];
		var output = _.difference(...input);
		chai.assert.deepEqual(Difference(...input), output, 'whoops');
	});
});
