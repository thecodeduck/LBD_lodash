/* eslint-env mocha */
const Zip = require('./Zip.js');
const chai = require('chai');
const _ = require('lodash');

describe('Zip is equal to _.zip', () => {
	it('Zip is a function', () => {
		chai.assert.isFunction(Zip, 'Zip is not a function');
	});
	it('expected input', () => {
		var input = [ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ];
		var output = _.zip(...input);
		chai.assert.deepEqual(Zip(...input), output, 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.zip(input);
		chai.assert.deepEqual(Zip(input), output, 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.zip(input);
		chai.assert.deepEqual(Zip(input), output, 'whoops');
	});
	it('[ [ undefined ],[ undefined ] ]', () => {
		var input = [ [ undefined ], [ undefined ] ];
		var output = _.zip(...input);
		chai.assert.deepEqual(Zip(...input), output, 'whoops');
	});
	it('[ array, array ]', () => {
		var input = [ [ 1, 2, 3 ], [ 1, 2, 3 ] ];
		var output = _.zip(...input);
		chai.assert.deepEqual(Zip(...input), output, 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.zip(...input);
		chai.assert.deepEqual(Zip(...input), output, 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.zip(input);
		chai.assert.deepEqual(Zip(input), output, 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var output = _.zip(...input);
		chai.assert.deepEqual(Zip(...input), output, 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.zip(input);
		chai.assert.deepEqual(Zip(input), output, 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.zip(input);
		chai.assert.deepEqual(Zip(input), output, 'whoops');
	});
});
