/* eslint-env mocha */
const Drop = require('./Drop.js');
const chai = require('chai');
const _ = require('lodash');

describe('Drop is equal to _.drop', function () {
	it('Drop is a function', function () {
		chai.assert.isFunction(Drop, 'Drop is not a function');
	});
	it('Drop([ undefined ]) is equal to _.drop([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.drop(...input);
		chai.assert.deepEqual(output, Drop(...input), 'whoops');
	});
	it('Drop([ [ undefined ], undefined ]) is equal to _.drop([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.drop(...input);
		chai.assert.deepEqual(output, Drop(...input), 'whoops');
	});
	it('Drop([ array ]) is equal to _.drop([ array ])', function () {
		var input = [ [ 'a', 'b', 'c', 'd' ] ];
		var output = _.drop(...input);
		chai.assert.deepEqual(output, Drop(...input), 'whoops');
	});
	it('Drop([ array, integer ]) is equal to _.drop([ array, integer ])', function () {
		var input = [ [ 'a', 'b', 'c', 'd' ], 3 ];
		var output = _.drop(...input);
		chai.assert.deepEqual(output, Drop(...input), 'whoops');
	});
	it('Drop([ array ], [ array ]) is equal to _.drop([ array ], [ array ])', function () {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ] ];
		var output = _.drop(...input);
		chai.assert.deepEqual(output, Drop(...input), 'whoops');
	});
	it('Drop([object, integer]) is equal to _.drop([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.drop(...input);
		chai.assert.deepEqual(output, Drop(...input), 'whoops');
	});
});
