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
    //Creando imagen del pokemon
    let image = document.createElement("img");
    image.src = pokemones[i].img;
    //Creando número del pokemon
    let pokeNumber = document.createElement("p");
    pokeNumber.textContent = pokemones[i].num;
    //Creando tipo de pokemon
    let pokeType = document.createElement("p");
    pokeType.textContent = pokemones[i].type;
    //Dando valor a variables
    pokeCards.appendChild(pokeName);
    pokeCards.appendChild(pokeNumber);
    pokeCards.appendChild(image);
    pokeCards.appendChild(pokeType);
    //Mostrar tarjeta en HTLM -> section
    document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML; 
}