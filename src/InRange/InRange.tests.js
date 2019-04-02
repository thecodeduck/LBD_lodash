/* eslint-env mocha */
const InRange = require('./InRange.js');
const chai = require('chai');
const _ = require('lodash');

describe('InRange is equal to _.inRange', () => {
	it('InRange is a function', () => {
		chai.assert.isFunction(InRange, 'InRange is not a function');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.inRange(input);
		chai.assert.deepEqual(InRange(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
	it('expected input', () => {
		var input = [ 2, 1, 3 ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
	it('default min', () => {
		var input = [ 2, 3 ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
	it('auto reverse', () => {
		var input = [ 2, 3, 1 ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
	it('negative range', () => {
		var input = [ -3, -2, -6 ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
	it('non-integer', () => {
		var input = [ 1.2, 2 ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
	it('string', () => {
		var input = [ 'b', 'c' ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.inRange(...input);
		chai.assert.deepEqual(InRange(...input), output, 'whoops');
	});
});
