const arrPokemones = window.POKEMON.pokemon;
const pokeData = () => { 
  return arrPokemones;
}
window.pokeData = pokeData;

//Filtrar por Huevos
const filterEggs = (egg) => {
  let filters = [];
  for (let i = 0; i < arrPokemones.length; i++) {
      if (arrPokemones[i].egg == egg) {
          filters.push(arrPokemones[i]);
      }
  }
return filters;
}
window.filterEggs = filterEggs;
//Filtrar por Tipo
const filterTypes = (type) => {
  let filters = [];
  for (let i = 0; i < arrPokemones.length; i++) {
      if (arrPokemones[i].type[0] == type) {
          filters.push(arrPokemones[i]);
      } else if (arrPokemones[i].type[1] == type) {
          filters.push(arrPokemones[i]);
      }
  }
return filters;
}
window.filterTypes = filterTypes;
//Ordenar 1-151 -> Ascendente
function ascendingNum() {
    arrPokemones.sort(function(a, b) {
        return a.id - b.id
    });
}
window.ascendingNum = ascendingNum;
//Ordenar 151-1 -> Descendente
function descendingNum() {
    arrPokemones.sort(function(a, b) {
        return b.id - a.id
    });
}
window.descendingNum = descendingNum;
//Ordenar A-Z -> Descendente
function descendingName() {
    arrPokemones.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
}
window.descendingName = descendingName;
//Ordenar Z-A -> Ascendente
function ascendingName() {
    arrPokemones.sort(function(a, b) {
        return b.name.localeCompare(a.name);
    });
}

window.ascendingName = ascendingName;