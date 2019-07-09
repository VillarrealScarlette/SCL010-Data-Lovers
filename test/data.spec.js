global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon');
require('../src/data');
require('./data.spec.js');


describe(window.filterEggs, () => {
  
  it("debería ser una función", () => {
    assert.equal(typeof filterEggs, "function");
  });
}); 
describe(window.filterTypes, () => {  

  it("debería ser una función", () => {
    assert.equal(typeof filterTypes, "function");
  });
});
describe(window.ascendingNum, () => {  

  it("debería ser una función", () => {
    assert.equal(typeof ascendingNum, "function");
  });
});
describe(window.descendingNum, () => { 

  it("debería ser una función", () => {
    assert.equal(typeof descendingNum, "function");
  });
});
describe(window.descendingName, () => { 

  it("debería ser una función", () => {
    assert.equal(typeof descendingName, "function");
  });
});
describe(window.ascendingName, () => {  
  it("debería ser una función", () => {
    assert.equal(typeof ascendingName, "function");
  });
});

//assert.deepEqual