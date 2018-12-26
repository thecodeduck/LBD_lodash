/* eslint-env mocha */
const Nth = require('./Nth.js');
const chai = require('chai');
const _ = require('lodash');

describe('Nth is equal to _.nth', () => {
	it('Nth is a function', () => {
		chai.assert.isFunction(Nth, 'Nth is not a function');
	});
	it('expected input', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('expected input with default value', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ] ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('[ [ array ], [ array ] ]', () => {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var output = _.nth(...input);
		chai.assert.deepEqual(output, Nth(...input), 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.nth(input);
		chai.assert.deepEqual(output, Nth(input), 'whoops');
	});
});
