/* eslint-env mocha */
const FlattenDepth = require('./FlattenDepth.js');
const chai = require('chai');
const _ = require('lodash');

describe('FlattenDepth is equal to _.flattenDepth', function () {
	it('FlattenDepth is a function', function () {
		chai.assert.isFunction(FlattenDepth, 'FlattenDepth is not a function');
	});
	it('FlattenDepth(undefined) is equal to _.flattenDepth(undefined)', function () {
		var input = undefined;
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('FlattenDepth([ undefined ]) is equal to _.flattenDepth([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('FlattenDepth([ [ undefined ], undefined ]) is equal to _.flattenDepth([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('FlattenDepth([ array, integer ]) is equal to _.flattenDepth([ array, integer ])', function () {
		var input = [ [ 'a', 'b', 'c', [ 'd', 'e', [ 'f', 'g' ] ] ], 2 ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});
	it('FlattenDepth([ array, [ integer ] ]) is equal to _.flattenDepth([ array, [ integer ] ])', function () {
		var input = [ [ 'a', 'b', 'c', [ 'd', 'e', [ 'f', 'g' ] ] ], [ 2 ] ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});

	it('FlattenDepth([ array, integer ]) is equal to _.flattenDepth([ array, integer ])', function () {
		var input = [ [ 1, [ 2, [ 3, [ 4, [ 'X' ], [ 'Z' ] ], [ 5 ] ], 6, [ 'a', 'b' ] ] ], 3 ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});
	it('FlattenDepth([ array ], [ array ]) is equal to _.flattenDepth([ array ], [ array ])', function () {
		var input = [ [ 'a', 'b', 'c', [ 'd' ] ], [ 1, 2, 3 ] ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});
	it('FlattenDepth([object, integer]) is equal to _.flattenDepth([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.flattenDepth(...input);
		chai.assert.deepEqual(FlattenDepth(...input), output, 'whoops');
	});
	it('FlattenDepth(string) is equal to _.flattenDepth(string)', function () {
		var input = 'string';
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('FlattenDepth(integer) is equal to _.flattenDepth(integer)', function () {
		var input = 2;
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
	it('FlattenDepth([ array ], integer, [ integer ], [ integer ]) is equal to _.flattenDepth([ array ], integer, [ integer ], [ integer ])', function () {
		var input = [ [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4, [ 'a', 'b', [ 'c' ] ] ] ], 3 ];
		var output = _.flattenDepth(input);
		chai.assert.deepEqual(FlattenDepth(input), output, 'whoops');
	});
});
