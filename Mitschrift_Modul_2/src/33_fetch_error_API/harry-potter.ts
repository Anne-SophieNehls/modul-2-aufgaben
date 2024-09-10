// Immer am Anfang, wenn ich Schnittstellen aufrufe und meherere Endpunkte bzw. Routen habe, die URLS sollte fesgestellt werden

import { IHogwartsHouse, IHead, ITrait } from "./interfaces/IHogwartsHouse"

import { ISpells } from "./interfaces/ISpells"


const BASE_URL = "https://wizard-world-api.herokuapp.com"
const HOUSES_URL = `${BASE_URL}/Houses`
const SPELLS_URL = `${BASE_URL}/spells`

// HTMl Elemente holen

const houseLink = document.getElementById("nav-houses") as HTMLAnchorElement
const spellLink = document.getElementById("nav-spells") as HTMLAnchorElement
const contentDiv = document.getElementById("content") as HTMLDivElement

houseLink?.addEventListener("click", ()=>{
    console.log("houses clicked");
    fetchAndDisplay(HOUSES_URL, "Houses")
})

spellLink?.addEventListener("click", ()=>{
    console.log("spells clicked");
    fetchAndDisplay(SPELLS_URL, "spells")
})

function fetchAndDisplay(url: string, routenName: string){
    fetch(url)
    .then((resp: Response) => {
        console.log(resp);
        return resp.json()
    })
    .then((data: any) => {
        if(routenName === "Houses"){
            const houses = data as IHogwartsHouse[]
            console.log(houses)
            contentDiv.innerHTML = createHouseList(houses)
        } 
        else if(routenName == "spells"){
            const spells = data as ISpells[]
            console.log(spells)
            contentDiv.innerHTML = createSpellList(spells)
        }

    })
    .catch((error:Error) =>{
        console.error(error)
    })
}

function createHouseList(houses: IHogwartsHouse[]):string{
    //? wir schreiben das HTML in einem langen string, als wäre es eine HTML datei
    const resultAsString = houses.map((houses: IHogwartsHouse) =>{
        return `
        <div>
        <p>Id: ${houses.id}</p>
        <p>Name: ${houses.name}</p>
        <p>Founder: ${houses.founder}</p>
          <p>Animal: ${houses.animal}</p>
          <p>Element: ${houses.element}</p>
          <p>Ghost: ${houses.ghost}</p>
          <p>CommonRoom: ${houses.commonRoom}</p>
         <p>Id :${houses.heads.map((head: IHead) =>`${head.firstName} ${head.lastName} `)}</p>
        </br>
        </div>`
    })
    return resultAsString.join("")
}

function createSpellList(spell: ISpells[]):string{
    const resultAsString = spell.map((spell: ISpells) =>{
        return `
        <li>
        <p>Id: ${spell.id}</p>
        <p>Name: ${spell.name}</p>
        <p>Effect: ${spell.effect}</p>
          <p>Light: ${spell.light}</p>
          <p>Type: ${spell.type}</p>
          <p>Incantatin: ${spell.incantation}</p>
        </br>
        </li>`
    })
    return `<ul> ${resultAsString.join("")} </ul>`
}