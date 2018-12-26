/* eslint-env mocha */
const FlattenDepth = require('./FlattenDepth.js');
const chai = require('chai');
const _ = require('lodash');

describe('FlattenDepth is equal to _.flattenDepth', () => {
	it('FlattenDepth is a function', () => {
		chai.assert.isFunction(FlattenDepth, 'FlattenDepth is not a function');
	});
	it('expected input', () => {
		var input = [ [ 'a', 'b', 'c', [ 'd', 'e', [ 'f', 'g' ] ] ], 2 ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});
	it('expected input with default value', () => {
		var input = [ [ 'a', 'b', 'c', [ 'd', 'e', [ 'f', 'g' ] ] ] ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('[ array, [ integer ] ]', () => {
		var input = [ [ 'a', 'b', 'c', [ 'd', 'e', [ 'f', 'g' ] ] ], [ 2 ] ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});

	it('[ array, integer ]', () => {
		var input = [ [ 1, [ 2, [ 3, [ 4, [ 'X' ], [ 'Z' ] ], [ 5 ] ], 6, [ 'a', 'b' ] ] ], 3 ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 'a', 'b', 'c', [ 'd' ] ], [ 1, 2, 3 ] ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('[ [ array ], integer, [ integer ], [ integer ] ]', () => {
		var input = [ [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4, [ 'a', 'b', [ 'c' ] ] ] ], 3 ];
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
});
