/* eslint-env mocha */
const IndexOf = require('./IndexOf.js');
const chai = require('chai');
const _ = require('lodash');

describe('IndexOf is equal to _.indexOf', function () {
	it('IndexOf is a function', function () {
		chai.assert.isFunction(IndexOf, 'IndexOf is not a function');
	});
	it('IndexOf(undefined) is equal to _.indexOf(undefined)', function () {
		var input = undefined;
		var output = _.indexOf(input);
		chai.assert.deepEqual(output, IndexOf(input), 'whoops');
	});
	it('IndexOf([ undefined ]) is equal to _.indexOf([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('IndexOf([ [ undefined ], undefined ]) is equal to _.indexOf([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('IndexOf([ array ], [ array ]) is equal to _.indexOf([ array ], [ array ])', function () {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('IndexOf([ array ], integer) is equal to _.indexOf([ array ], integer)', function () {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('IndexOf([object, integer]) is equal to _.indexOf([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('IndexOf([string], [string]) is equal to _.indexOf([string], [string])', function () {
		var input = [ 'string', 's' ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
	it('IndexOf(integer) is equal to _.indexOf(integer)', function () {
		var input = 2;
		var output = _.indexOf(input);
		chai.assert.deepEqual(output, IndexOf(input), 'whoops');
	});
	it('IndexOf([ array ], integer, [ integer ], [ integer ]) is equal to _.indexOf([ array ], integer, [ integer ], [ integer ])', function () {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.indexOf(...input);
		chai.assert.deepEqual(output, IndexOf(...input), 'whoops');
	});
});
