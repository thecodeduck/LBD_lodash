/* eslint-env mocha */
const FromPairs = require('./FromPairs.js');
const chai = require('chai');
const _ = require('lodash');

describe('FromPairs is equal to _.fromPairs', function () {
	it('FromPairs is a function', function () {
		chai.assert.isFunction(FromPairs, 'FromPairs is not a function');
	});
	it('FromPairs(undefined) is equal to _.fromPairs(undefined)', function () {
		var input = undefined;
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	// it('FromPairs([ undefined ]) is equal to _.fromPairs([ undefined ])', function () {
	// 	var input = [ undefined ];
	// 	var output = _.fromPairs(input);
	// 	chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	// });
	// it('FromPairs([ [ undefined ], undefined ]) is equal to _.fromPairs([ [ undefined ], undefined ])', function () {
	// 	var input = [ [ undefined ], undefined ];
	// 	var output = _.fromPairs(input);
	// 	chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	// });
	it('FromPairs([ array ], [ array ]) is equal to _.fromPairs([ array ], [ array ])', function () {
		var input = [ [ 1, 2 ], [ 3, [ 4 ] ], [ 5, 6 ] ];
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('FromPairs([ array ], [ array ], integer) is equal to _.fromPairs([ array ], [ array ], integer)', function () {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ], 2, 4 ];
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('FromPairs([object, integer]) is equal to _.fromPairs([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('FromPairs(string) is equal to _.fromPairs(string)', function () {
		var input = 'string';
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('FromPairs(integer) is equal to _.fromPairs(integer)', function () {
		var input = 2;
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
	it('FromPairs([ array ], integer, [ integer ], [ integer ]) is equal to _.fromPairs([ array ], integer, [ integer ], [ integer ])', function () {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.fromPairs(input);
		chai.assert.deepEqual(FromPairs(input), output, 'whoops');
	});
});
