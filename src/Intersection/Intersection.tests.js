/* eslint-env mocha */
const Intersection = require('./Intersection.js');
const chai = require('chai');
const _ = require('lodash');

describe('Intersection is equal to _.intersection', () => {
	it('Intersection is a function', () => {
		chai.assert.isFunction(Intersection, 'Intersection is not a function');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.intersection(input);
		chai.assert.deepEqual(Intersection(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
	// Lodash error
	// it('[ [ undefined ], undefined ]', () => {
	// 	var input = [ [ undefined ], undefined ];
	// 	var output = _.intersection(...input);
	// 	chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	// });
	it('[ array, array ]', () => {
		var input = [ [ 1, 2 ], [ 5, 6 ] ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
	it('[ array , integer ]', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
// lodash does not support string
	// it('[ string, string ]', () => {
	// 	var input = [ 'string', 's' ];
	// 	var output = _.intersection(...input);
	// 	chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	// });
	it('integer', () => {
		var input = 2;
		var output = _.intersection(input);
		chai.assert.deepEqual(Intersection(input), output, 'whoops');
	});
	it('[ array, integer, [ integer ], [ integer ] ]', () => {
		var input = [ [ 0, 1, 2, 3, 4 ], 1, [ 3 ], [ 4 ] ];
		var output = _.intersection(...input);
		chai.assert.deepEqual(Intersection(...input), output, 'whoops');
	});
});
