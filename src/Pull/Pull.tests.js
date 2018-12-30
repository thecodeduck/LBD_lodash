/* eslint-env mocha */
const Pull = require('./Pull.js');
const chai = require('chai');
const _ = require('lodash');

describe('Pull is equal to _.pull', () => {
	it('Pull is a function', () => {
		chai.assert.isFunction(Pull, 'Pull is not a function');
	});
	it('expected input', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(...inputCopy);
		chai.assert.deepEqual(Pull(...input), output, 'whoops');
	});
	it('expected input with no value', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(...inputCopy);
		chai.assert.deepEqual(Pull(...input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.pull(input);
		chai.assert.deepEqual(Pull(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(inputCopy);
		chai.assert.deepEqual(Pull(input), output, 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(...inputCopy);
		chai.assert.deepEqual(Pull(...input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(...inputCopy);
		chai.assert.deepEqual(Pull(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(...inputCopy);
		chai.assert.deepEqual(Pull(...input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(inputCopy);
		chai.assert.deepEqual(Pull(input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(...inputCopy);
		chai.assert.deepEqual(Pull(...input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(inputCopy);
		chai.assert.deepEqual(Pull(input), output, 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var inputCopy = _.cloneDeep(input);
		var output = _.pull(inputCopy);
		chai.assert.deepEqual(Pull(input), output, 'whoops');
	});
});
