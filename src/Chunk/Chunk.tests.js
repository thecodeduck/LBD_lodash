/* eslint-env mocha */
const Chunk = require('./Chunk.js');
const chai = require('chai');
const _ = require('lodash');

describe('Chunk is equal to _.chunk', () => {
	it('Chunk is a function', () => {
		chai.assert.isFunction(Chunk, 'Chunk is not a function');
	});
	it('expected input', () => {
		var input = [ [ 1, 2, 3, 4 ], 3 ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(Chunk(...input), output, 'whoops');
	});
	it('expected input with default value', () => {
		var input = [ [ 1, 2, 3, 4 ] ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(Chunk(...input), output, 'whoops');
	});
	it('[ undefined, integer ]', () => {
		var input = [ undefined, 1 ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(Chunk(...input), output, 'whoops');
	});
	it('[ array, 0 ]', () => {
		var input = [ [ 1, 2, 3, 4 ], 0 ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(Chunk(...input), output, 'whoops');
	});
	it('[ [ null ] ]', () => {
		var input = [ [ null ] ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(Chunk(...input), output, 'whoops');
	});
	it('[ object ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(Chunk(...input), output, 'whoops');
	});
});
