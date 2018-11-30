/* eslint-env mocha */
const Head = require('./Head.js');
const chai = require('chai');
const _ = require('lodash');

describe('Head is equal to _.head', function () {
	it('Head is a function', function () {
		chai.assert.isFunction(Head, 'Head is not a function');
	});
	it('Head(undefined) is equal to _.head(undefined)', function () {
		var input = undefined;
		var output = _.head(input);
		chai.assert.deepEqual(output, Head(input), 'whoops');
	});
	it('Head([ undefined ]) is equal to _.head([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.head(input);
		chai.assert.deepEqual(output, Head(input), 'whoops');
	});
	it('Head([ [ undefined ], undefined ]) is equal to _.head([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.head(input);
		chai.assert.deepEqual(output, Head(input), 'whoops');
	});
	it('Head([ array ], [ array ]) is equal to _.head([ array ], [ array ])', function () {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.head(input);
		chai.assert.deepEqual(output, Head(input), 'whoops');
	});
	it('Head([ array ], integer) is equal to _.head([ array ], integer)', function () {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.head(input);
		chai.assert.deepEqual(output, Head(input), 'whoops');
	});
	it('Head([object, integer]) is equal to _.head([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.head(input);
		chai.assert.deepEqual(output, Head(input), 'whoops');
	});
	it('Head(string) is equal to _.head(string)', function () {
		var input = 'string';
		var output = _.head(input);
		chai.assert.deepEqual(output, Head(input), 'whoops');
	});
	it('Head(integer) is equal to _.head(integer)', function () {
		var input = 2;
		var output = _.head(input);
		chai.assert.deepEqual(output, Head(input), 'whoops');
	});
	it('Head([ array ], integer, [ integer ], [ integer ]) is equal to _.head([ array ], integer, [ integer ], [ integer ])', function () {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.head(input);
		chai.assert.deepEqual(output, Head(input), 'whoops');
	});
});
