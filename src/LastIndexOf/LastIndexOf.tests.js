/* eslint-env mocha */
const LastIndexOf = require('./LastIndexOf.js');
const chai = require('chai');
const _ = require('lodash');

describe('LastIndexOf is equal to _.lastIndexOf', function () {
	it('LastIndexOf is a function', function () {
		chai.assert.isFunction(LastIndexOf, 'LastIndexOf is not a function');
	});
	it('LastIndexOf(undefined) is equal to _.lastIndexOf(undefined)', function () {
		var input = undefined;
		var output = _.lastIndexOf(input);
		chai.assert.deepEqual(LastIndexOf(input), output, 'whoops');
	});
	it('LastIndexOf([ undefined ]) is equal to _.lastIndexOf([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	// Lodash error
	// it('LastIndexOf([ [ undefined ], undefined ]) is equal to _.lastIndexOf([ [ undefined ], undefined ])', function () {
	// 	var input = [ [ undefined ], undefined ];
	// 	var output = _.lastIndexOf(...input);
	// 	chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	// });
	it('LastIndexOf([ array ], [ array ]) is equal to _.lastIndexOf([ array ], [ array ])', function () {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	it('LastIndexOf([ array ], integer) is equal to _.lastIndexOf([ array ], integer)', function () {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	it('LastIndexOf([object, integer]) is equal to _.lastIndexOf([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	it('LastIndexOf([string], [string]) is equal to _.lastIndexOf([string], [string])', function () {
		var input = [ 'string', 's' ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
	it('LastIndexOf(integer) is equal to _.lastIndexOf(integer)', function () {
		var input = 2;
		var output = _.lastIndexOf(input);
		chai.assert.deepEqual(LastIndexOf(input), output, 'whoops');
	});
	it('LastIndexOf([ array ], integer, [ integer ], [ integer ]) is equal to _.lastIndexOf([ array ], integer, [ integer ], [ integer ])', function () {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.lastIndexOf(...input);
		chai.assert.deepEqual(LastIndexOf(...input), output, 'whoops');
	});
});
