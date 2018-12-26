/* eslint-env mocha */
const Fill = require('./Fill.js');
const chai = require('chai');
const _ = require('lodash');

describe('Fill is equal to _.fill', () => {
	it('Fill is a function', () => {
		chai.assert.isFunction(Fill, 'Fill is not a function');
	});
	it('expected input', () => {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ], 2, 4 ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
	it('expected input with default values', () => {
		var input = [ [ 'a', 'b', 'c', 'd' ], 3 ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
	it('[ array ]', () => {
		var input = [ [ 'a', 'b', 'c', 'd' ] ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
	it('[ string ]', () => {
		var input = [ 'string' ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
	it('[ integer ]', () => {
		var input = [ 2 ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
	it('[ array ], integer, [ integer ], [ integer ]', () => {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
	it('[ array ], integer, [ array ]', () => {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3, 4 ] ];
		var output = _.fill(...input);
		chai.assert.deepEqual(Fill(...input), output, 'whoops');
	});
});
