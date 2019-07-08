const pokeData = () => {
  const arrPokemones = POKEMON.pokemon;
  return arrPokemones;
}
window.pokeData = pokeData;
//Filtrar por Huevos
const filterEggs = (egg) => {
  arrPokemones = POKEMON.pokemon;
  let filters = [];
  for (i = 0; i < pokemones.length; i++) {
      if (arrPokemones[i].egg == egg) {
          filters.push(arrPokemones[i]);
      }
  }
return filters;
}
window.filterEggs = filterEggs;
//Filtrat por Tipo
const filterTypes = (type) => {
  arrPokemones = POKEMON.pokemon;
  let filters = [];
  for (i = 0; i < pokemones.length; i++) {
      if (arrPokemones[i].type[0] == type) {
          filters.push(arrPokemones[i]);
      } else if (arrPokemones[i].type[1] == type) {
          filters.push(arrPokemones[i]);
      }
  }
return filters;
}
window.filterTypes = filterTypes;
//Ordenar A-Z