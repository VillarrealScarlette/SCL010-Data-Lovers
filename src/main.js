const pokemones = POKEMON.pokemon;
for (let i = 0; i < pokemones.length; i++) {
    console.log(pokemones[i].num);
    console.log(pokemones[i].name);
    console.log(pokemones[i].img);
    //Creando 'div' que será la tarjeta container
    let pokeCards = document.createElement("div");
    pokeCards.id = pokemones[i].name;
    pokeCards.className = "pokeCards";
    //Creando nombre del pokemon
    let pokeName = document.createElement("h3");
    pokeName.textContent = pokemones[i].name;

    //Mostrar tarjeta en HTLM -> section
    document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
}

/*let createWindow =
let window = document.createElement("div id="ventana");
pokemon.innerHTML = "createElement";
window.addEventListener('click', openWindow);
function openWindow(){

}*/
