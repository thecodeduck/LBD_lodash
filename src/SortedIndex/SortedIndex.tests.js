/* eslint-env mocha */
const SortedIndex = require('./SortedIndex.js');
const chai = require('chai');
const _ = require('lodash');

describe('SortedIndex is equal to _.sortedIndex', () => {
	it('SortedIndex is a function', () => {
		chai.assert.isFunction(SortedIndex, 'SortedIndex is not a function');
	});
	it('expected input', () => {
		var input = [ [ 0, 1, 2, 3, 4, 5, 6 ], 4 ];
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
	it('expected input', () => {
		var input = [ [ 0, 1, 2, 3, 4, 4, 4, 5 ], 4 ];
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.sortedIndex(input);
		chai.assert.deepEqual(SortedIndex(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
	it('[ [ undefined ],[ undefined ] ]', () => {
		var input = [ [ undefined ], [ undefined ] ];
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.sortedIndex(...input);
		chai.assert.deepEqual(SortedIndex(...input), output, 'whoops');
	});
});
