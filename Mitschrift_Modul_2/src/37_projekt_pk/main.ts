import { IPokemon } from "./contracts/IPokemon";
import { IPokemonType, IPokemonResult } from "./contracts/IPokemens";


const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=50"
const TYPE_URL = "https://pokeapi.co/api/v2/type"

const main = document.querySelector("main") as HTMLDivElement
const form = document.querySelector("form") as HTMLFormElement
const inputFeld = document.querySelector("input") as HTMLInputElement
const selectType = document.querySelector("select") as HTMLSelectElement
const show_pk = document.querySelector("#show_pk") as HTMLButtonElement

const POKEMON_TYPES = [
    { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
    { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
    { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
    { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
    { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
    { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
    { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
  ];


//= Button 
  show_pk?.addEventListener("click", async()=>{
    main.innerHTML = "";                         //! Tisch abräumen
    await showAllPokemon()
    console.log("test");
  })

async function showAllPokemon() {
    try {
        if(main.innerHTML ! == ""){
                return;
        }       
        const response = await fetch(BASE_URL)
        const data = await response.json()

        const results: IPokemonResult[] = data.results
        //console.log(results)

        for(const result of results){
            try {
                const pokemonResponce = await fetch(result.url) //! hier isn object der ersten datenbank navigieren, dass aus name und url steht, damit man mehr infos zu dem pokemon aufraufen kann
                const pokemon = await pokemonResponce.json()
                //# HTML Ausgabe funktion
                await showPokemon(pokemon)
            } catch (error){console.error(error + "zweiter fetch")}
        }
    } catch (error){console.error(error + "erster fetch")}
}

async function showPokemon(pokemon: IPokemon){
    const div = document.createElement("div") as HTMLDivElement;
    div.classList.add("pokemon-card")

    const name = document.createElement("h3") as HTMLHeadElement
    name.textContent = pokemon.name
    div.appendChild(name)


    div.appendChild(createElImage(pokemon.sprites.front_default))
    div.appendChild(createElement("Weight;", pokemon.weight))
    div.appendChild(createElement("Height:", pokemon.height))

    const ul = document.createElement("ul") as HTMLUListElement
    const abilitiesLable = document.createElement("h4") as HTMLHeadingElement
    abilitiesLable.textContent = "Abilitis"
    ul.appendChild(abilitiesLable)
    div.appendChild(ul)

    // for each für die abilitis hier einfügen



    main.appendChild(div)
}

 function createElImage(value: string): HTMLImageElement {
    const img = document.createElement("img") as HTMLImageElement;
    img.src = value;
    return img
}

function createElement(lable: string, value: string | number): HTMLParagraphElement {
    const p = document.createElement("p") as HTMLParagraphElement
    p.textContent = `${lable} ${value}`
    return p
}

form?.addEventListener("submit", async (event: Event)=>{
    event.preventDefault()
    main.innerHTML = "" // Tisch abräumen

    if(!inputFeld.value){
        await showAllPokemon()
    } else {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputFeld.value}`)
            if (!response.ok){
                throw new Error("Pokemon not found")
            }
            const pokemon = await response.json()
            console.log(pokemon);
            await showAllPokemon()
        } catch (error) {
            console.error(error)
        }
    }
})

//= Types automatisch in die select values fliesen lassen
function initializeTypes(){
    POKEMON_TYPES.forEach((type)=>{
        const option = document.createElement("option") as HTMLOptionElement
        option.value = type.name
        //* das charAr(0)gibt den ersten Buchstaben an (character des strings {sidn die einzelen zeichen} mit dem index 0) soll groß geschrieben werden 
        //+ +type name ab den index 1 (also der zweite Buchstabe) noch hinten dran hängen
        option.textContent = type.name.charAt(0).toUpperCase() + type.name.slice(1)
        selectType.appendChild(option)
    })
}

initializeTypes()

selectType?.addEventListener("change", async(event)=>{
    const type = (event.target as HTMLSelectElement).value
    if(type){
        //await funktions
        await filterPokemonType(type)
    } else {
        await showAllPokemon()
    }
})

//= funktions zum filtern
async function filterPokemonType(type: string) {
    try {
        const response = await fetch(`${TYPE_URL}/${type}`)
        const data = await response.json()
        main.innerHTML = ""

        //# fetch für die pokemons mit dem type
        const pokemons = data.pokemon.map((pokemon: IPokemonType) => pokemon.pokemon)
        for(const result of pokemons){
            const pokemonResponse = await fetch(result.url)
            const pokemon = await pokemonResponse.json()
            await showPokemon(pokemon)
        }
        
    } catch (error) {
        console.error(error + "filter by type")
    

}
}