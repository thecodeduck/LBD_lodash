/* eslint-env mocha */
const Join = require('./Join.js');
const chai = require('chai');
const _ = require('lodash');

describe('Join is equal to _.join', function () {
	it('Join is a function', function () {
		chai.assert.isFunction(Join, 'Join is not a function');
	});
	it('Join(undefined) is equal to _.join(undefined)', function () {
		var input = undefined;
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('Join([ undefined ]) is equal to _.join([ undefined ])', function () {
		var input = [ undefined ];
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('Join([ [ undefined ], undefined ]) is equal to _.join([ [ undefined ], undefined ])', function () {
		var input = [ [ undefined ], undefined ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('Join([ array ], [ array ]) is equal to _.join([ array ], [ array ])', function () {
		var input = [ [ 1, 2, 3 ], [ 5, 6 ] ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('Join([ array ], integer) is equal to _.join([ array ], integer)', function () {
		var input = [ [ 0, 1, 2, 3, [ 4 ], 4 ], 4 ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('Join([object, integer]) is equal to _.join([object, integer])', function () {
		var input = [ { 1: 'a', 2: { 3: 'c' } }, 2 ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('Join(string) is equal to _.join(string)', function () {
		var input = 'string';
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('Join(string, null) is equal to _.join(string, null)', function () {
		var input = [ 'string', null ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('Join(string, integer) is equal to _.join(string, integer)', function () {
		var input = [ 'string', 3 ];
		var output = _.join(...input);
		chai.assert.deepEqual(output, Join(...input), 'whoops');
	});
	it('Join(integer) is equal to _.join(integer)', function () {
		var input = 2;
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('Join({object}) is equal to _.join({object})', function () {
		var input = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
	it('Join(undefined, integer, null, boolean, {object}) is equal to _.join(undefined, integer, null, boolean, {object})', function () {
		let input = [ undefined, 1, null, true, { 1: 2 } ];
		var output = _.join(input);
		chai.assert.deepEqual(output, Join(input), 'whoops');
	});
});
