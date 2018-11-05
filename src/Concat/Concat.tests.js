/* eslint-env mocha */
const Concat = require('./Concat.js');
const chai = require('chai');
const _ = require('lodash');

describe('Concat is equal to _.concat', function () {
	it('Concat is a function', function () {
		chai.assert.isFunction(Concat, 'Concat is not a function');
	});
	it('Concat(array) is equal to _.concat(array)', function () {
		var input = [ [ 1, 2, 3, [ 4 ] ], [ 'x', 5, [ 6, 7 ], [ '8', [ '9' ] ], [ [ 'a', [ 'b' ], 'c' ], 'd' ] ] ];
		var output = _.concat(input);
		chai.assert.deepEqual(output, Concat(input), 'whoops');
	});
	it('Concat([ undefined ]) is equal to _.concat([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.concat(input);
		chai.assert.deepEqual(output, Concat(input), 'whoops');
	});
	it('Concat([ [ undefined ], args ]) is equal to _.concat([ [ undefined ], args ])', function () {
		var input = [ [ undefined ], 1, 2, 3 ];
		var output = _.concat(input);
		chai.assert.deepEqual(output, Concat(input), 'whoops');
	});
	it('Concat([object, integer]) is equal to _.concat([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.concat(input);
		chai.assert.deepEqual(output, Concat(input), 'whoops');
	});
});
