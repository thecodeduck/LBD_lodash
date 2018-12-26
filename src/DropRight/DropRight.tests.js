/* eslint-env mocha */
const DropRight = require('./DropRight.js');
const chai = require('chai');
const _ = require('lodash');

describe('DropRight is equal to _.dropRight', () => {
	it('DropRight is a function', () => {
		chai.assert.isFunction(DropRight, 'DropRight is not a function');
	});
	it('expected input', () => {
		var input = [ [ 'a', 'b', 'c', 'd' ], 3 ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(DropRight(...input), output, 'whoops');
	});
	it('expected input with default value', () => {
		var input = [ [ 'a', 'b', 'c', 'd' ] ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(DropRight(...input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(DropRight(...input), output, 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(DropRight(...input), output, 'whoops');
	});
	it('[ array , array ]', () => {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ] ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(DropRight(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.dropRight(...input);
		chai.assert.deepEqual(DropRight(...input), output, 'whoops');
	});
});
