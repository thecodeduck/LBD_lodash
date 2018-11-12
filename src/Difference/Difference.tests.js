/* eslint-env mocha */
const Difference = require('./Difference.js');
const chai = require('chai');
const _ = require('lodash');

describe('Difference is equal to _.difference', function () {
	it('Difference is a function', function () {
		chai.assert.isFunction(Difference, 'Difference is not a function');
	});
	it('Difference(array) is equal to _.difference(array)', function () {
		var input = [ [ 0, 1, 2, 3, [ 4 ] ], [ 1, 2 ], [ [ 4 ] ] ];
		var output = _.difference(...input);
		chai.assert.deepEqual(output, Difference(...input), 'whoops');
	});
	it('Difference([ undefined ]) is equal to _.difference([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.difference(...input);
		chai.assert.deepEqual(output, Difference(...input), 'whoops');
	});
	it('Difference([ ], [ ]) is equal to _.difference([ ], [ ])', function () {
		var input = [ [], [] ];
		var output = _.difference(...input);
		chai.assert.deepEqual(output, Difference(...input), 'whoops');
	});
	it('Difference([ -0 ], [ +0 ] ) is equal to _.difference([ -0 ], [ +0 ])', function () {
		var input = [ [ -0 ], [ +0 ] ];
		var output = _.difference(...input);
		chai.assert.deepEqual(output, Difference(...input), 'whoops');
	});
	it('Difference([ [ undefined ], args ]) is equal to _.difference([ [ undefined ], args ])', function () {
		var input = [ [ undefined ], undefined, 1, 2, 3 ];
		var output = _.difference(...input);
		chai.assert.deepEqual(output, Difference(...input), 'whoops');
	});
	it('Difference([object, integer]) is equal to _.difference([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.difference(...input);
		chai.assert.deepEqual(output, Difference(...input), 'whoops');
	});
	it('Difference([string, integer]) is equal to _.difference([string, integer])', function () {
		var input = [ 'string', 2 ];
		var output = _.difference(...input);
		chai.assert.deepEqual(output, Difference(...input), 'whoops');
	});
});
