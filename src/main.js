const pokemones = window.POKEMON.pokemon;
for (let i = 0; i < pokemones.length; i++) {
    
    //Creando 'div' que será la tarjeta container 
    
    let cards = document.createElement("div");
    cards.className = "flip-card";

    let pokeCards = document.createElement("div");
    pokeCards.className = "pokeCards";
    pokeCards.id = "pokeCards";

    
    //Creando nombre del pokemon
    let pokeName = document.createElement("h3");
    pokeName.textContent = pokemones[i].name;

    //Creando imagen del pokemon
    let image = document.createElement("img");
    image.src = pokemones[i].img;

    //Creando número del pokemon
    let pokeNumber = document.createElement("h4");
    pokeNumber.textContent = pokemones[i].num;
    //Creando tipo de pokemon -> primer tipo
    let pokeType = document.createElement("p");
    pokeType.textContent = pokemones[i].type[0];
    //Creando tipo de pokemon -> segundo tipo
    let pokeType2 = document.createElement("p");
    pokeType2.textContent = pokemones[i].type[1];

    //Dando valor a variables
    cards.appendChild(pokeCards);
    pokeCards.appendChild(pokeName);
    pokeCards.appendChild(pokeNumber);
    pokeCards.appendChild(image);
    pokeCards.appendChild(pokeType);

    //Mostrar tarjeta en HTLM -> section
    document.getElementById("container_pokemones").appendChild(cards).innerHTML;    
    
}

//Filtrar por Huevo 
const selectEggs = document.getElementById("eggs");
selectEggs.addEventListener("change", showByEgg);
function showByEgg() {
    //Condicion = variable
    let pokemones = window.filterEggs(selectEggs.value);
    document.getElementById("container_pokemones").innerHTML = "";
    for (let i = 0; i < pokemones.length; i++) {
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
        let pokeType2 = document.createElement("p");
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
    let pokemones = window.filterTypes(selectType.value);
    document.getElementById("container_pokemones").innerHTML = "";
    for (let i = 0; i < pokemones.length; i++) {
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
        let pokeType2 = document.createElement("p");
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
//Ordenar
const selectOrder = document.getElementById("order");
selectOrder.addEventListener("change", showOrder);
function showOrder() {
    let order = selectOrder.options[selectOrder.selectedIndex].value;
    document.getElementById("container_pokemones").innerHTML = "";
    for (let i = 0; i < pokemones.length; i++) {
        if (order === "1-151") {
            window.ascendingNum();
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
            let pokeType2 = document.createElement("p");
            pokeType2.textContent = pokemones[i].type[1];
            pokeCards.appendChild(pokeName);
            pokeCards.appendChild(pokeNumber);
            pokeCards.appendChild(image);
            pokeCards.appendChild(pokeType);
            pokeCards.appendChild(pokeType2);
            //Mostrar tarjeta en HTLM -> section
            document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
        } else if (order === "151-1") {
            window.descendingNum();
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
            let pokeType2 = document.createElement("p");
            pokeType2.textContent = pokemones[i].type[1];
            pokeCards.appendChild(pokeName);
            pokeCards.appendChild(pokeNumber);
            pokeCards.appendChild(image);
            pokeCards.appendChild(pokeType);
            pokeCards.appendChild(pokeType2);
            //Mostrar tarjeta en HTLM -> section
            document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
        } else if (order === "A-Z") {
            window.descendingName();
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
            let pokeType2 = document.createElement("p");
            pokeType2.textContent = pokemones[i].type[1];
            pokeCards.appendChild(pokeName);
            pokeCards.appendChild(pokeNumber);
            pokeCards.appendChild(image);
            pokeCards.appendChild(pokeType);
            pokeCards.appendChild(pokeType2);
            //Mostrar tarjeta en HTLM -> section
            document.getElementById("container_pokemones").appendChild(pokeCards).innerHTML;
        } else if (order === "Z-A") {
            window.ascendingName();
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
            let pokeType2 = document.createElement("p");
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
//Busqueda Interna -> Pokemones
const search = document.getElementById("search");
const containerPokemones = document.getElementById("container_pokemones");
const filter = () => {
    let enterSearch = search.value.toLowerCase();
    containerPokemones.innerHTML = "";
    for (let i = 0; i < pokemones.length; i++) {
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
            let pokeType2 = document.createElement("p");
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
            let pokeType2 = document.createElement("p");
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