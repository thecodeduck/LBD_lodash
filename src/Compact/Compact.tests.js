/* eslint-env mocha */
const Compact = require('./Compact.js');
const chai = require('chai');
const _ = require('lodash');

describe('Compact is equal to _.compact', function () {
	it('Compact is a function', function () {
		chai.assert.isFunction(Compact, 'Compact is not a function');
	});
	it('Compact(undefined) returns empty array', function () {
		var input = [ undefined ];
		var output = _.compact(input);
		chai.assert.deepEqual(output, Compact(input), 'whoops');
	});
	it('Compact(array) is equal to _.compact(array)', function () {
		var input = [ 0, 1, 2, 3, 4, false, 5, 6 ];
		var output = _.compact(input);
		chai.assert.deepEqual(output, Compact(input), 'whoops');
	});
	it('Compact([ [ null ] ]) returns empty array', function () {
		var input = [ [ null ] ];
		var output = _.compact(input);
		chai.assert.deepEqual(output, Compact(input), 'whoops');
	});
	it('Compact([object, integer]) is equal to _.compact([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.compact(input);
		chai.assert.deepEqual(output, Compact(input), 'whoops');
	});
});
