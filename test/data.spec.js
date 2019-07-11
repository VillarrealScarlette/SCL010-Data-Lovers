global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon');
require('../src/data');
require('./data.spec.js');

describe('window.filterEggs', () => {
  const sampleEggs = [
    {
      "name": "Charmander",
      "egg": "2 km",
    },
    {
      "name": "Vulpix",
      "egg": "5 km"
    }
  ] 
  it('debería ser una función', () => {
    assert.equal(typeof filterEggs, "function");
  });
   it("debería retornar el objeto Charmander al filtrar por huevo de 2 km", () => {
    assert.deepEqual(window.filterEggs(sampleEggs, "2 km"), [{"name": "Charmander", "egg": "2 km"}]);
  });
}); 
describe('window.filterTypes', () => {  
  const sampleType = [
    {
      "name": "Mew",
      "type": "Psychic"
      
    },
    {
      "name": "Charmeleon",
      "type": "Fire"
    }
  ]
  it("debería ser una función", () => {
    assert.equal(typeof filterTypes, "function");
  });
  it("debería retornar el objeto Mew al filtrar por tipo Psychic", () => {
    assert.deepEqual(window.filterTypes(sampleType, "Psychic"), [{"name": "Mew", "type": "Psychic"}]);
  });
});
describe('window.order', () => {  
  const sample = [
      {
          "id": 1,
          "name": "Bulbasaur"
      },
      {
          "id": 2,
          "name": "Ivysaur"
      }
  ]
  it ("debería retornar 1 Bulbasaur y 2 Ivysaur al ordenar del 1-151", () => {
    assert.deepEqual(window.order(sample, "1-151"), [{"id": 1, "name": "Bulbasaur"},{"id": 2, "name": "Ivysaur"}]);
  });
  
  it ("debería retornar 2 Ivysaur y 1 Bulbasaur al ordenar del 151-1", () => {
    assert.deepEqual(window.order(sample, "151-1"), [{"id": 2, "name": "Ivysaur"},{"id": 1, "name": "Bulbasaur"}]);
  });

  it ("debería retornar Bulbasaur y Ivysaur al ordenar de A-Z", () => {
    assert.deepEqual(window.order(sample, "A-Z"), [{"id": 1, "name": "Bulbasaur"},{"id": 2, "name": "Ivysaur"}]);
  });

  it ("debería retornar Ivysaur y Bulbasaur al ordenar de Z-A", () => {
    assert.deepEqual(window.order(sample, "Z-A"), [{"id": 2, "name": "Ivysaur"},{"id": 1, "name": "Bulbasaur"}]);
  });

  it("debería ser una función", () => {
    assert.equal(typeof order, "function");
  });
});
describe('window.porcentageEgg', () => {

  it("debería ser una función", () => {
    assert.equal(typeof porcentageEgg, "function");
  });

  it("debería retornar que existe un 9% de pokemones que eclocionan al filtrar por huevos de 2 km", () => {
    assert.deepEqual(window.porcentageEgg(window.filterResult, "2 km"), 9);
  });

  it("debería retornar que existe un 2% de pokemones de tipo Dragon", () => {
    assert.deepEqual(window.porcentageEgg(window.filterResult, "Dragon"), 2);
  });
});