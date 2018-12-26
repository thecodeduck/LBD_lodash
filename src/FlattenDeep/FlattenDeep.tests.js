/* eslint-env mocha */
const FlattenDeep = require('./FlattenDeep.js');
const chai = require('chai');
const _ = require('lodash');

describe('FlattenDeep is equal to _.flattenDeep', () => {
	it('FlattenDeep is a function', () => {
		chai.assert.isFunction(FlattenDeep, 'FlattenDeep is not a function');
	});
	it('expected input', () => {
		var input = [ [ 'a', 'b', 'c', [ 'd', [ 'e' ] ], [ 'f', [ 'g', [ 'h' ] ] ] ] ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('[ array, integer ]', () => {
		var input = [ [ 'a', 'b', 'c', [ 'd' ] ], 1, 2, 3 ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ '', 1, 2, 3, [ 4 ] ], [ 1, 2 ], 2, 4 ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
	it('[ array , integer, [ integer ], [ integer ] ]', () => {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.flattenDeep(input);
		chai.assert.deepEqual(FlattenDeep(input), output, 'whoops');
	});
});
