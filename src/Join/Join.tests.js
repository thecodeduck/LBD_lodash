/* eslint-env mocha */
const Join = require('./Join.js');
const chai = require('chai');
const _ = require('lodash');

describe('Join is equal to _.join', () => {
	it('Join is a function', () => {
		chai.assert.isFunction(Join, 'Join is not a function');
	});
	it('expected input', () => {
		var input = [ [ 'a', 'b', 'c' ], '.' ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('expected input with default value', () => {
		var input = [ 'a', 'b', 'c' ];
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('undefined', () => {
		var input = undefined;
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('[ undefined ]', () => {
		var input = [ undefined ];
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('[ [ undefined ], undefined ]', () => {
		var input = [ [ undefined ], undefined ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('[ array ,  array ]', () => {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('[ array , integer ]', () => {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('[ object, integer ]', () => {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('string', () => {
		var input = 'string';
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('[ string, null ]', () => {
		var input = [ 'string', null ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('[ string, integer ]', () => {
		var input = [ 'string', 3 ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('integer', () => {
		var input = 2;
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('object', () => {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('[ undefined, integer, null, boolean, object ]', () => {
		let input = [ undefined, 1, null, true, { 1: 2 } ];
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
});
