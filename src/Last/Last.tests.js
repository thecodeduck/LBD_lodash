/* eslint-env mocha */
const Last = require('./Last.js');
const chai = require('chai');
const _ = require('lodash');

describe('Last is equal to _.last', function () {
	it('Last is a function', function () {
		chai.assert.isFunction(Last, 'Last is not a function');
	});
	it('Last(undefined) is equal to _.last(undefined)', function () {
		var input = undefined;
		var output = _.last(input);
		chai.assert.deepEqual(output, Last(input), 'whoops');
	});
	it('Last([ undefined ]) is equal to _.last([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.last(input);
		chai.assert.deepEqual(output, Last(input), 'whoops');
	});
	it('Last([ [ undefined ], undefined ]) is equal to _.last([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.last(input);
		chai.assert.deepEqual(output, Last(input), 'whoops');
	});
	it('Last([ array ], [ array ]) is equal to _.last([ array ], [ array ])', function () {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.last(input);
		chai.assert.deepEqual(output, Last(input), 'whoops');
	});
	it('Last([ array ], integer) is equal to _.last([ array ], integer)', function () {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.last(input);
		chai.assert.deepEqual(output, Last(input), 'whoops');
	});
	it('Last([object, integer]) is equal to _.last([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.last(input);
		chai.assert.deepEqual(output, Last(input), 'whoops');
	});
	it('Last(string) is equal to _.last(string)', function () {
		var input = 'string';
		var output = _.last(input);
		chai.assert.deepEqual(output, Last(input), 'whoops');
	});
	it('Last(integer) is equal to _.last(integer)', function () {
		var input = 2;
		var output = _.last(input);
		chai.assert.deepEqual(output, Last(input), 'whoops');
	});
	it('Last([ array ], integer, [ integer ], [ integer ]) is equal to _.last([ array ], integer, [ integer ], [ integer ])', function () {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.last(input);
		chai.assert.deepEqual(output, Last(input), 'whoops');
	});
});
