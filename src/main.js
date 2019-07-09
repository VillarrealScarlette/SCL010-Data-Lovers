let pokemones = pokeData();
for (let i = 0; i < pokemones.length; i++) {
<<<<<<< HEAD
    console.log(pokemones[i].num);
    console.log(pokemones[i].name);
    console.log(pokemones[i].img);

=======
>>>>>>> 3213bd23106db3d14bf1280bdb912e162d3c75f5
    //Creando 'div' que será la tarjeta container 
    let pokeCards = document.createElement("div");
    console.log(pokeCards);
    pokeCards.className = "pokeCards";
    pokeCards.id = "pokeCards";
    pokeCards.a =  pokemones[i].img;

    //Creando nombre del pokemon
    let pokeName = document.createElement("h3");
    pokeName.textContent = pokemones[i].name;

    //Creando imagen del pokemon
    let image = document.createElement("img");
    image.src = pokemones[i].img;
<<<<<<< HEAD
    image.id = "pokeImagen";
    image.className  = "pokeImg";
    image.onClick = pokemones[i].img;

=======
>>>>>>> 3213bd23106db3d14bf1280bdb912e162d3c75f5
    //Creando número del pokemon
    let pokeNumber = document.createElement("h4");
    pokeNumber.textContent = pokemones[i].num;
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
<<<<<<< HEAD
    document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
    
    
// MODAL 
let modal = document.getElementById("myModal");
let btn = document.getElementById("container_pokemones");
function showModal() {
modal.style.display = "block";
};
btn.addEventListener("click", showModal);
//CERRAR MODAL
let span = document.getElementsByClassName("close")[0];
function closeModal() {
  modal.style.display = "none";
  };
  span.addEventListener("click", closeModal);

// Para cerrar haciendo click afuera (NO ENTIENDO)
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
//Valor 
const selectType = document.getElementById("type");
selectType.addEventListener("change", () => {
    //Condicion = variable
    let selectUserType = selectType.options[selectType.selectedIndex].value;
    console.log(selectUserType);
})};
=======
    document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;         
}
//Filtrar por Huevo 
const selectEggs = document.getElementById("eggs");
selectEggs.addEventListener("change", showByEgg);
function showByEgg() {
    //Condicion = variable
    let pokemones = filterEggs(selectEggs.value);
    document.getElementById("container_pokemones").innerHTML = "";
    for (i = 0; i < pokemones.length; i++) {
        let pokeCards = document.createElement("div");
        pokeCards.className = "pokeCards";
        let pokeName = document.createElement("h3");
        pokeName.textContent = pokemones[i].name;
        let image = document.createElement("img");
        image.src = pokemones[i].img;
        let pokeNumber = document.createElement("h4");
        pokeNumber.textContent = pokemones[i].num;
        let pokeType = document.createElement("p");
        pokeType.textContent = pokemones[i].type[0];
        pokeType2 = document.createElement("p");
        pokeType2.textContent = pokemones[i].type[1];
        pokeCards.appendChild(pokeName);
        pokeCards.appendChild(pokeNumber);
        pokeCards.appendChild(image);
        pokeCards.appendChild(pokeType);
        pokeCards.appendChild(pokeType2);
        //Mostrar tarjeta en HTLM -> section
        document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
    }
}
//Filtrar por Tipo
const selectType = document.getElementById("type");
selectType.addEventListener("change", showByType);
function showByType() {
    //Condición = variable
    let pokemones = filterTypes(selectType.value);
    document.getElementById("container_pokemones").innerHTML = "";
    for (i = 0; i < pokemones.length; i++) {
        let pokeCards = document.createElement("div");
        pokeCards.className = "pokeCards";
        let pokeName = document.createElement("h3");
        pokeName.textContent = pokemones[i].name;
        let image = document.createElement("img");
        image.src = pokemones[i].img;
        let pokeNumber = document.createElement("h4");
        pokeNumber.textContent = pokemones[i].num;
        let pokeType = document.createElement("p");
        pokeType.textContent = pokemones[i].type[0];
        pokeType2 = document.createElement("p");
        pokeType2.textContent = pokemones[i].type[1];
        pokeCards.appendChild(pokeName);
        pokeCards.appendChild(pokeNumber);
        pokeCards.appendChild(image);
        pokeCards.appendChild(pokeType);
        pokeCards.appendChild(pokeType2);
        //Mostrar tarjeta en HTLM -> section
        document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
    }
}
//Ordenar A-Z
/*const ascending = document.getElementById("order");
ascending.addEventListener("change", showAscending);
function showAscending() {
    let pokemones = filterAscending(ascending.value);
    document.getElementById("container_pokemones").innerHTML = "";
    for (i = 0; i < pokemones.length; i++) {
        let pokeCards = document.createElement("div");
        pokeCards.className = "pokeCards";
        let pokeName = document.createElement("h3");
        pokeName.textContent = pokemones[i].name;
        let image = document.createElement("img");
        image.src = pokemones[i].img;
        let pokeNumber = document.createElement("h4");
        pokeNumber.textContent = pokemones[i].num;
        let pokeType = document.createElement("p");
        pokeType.textContent = pokemones[i].type[0];
        pokeType2 = document.createElement("p");
        pokeType2.textContent = pokemones[i].type[1];
        pokeCards.appendChild(pokeName);
        pokeCards.appendChild(pokeNumber);
        pokeCards.appendChild(image);
        pokeCards.appendChild(pokeType);
        pokeCards.appendChild(pokeType2);
        //Mostrar tarjeta en HTLM -> section
        document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
    }
}*/
//Busqueda Interna -> Pokemones
const search = document.getElementById("search");
const btnSearch = document.getElementById("img_search");
const containerPokemones = document.getElementById("container_pokemones");
const filter = () => {
    let enterSearch = search.value.toLowerCase();
    containerPokemones.innerHTML = "";
    for (i = 0; i < pokemones.length; i++) {
        let pokeName = pokemones[i].name.toLowerCase();
        let pokeNumber = pokemones[i].num;
        if (pokeName.indexOf(enterSearch) !== -1) {
            let pokeCards = document.createElement("div");
            pokeCards.className = "pokeCards";
            let pokeName = document.createElement("h3");
            pokeName.textContent = pokemones[i].name;
            let image = document.createElement("img");
            image.src = pokemones[i].img;
            let pokeNumber = document.createElement("h4");
            pokeNumber.textContent = pokemones[i].num;
            let pokeType = document.createElement("p");
            pokeType.textContent = pokemones[i].type[0];
            pokeType2 = document.createElement("p");
            pokeType2.textContent = pokemones[i].type[1];
            pokeCards.appendChild(pokeName);
            pokeCards.appendChild(pokeNumber);
            pokeCards.appendChild(image);
            pokeCards.appendChild(pokeType);
            pokeCards.appendChild(pokeType2);
            //Mostrar tarjeta en HTLM -> section
            document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
        }
        else if (pokeNumber.indexOf(enterSearch) !== -1) {
            let pokeCards = document.createElement("div");
            pokeCards.className = "pokeCards";
            let pokeName = document.createElement("h3");
            pokeName.textContent = pokemones[i].name;
            let image = document.createElement("img");
            image.src = pokemones[i].img;
            let pokeNumber = document.createElement("h4");
            pokeNumber.textContent = pokemones[i].num;
            let pokeType = document.createElement("p");
            pokeType.textContent = pokemones[i].type[0];
            pokeType2 = document.createElement("p");
            pokeType2.textContent = pokemones[i].type[1];
            pokeCards.appendChild(pokeName);
            pokeCards.appendChild(pokeNumber);
            pokeCards.appendChild(image);
            pokeCards.appendChild(pokeType);
            pokeCards.appendChild(pokeType2);
            //Mostrar tarjeta en HTLM -> section
            document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
        }
    }
}
search.addEventListener("keyup", filter);
//Tipos
>>>>>>> 3213bd23106db3d14bf1280bdb912e162d3c75f5
