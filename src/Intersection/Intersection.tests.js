/* eslint-env mocha */
const Intersection = require('./Intersection.js');
const chai = require('chai');
const _ = require('lodash');

describe('Intersection is equal to _.intersection', function () {
	it('Intersection is a function', function () {
		chai.assert.isFunction(Intersection, 'Intersection is not a function');
	});
	it('Intersection(undefined) is equal to _.intersection(undefined)', function () {
		var input = undefined;
		var output = _.intersection(input);
		chai.assert.deepEqual(Intersection(input), output, 'whoops');
	});
	it('Intersection([ undefined ]) is equal to _.intersection([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
	// Lodash error
	// it('Intersection([ [ undefined ], undefined ]) is equal to _.intersection([ [ undefined ], undefined ])', function () {
	// 	var input = [ [ undefined ], undefined ];
	// 	var output = _.intersection(...input);
	// 	chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	// });
	it('Intersection([ array ], [ array ]) is equal to _.intersection([ array ], [ array ])', function () {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
	it('Intersection([ array ], integer) is equal to _.intersection([ array ], integer)', function () {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
	it('Intersection([object, integer]) is equal to _.intersection([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
	it('Intersection([string], [string]) is equal to _.intersection([string], [string])', function () {
		var input = [ 'string', 's' ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
	it('Intersection(integer) is equal to _.intersection(integer)', function () {
		var input = 2;
		var output = _.intersection(input);
		chai.assert.deepEqual(Intersection(input), output, 'whoops');
	});
	it('Intersection([ array ], integer, [ integer ], [ integer ]) is equal to _.intersection([ array ], integer, [ integer ], [ integer ])', function () {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
});
