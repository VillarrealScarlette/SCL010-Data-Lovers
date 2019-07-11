const pokeData = window.POKEMON.pokemon;
window.pokeData = pokeData;

//Filtrar por Huevos
const filterEggs = (pokeData, selectedEgg) => {
    const resultEgg = pokeData.filter(Element => {
      return Element.egg === selectedEgg;
    });
    return resultEgg;
  }
window.filterEggs = filterEggs;
//Filtrar por Tipo
const filterTypes = (pokeData, selectedType) => {
    const resultType = pokeData.filter(Element => {
        return Element.type.includes(selectedType);
    });
    return resultType;
}
window.filterTypes = filterTypes;
//Ordenar
const order = (pokeData, selectedOrder) => {
    let filterOrder = "";
    if (selectedOrder === "1-151") {
        filterOrder = pokeData.sort((a, b) => {
            return a.id - b.id
        })} else if (selectedOrder === "151-1") {
            filterOrder = pokeData.sort((a, b) => {
            return b.id - a.id
        })} else if (selectedOrder === "A-Z") {
            filterOrder = pokeData.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })} else if (selectedOrder === "Z-A") {
            filterOrder = pokeData.sort((a, b) => {
            return b.name.localeCompare(a.name);
        })}
        return filterOrder; 
}
window.order = order;
//Porcentaje
const porcentageEgg = (filterResult, pokeData) => {
    const result = Math.round(filterResult.length*100/pokeData.length);
    return result;
}
window.porcentageEgg = porcentageEgg;