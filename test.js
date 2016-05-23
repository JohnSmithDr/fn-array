'use strict';

let assert = require('assert');
let FunctionArray = require('./index');

describe('FunctionArray', function() {

  it('should be ok', function() {

    let fnArr = FunctionArray
      .create()
      .use(function foo() { return 'foo'; })
      .use(function bar() { return 'bar'; })
      .use(1);

    assert.equal(2, fnArr.length);

    fnArr.each((fn, i) => {
      if (i === 0) {
        assert.equal('foo', fn.name);
        assert.equal('foo', fn());
      }
      if (i === 1) {
        assert.equal('bar', fn.name);
        assert.equal('bar', fn());
      }
    });

    let arr = fnArr.toArray();
    assert.equal(true, Array.isArray(arr));

    let fn, i = 0;

    let it = fnArr.iterator();
    while(fn = it.next().value) {
      if (i === 0) {
        assert.equal('foo', fn.name);
        assert.equal('foo', fn());
      }
      if (i === 1) {
        assert.equal('bar', fn.name);
        assert.equal('bar', fn());
      }
      ++i;
    }

    i = 0;
    it = fnArr.iterator();
    while(fn = it.next().value) {
      if (i === 0) {
        assert.equal('foo', fn.name);
        assert.equal('foo', fn());
      }
      if (i === 1) {
        assert.equal('bar', fn.name);
        assert.equal('bar', fn());
      }
      ++i;
    }

  });

});