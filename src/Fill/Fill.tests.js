/* eslint-env mocha */
const Fill = require('./Fill.js');
const chai = require('chai');
const _ = require('lodash');

describe('Fill is equal to _.fill', function () {
	it('Fill is a function', function () {
		chai.assert.isFunction(Fill, 'Fill is not a function');
	});
	it('Fill([ undefined ]) is equal to _.fill([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
	it('Fill([ [ undefined ], undefined ]) is equal to _.fill([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
	it('Fill([ array ]) is equal to _.fill([ array ])', function () {
		var input = [ [ 'a', 'b', 'c', 'd' ] ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
	it('Fill([ array, integer ]) is equal to _.fill([ array, integer ])', function () {
		var input = [ [ 'a', 'b', 'c', 'd' ], 3 ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
	it('Fill([ array ], [ array ]) is equal to _.fill([ array ], [ array ])', function () {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ], 2, 4 ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
	it('Fill([object, integer]) is equal to _.fill([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
	it('Fill(string) is equal to _.fill(string)', function () {
		var input = [ 'string' ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
	it('Fill(integer) is equal to _.fill(integer)', function () {
		var input = [ 2 ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
	it('Fill([ array ], integer, [ integer ], [ integer ]) is equal to _.fill([ array ], integer, [ integer ], [ integer ])', function () {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
	it('Fill([ array ], integer, [ array ]) is equal to _.fill([ array ], integer, [ array ])', function () {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3, 4 ] ];
		var output = _.fill(...input);
		chai.assert.deepEqual(output, Fill(...input), 'whoops');
	});
});
