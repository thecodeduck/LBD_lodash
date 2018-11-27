/* eslint-env mocha */
const Initial = require('./Initial.js');
const chai = require('chai');
const _ = require('lodash');

describe('Initial is equal to _.initial', function () {
	it('Initial is a function', function () {
		chai.assert.isFunction(Initial, 'Initial is not a function');
	});
	it('Initial(undefined) is equal to _.initial(undefined)', function () {
		var input = undefined;
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('Initial([ undefined ]) is equal to _.initial([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('Initial([ [ undefined ], undefined ]) is equal to _.initial([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('Initial([ array ], [ array ]) is equal to _.initial([ array ], [ array ])', function () {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('Initial([ array ], integer) is equal to _.initial([ array ], integer)', function () {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('Initial([object, integer]) is equal to _.initial([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('Initial(string) is equal to _.initial(string)', function () {
		var input = 'string';
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('Initial(integer) is equal to _.initial(integer)', function () {
		var input = 2;
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
	it('Initial([ array ], integer, [ integer ], [ integer ]) is equal to _.initial([ array ], integer, [ integer ], [ integer ])', function () {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.initial(input);
		chai.assert.deepEqual(output, Initial(input), 'whoops');
	});
});
