/* eslint-env mocha */
const Drop = require('./Drop.js');
const chai = require('chai');
const _ = require('lodash');

describe('Drop is equal to _.drop', () => {
	it('Drop is a function', () => {
		chai.assert.isFunction(Drop, 'Drop is not a function');
	});
	it('expected input', () => {
		var input = [ [ 'a', 'b', 'c', 'd' ], 3 ];
		var output = _.drop(...input);
		chai.assert.deepEqual(Drop(...input), output, 'whoops');
	});
	it('expected input with default value', () => {
		var input = [ [ 'a', 'b', 'c', 'd' ] ];
		var output = _.drop(...input);
		chai.assert.deepEqual(Drop(...input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.drop(...input);
		chai.assert.deepEqual(Drop(...input), output, 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.drop(...input);
		chai.assert.deepEqual(Drop(...input), output, 'whoops');
	});
	it('[ [ array ], [ array ] ]', () => {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ] ];
		var output = _.drop(...input);
		chai.assert.deepEqual(Drop(...input), output, 'whoops');
	});
	it('[ [ array ], string ]', () => {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], 'string' ];
		var output = _.drop(...input);
		chai.assert.deepEqual(Drop(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.drop(...input);
		chai.assert.deepEqual(Drop(...input), output, 'whoops');
	});
});
