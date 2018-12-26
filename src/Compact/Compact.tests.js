/* eslint-env mocha */
const Compact = require('./Compact.js');
const chai = require('chai');
const _ = require('lodash');

describe('Compact is equal to _.compact', () => {
	it('Compact is a function', () => {
		chai.assert.isFunction(Compact, 'Compact is not a function');
	});
	it('expected input', () => {
		var input = [ 0, 1, 2, 3, 4, false, 5, 6 ];
		var output = _.compact(input);
		chai.assert.deepEqual(Compact(input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.compact(input);
		chai.assert.deepEqual(Compact(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.compact(input);
		chai.assert.deepEqual(Compact(input), output, 'whoops');
	});
	it('[ [ null ] ]', () => {
		var input = [ [ null ] ];
		var output = _.compact(input);
		chai.assert.deepEqual(Compact(input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.compact(input);
		chai.assert.deepEqual(Compact(input), output, 'whoops');
	});
});
