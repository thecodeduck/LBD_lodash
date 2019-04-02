/* eslint-env mocha */
const Now = require('./Now.js');
const chai = require('chai');
const _ = require('lodash');

describe('Now is equal to _.now', () => {
	it('Now is a function', () => {
		chai.assert.isFunction(Now, 'Now is not a function');
	});
	it('expected input', () => {
		var output = _.now();
		chai.assert.deepEqual(Now(), output, 'whoops');
	});
});
