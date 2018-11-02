/* eslint-env mocha */
const Chunk = require('./Chunk.js');
const chai = require('chai');
const _ = require('lodash');

describe('Chunk is equal to _.chunk', function () {
	it('Chunk is a function', function () {
		chai.assert.isFunction(Chunk, 'Chunk is not a function');
	});
	it('Chunk(undefined) returns empty array', function () {
		var input = [ undefined, 1 ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(output, Chunk(...input), 'whoops');
	});
	it('Chunk(array) defaults [size = 1]', function () {
		var input = [ [ 1, 2, 3, 4 ] ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(output, Chunk(...input), 'whoops');
	});
	it('Chunk(array, 0 ]) returns empty array', function () {
		var input = [ [ 1, 2, 3, 4 ], 0 ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(output, Chunk(...input), 'whoops');
	});
	it('Chunk(array, size) is equal to _.chunk(array, size)', function () {
		var input = [ [ 1, 2, 3, 4 ], 3 ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(output, Chunk(...input), 'whoops');
	});
	it('Chunk([ [ null ] ]) returns empty array', function () {
		var input = [ [ null ] ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(output, Chunk(...input), 'whoops');
	});
	it('Chunk(object) returns empty array', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.chunk(...input);
		chai.assert.deepEqual(output, Chunk(...input), 'whoops');
	});
});
