/* eslint-env mocha */
const Reverse = require('./Reverse.js');
const chai = require('chai');
const _ = require('lodash');

describe('Reverse is equal to _.reverse', () => {
	it('Reverse is a function', () => {
		chai.assert.isFunction(Reverse, 'Reverse is not a function');
	});
	it('expected input, even index', () => {
		var input = [ [ 0, 1, 2, 3, 4, 5, 6 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('expected input, odd index', () => {
		var input = [ [ 0, 1, 2, 3, 4, 5 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.reverse(input);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('[ [ undefined ],[ undefined ] ]', () => {
		var input = [ [ undefined ], [ undefined ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var inputCopy = _.cloneDeep(input);
		var output = _.reverse(inputCopy);
		chai.assert.deepEqual(Reverse(input), output, 'whoops');
	});
});
