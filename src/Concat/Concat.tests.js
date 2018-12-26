/* eslint-env mocha */
const Concat = require('./Concat.js');
const chai = require('chai');
const _ = require('lodash');

describe('Concat is equal to _.concat', () => {
	it('Concat is a function', () => {
		chai.assert.isFunction(Concat, 'Concat is not a function');
	});
	it('expected input', () => {
		var input = [ [ 1, 2, 3, [ 4 ] ], [ 'x', 5, [ 6, 7 ], [ '8', [ '9' ] ], [ [ 'a', [ 'b' ], 'c' ], 'd' ] ] ];
		var output = _.concat(...input);
		chai.assert.deepEqual(Concat(...input), output, 'whoops');
	});
	it('[ ]', () => {
		var input = [ ];
		var output = _.concat(...input);
		chai.assert.deepEqual(Concat(...input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.concat(...input);
		chai.assert.deepEqual(Concat(...input), output, 'whoops');
	});
	it('[ null ]', () => {
		var input = [ null ];
		var output = _.concat(...input);
		chai.assert.deepEqual(Concat(...input), output, 'whoops');
	});
	it('[ [ undefined ], args ]', () => {
		var input = [ [ undefined ], 1, 2, 3 ];
		var output = _.concat(...input);
		chai.assert.deepEqual(Concat(...input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ '1', [ 2 ] ];
		var output = _.concat(...input);
		chai.assert.deepEqual(Concat(...input), output, 'whoops');
	});
	it('[ string, string ]', () => {
		var input = [ 'cat', 'dog' ];
		var output = _.concat(...input);
		chai.assert.deepEqual(Concat(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.concat(...input);
		chai.assert.deepEqual(Concat(...input), output, 'whoops');
	});
});
