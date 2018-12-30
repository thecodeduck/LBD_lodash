/* eslint-env mocha */
const Slice = require('./Slice.js');
const chai = require('chai');
const _ = require('lodash');

describe('Slice is equal to _.slice', () => {
	it('Slice is a function', () => {
		chai.assert.isFunction(Slice, 'Slice is not a function');
	});
	it('expected input with default value', () => {
		var input = [ [ 0, 1, 2, 3, 4, 5, 6 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('expected input', () => {
		var input = [ [ 0, 1, 2, 3, 4, 5 ], 2, 4 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.slice(input);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('[ [ undefined ],[ undefined ] ]', () => {
		var input = [ [ undefined ], [ undefined ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var inputCopy = _.cloneDeep(input);
		var output = _.slice(inputCopy);
		chai.assert.deepEqual(Slice(input), output, 'whoops');
	});
});
