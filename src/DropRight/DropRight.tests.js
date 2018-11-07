/* eslint-env mocha */
const DropRight = require('./DropRight.js');
const chai = require('chai');
const _ = require('lodash');

describe('DropRight is equal to _.dropRight', function () {
	it('DropRight is a function', function () {
		chai.assert.isFunction(DropRight, 'DropRight is not a function');
	});
	it('DropRight([ undefined ]) is equal to _.dropRight([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(output, DropRight(...input), 'whoops');
	});
	it('DropRight([ [ undefined ], undefined ]) is equal to _.dropRight([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(output, DropRight(...input), 'whoops');
	});
	it('DropRight([ array ]) is equal to _.dropRight([ array ])', function () {
		var input = [ [ 'a', 'b', 'c', 'd' ] ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(output, DropRight(...input), 'whoops');
	});
	it('DropRight([ array, integer ]) is equal to _.dropRight([ array, integer ])', function () {
		var input = [ [ 'a', 'b', 'c', 'd' ], 3 ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(output, DropRight(...input), 'whoops');
	});
	it('DropRight([ array ], [ array ]) is equal to _.dropRight([ array ], [ array ])', function () {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ] ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(output, DropRight(...input), 'whoops');
	});
	it('DropRight([object, integer]) is equal to _.dropRight([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(output, DropRight(...input), 'whoops');
	});
});
