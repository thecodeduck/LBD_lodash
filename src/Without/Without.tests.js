/* eslint-env mocha */
const Without = require('./Without.js');
const chai = require('chai');
const _ = require('lodash');

describe('Without is equal to _.without', () => {
	it('Without is a function', () => {
		chai.assert.isFunction(Without, 'Without is not a function');
	});
	it('expected input', () => {
		var input = [ [ 2, 1, 2, 3 ], 1, 2 ];
		var output = _.without(...input);
		chai.assert.deepEqual(Without(...input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.without(input);
		chai.assert.deepEqual(Without(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.without(input);
		chai.assert.deepEqual(Without(input), output, 'whoops');
	});
	it('[ [ undefined ],[ undefined ] ]', () => {
		var input = [ [ undefined ], [ undefined ] ];
		var output = _.without(...input);
		chai.assert.deepEqual(Without(...input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2, 3 ], [ 1, 2, 3 ] ];
		var output = _.without(...input);
		chai.assert.deepEqual(Without(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.without(...input);
		chai.assert.deepEqual(Without(...input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.without(input);
		chai.assert.deepEqual(Without(input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var output = _.without(...input);
		chai.assert.deepEqual(Without(...input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.without(input);
		chai.assert.deepEqual(Without(input), output, 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.without(input);
		chai.assert.deepEqual(Without(input), output, 'whoops');
	});
});
