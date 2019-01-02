/* eslint-env mocha */
const Union = require('./Union.js');
const chai = require('chai');
const _ = require('lodash');

describe('Union is equal to _.union', () => {
	it('Union is a function', () => {
		chai.assert.isFunction(Union, 'Union is not a function');
	});
	it('expected input', () => {
		var input = [ 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6 ];
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
	it('[ [ undefined ],[ undefined ] ]', () => {
		var input = [ [ undefined ], [ undefined ] ];
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.union(input);
		chai.assert.deepEqual(Union(input), output, 'whoops');
	});
});
