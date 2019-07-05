const pokemones = POKEMON.pokemon;
for (let i = 0; i < pokemones.length; i++) {
    console.log(pokemones[i].num);
    console.log(pokemones[i].name);
    console.log(pokemones[i].img);
    //Creando 'div' que será la tarjeta container 
    let pokeCards = document.createElement("div");
    pokeCards.className = "pokeCards";
    //Creando nombre del pokemon
    let pokeName = document.createElement("h3");
    pokeName.textContent = pokemones[i].name;
    //Creando imagen del pokemon
    let image = document.createElement("img");
    image.src = pokemones[i].img;
    image.id = "pokeImagen";
    //Creando número del pokemon
    let pokeNumber = document.createElement("h4");
    pokeNumber.textContent = "#"+ pokemones[i].num;
    //Creando tipo de pokemon -> primer tipo
    let pokeType = document.createElement("p");
    pokeType.textContent = pokemones[i].type[0];
    //Creando tipo de pokemon -> segundo tipo
    pokeType2 = document.createElement("p");
    pokeType2.textContent = pokemones[i].type[1];
    //Dando valor a variables
    pokeCards.appendChild(pokeName);
    pokeCards.appendChild(pokeNumber);
    pokeCards.appendChild(image);
    pokeCards.appendChild(pokeType);
    pokeCards.appendChild(pokeType2);
    //Mostrar tarjeta en HTLM -> section
    document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML; 

/* let openWindow = document.getElementById("pokeImagen");
let overlay = document.createElement("div");
overlay.className = "overlay";
let popup = document.createElement("div");
popup.className = "popup";

openWindow.addEventListener('click', function() {
overlay.classList.add('active');
});
}*/

//closeWindow = document.getElementById("cerrarPopUp")
//cerrarPopUp.id;

//Valor 
const selectType = document.getElementById("type");
selectType.addEventListener("change", () => {
    //Condicion = variable
    let selectUserType = selectType.options[selectType.selectedIndex].value;
    console.log(selectUserType);
});
}
