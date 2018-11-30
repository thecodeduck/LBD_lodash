/* eslint-env mocha */
const Nth = require('./Nth.js');
const chai = require('chai');
const _ = require('lodash');

describe('Nth is equal to _.nth', function () {
	it('Nth is a function', function () {
		chai.assert.isFunction(Nth, 'Nth is not a function');
	});
	it('Nth(undefined) is equal to _.nth(undefined)', function () {
		var input = undefined;
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
	it('Nth([ undefined ]) is equal to _.nth([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
	it('Nth([ [ undefined ], undefined ]) is equal to _.nth([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('Nth([ array ], [ array ]) is equal to _.nth([ array ], [ array ])', function () {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('Nth([ array ], integer) is equal to _.nth([ array ], integer)', function () {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('Nth([object, integer]) is equal to _.nth([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('Nth(string) is equal to _.nth(string)', function () {
		var input = 'string';
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
	it('Nth(string, integer) is equal to _.nth(string, integer)', function () {
		var input = [ 'string', 3 ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('Nth(integer) is equal to _.nth(integer)', function () {
		var input = 2;
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
	it('Nth({object}) is equal to _.nth({object})', function () {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
});
