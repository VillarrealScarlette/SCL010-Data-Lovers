global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon');
require('../src/data');
require('./data.spec.js');


describe(window.showByEgg, () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof showByEgg, 'function');
  });

  it('debería ser una función', () => {
    assert.equal(typeof showByType, 'function');
  });

  it('debería ser una función', () => {
    assert.equal(typeof filter, 'function');
  });
})

//assert.deepEqual