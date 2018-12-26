/* eslint-env mocha */
const Flatten = require('./Flatten.js');
const chai = require('chai');
const _ = require('lodash');

describe('Flatten is equal to _.flatten', () => {
	it('Flatten is a function', () => {
		chai.assert.isFunction(Flatten, 'Flatten is not a function');
	});
	it('expected input', () => {
		var input = [ 'a', 'b', 'c', [ 'd', [ 'e' ] ] ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('[ array, integer ]', () => {
		var input = [ [ 'a', 'b', 'c', [ 'd' ] ], 1, 2, 3 ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('[ array ], [ array ]', () => {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ], 2, 4 ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
	it('[ array ], integer, [ integer ], [ integer ]', () => {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.flatten(input);
		chai.assert.deepEqual(Flatten(input), output, 'whoops');
	});
});
