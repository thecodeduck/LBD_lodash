/* eslint-env mocha */
const FlattenDeep = require('./FlattenDeep.js');
const chai = require('chai');
const _ = require('lodash');

describe('FlattenDeep is equal to _.flattenDeep', function () {
	it('FlattenDeep is a function', function () {
		chai.assert.isFunction(FlattenDeep, 'FlattenDeep is not a function');
	});
	it('FlattenDeep(undefined) is equal to _.flattenDeep(undefined)', function () {
		var input = undefined;
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('FlattenDeep([ undefined ]) is equal to _.flattenDeep([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('FlattenDeep([ [ undefined ], undefined ]) is equal to _.flattenDeep([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('FlattenDeep([ array, integer ]) is equal to _.flattenDeep([ array, integer ])', function () {
		var input = [ [ 'a', 'b', 'c', [ 'd' ] ], 1, 2, 3 ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('FlattenDeep([ array ], [ array ]) is equal to _.flattenDeep([ array ], [ array ])', function () {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ], 2, 4 ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('FlattenDeep([object, integer]) is equal to _.flattenDeep([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('FlattenDeep(string) is equal to _.flattenDeep(string)', function () {
		var input = 'string';
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('FlattenDeep(integer) is equal to _.flattenDeep(integer)', function () {
		var input = 2;
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('FlattenDeep([ array ], integer, [ integer ], [ integer ]) is equal to _.flattenDeep([ array ], integer, [ integer ], [ integer ])', function () {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
});
