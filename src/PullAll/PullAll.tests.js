/* eslint-env mocha */
const PullAll = require('./PullAll.js');
const chai = require('chai');
const _ = require('lodash');

describe('PullAll is equal to _.pullAll', () => {
	it('PullAll is a function', () => {
		chai.assert.isFunction(PullAll, 'PullAll is not a function');
	});
	it('expected input', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], [ 4, 3 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(...inputCopy);
		chai.assert.deepEqual(PullAll(...input), output, 'whoops');
	});
	it('expected input with no value', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(...inputCopy);
		chai.assert.deepEqual(PullAll(...input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.pullAll(input);
		chai.assert.deepEqual(PullAll(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(inputCopy);
		chai.assert.deepEqual(PullAll(input), output, 'whoops');
	});
	it('[ [ undefined ], [ undefined ] ]', () => {
		var input = [ [ undefined ], [ undefined ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(...inputCopy);
		chai.assert.deepEqual(PullAll(...input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(...inputCopy);
		chai.assert.deepEqual(PullAll(...input), output, 'whoops');
	});
	it('[ array, integer ]', () => {
		var input = [ [ 1, 2, 3 ], 3 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(...inputCopy);
		chai.assert.deepEqual(PullAll(...input), output, 'whoops');
	});
	it('[ object, array ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, [ 2, 1 ] ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(...inputCopy);
		chai.assert.deepEqual(PullAll(...input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(inputCopy);
		chai.assert.deepEqual(PullAll(input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(...inputCopy);
		chai.assert.deepEqual(PullAll(...input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(inputCopy);
		chai.assert.deepEqual(PullAll(input), output, 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var inputCopy = _.cloneDeep(input);
		var output = _.pullAll(inputCopy);
		chai.assert.deepEqual(PullAll(input), output, 'whoops');
	});
});
