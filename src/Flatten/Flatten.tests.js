/* eslint-env mocha */
const Flatten = require('./Flatten.js');
const chai = require('chai');
const _ = require('lodash');

describe('Flatten is equal to _.flatten', function () {
	it('Flatten is a function', function () {
		chai.assert.isFunction(Flatten, 'Flatten is not a function');
	});
	it('Flatten(undefined) is equal to _.flatten(undefined)', function () {
		var input = undefined;
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('Flatten([ undefined ]) is equal to _.flatten([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('Flatten([ [ undefined ], undefined ]) is equal to _.flatten([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('Flatten([ array, integer ]) is equal to _.flatten([ array, integer ])', function () {
		var input = [ [ 'a', 'b', 'c', [ 'd' ] ], 1, 2, 3 ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('Flatten([ array ], [ array ]) is equal to _.flatten([ array ], [ array ])', function () {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ], 2, 4 ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('Flatten([object, integer]) is equal to _.flatten([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('Flatten(string) is equal to _.flatten(string)', function () {
		var input = 'string';
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('Flatten(integer) is equal to _.flatten(integer)', function () {
		var input = 2;
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('Flatten([ array ], integer, [ integer ], [ integer ]) is equal to _.flatten([ array ], integer, [ integer ], [ integer ])', function () {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
});
