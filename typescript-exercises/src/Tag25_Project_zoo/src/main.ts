import Animal from "./classes/Animal";
import EnclosurId from "./enmus/EnclosureId";
import { createAnimal } from "./func/createAnimal";

//! HTML elemente anbholen
const selectAnimal = document.getElementById("select-animal") as HTMLSelectElement;
const nameOfAnimalInput = document.getElementById("nameInput") as HTMLInputElement;
const birthYearInput = document.getElementById("birthYearInput") as HTMLInputElement;
const selectContinent = document.getElementById("select-continent") as HTMLSelectElement;
const selectSpecialNeeds = document.getElementById("select-specialNeeds") as HTMLSelectElement;
const selectHabitat = document.getElementById("select-enclosure") as HTMLSelectElement;
const savannahEnclosure = document.getElementById("savannah") as HTMLElement;
const jungleEnclosure = document.getElementById("jungle") as HTMLElement;
const reptileEnclosure = document.getElementById("reptileHouse") as HTMLElement;
const aquariumEnclosure = document.getElementById("aquarium") as HTMLElement;
const createAnimalButton = document.getElementById("button") as HTMLButtonElement


//# Schleife machen - Loooooooop

const allZooAnimals: Animal[] = []
const savannahAnimals: Animal[] = []
const jungleAnimals: Animal[] = []
const ReptilHouseAnimals: Animal[] = []
const AquaAnimals: Animal[] = []

createAnimalButton?.addEventListener("click", (event: Event) => {
    event.preventDefault()

    const type = selectAnimal.value;
    const name = nameOfAnimalInput.value;
    const yearOfBirth = birthYearInput.value;
    const continent = selectContinent.value;
    const specialNeeds = selectSpecialNeeds.value;
    const habitat = selectHabitat.value;
    console.log(type, name, yearOfBirth, continent, specialNeeds, habitat)

    const animal = createAnimal(type, name, Number(yearOfBirth), Number(continent), specialNeeds, Number(habitat))

    if (animal){
        if(
            !type ||
            !name ||
            !yearOfBirth ||
            !continent ||
            !specialNeeds ||
            !habitat 
        ){
        /*     console.error ("All filds must be filled")
        } else{ */
            allZooAnimals.push(animal)
            console.log(allZooAnimals)
        }
    }

    function chooseHabitat(){
        if (type && name && yearOfBirth && continent && specialNeeds && habitat){
            if(animal?._enclosureId === EnclosurId.SavannaHabitat){
                savannahAnimals.push(animal)
                console.log("Savanna Animals", savannahAnimals)
            }
            if(animal?._enclosureId === EnclosurId.JungleHabitat){
                jungleAnimals.push(animal)
                console.log("Jungle Animals", jungleAnimals)
            }
            if (animal?._enclosureId === EnclosurId.Reptilhouse){
                ReptilHouseAnimals.push(animal)
                console.log(" Reptile House", ReptilHouseAnimals)
            }
            if(animal?._enclosureId === EnclosurId.AquaticHabitiat){
                AquaAnimals.push(animal)
                console.log("Aquarium", AquaAnimals)
            }
        }

    }

    chooseHabitat()
})

function showAllAnimals(){
    const output = document.createElement("div")
    output.className = "output"

    allZooAnimals.forEach((animal)=>{
        const card = document.createElement("div")
        card.className = "card"
        const emoji = document.createElement("div")
        emoji.innerHTML = animal._emoji
        card.appendChild(emoji)
        const name = document.createElement("div");
        name.innerHTML = `Name: ${animal._name}`;
        card.appendChild(name);
        const currentYear = new Date().getFullYear();
        const age = currentYear - animal._yearOfBirth;
        const ageDiv = document.createElement("div");
        ageDiv.innerHTML = `Age: ${age.toString()}`;
        card.appendChild(ageDiv);
        const origin = document.createElement("div");
        const continent = animal._continent;

        if (continent) {
            switch (continent.toString()) {
                case "0":
                    origin.innerHTML = "Origin: Antartica";
                    break;
                case "1":
                    origin.innerHTML = "Origin: Australia";
                    break;
                case "2":
                    origin.innerHTML = "Origin: Asia";
                    break;
                case "3":
                    origin.innerHTML = "Origin: Africa";
                    break;
                case "4":
                    origin.innerHTML = "Origin: Europe";
                    break;
                case "5":
                    origin.innerHTML = "Origin: North America";
                    break;
                case "6":
                    origin.innerHTML = "Origin: South America";
                    break;
                default:
                    break;
            }
        }
        card.appendChild(origin)

        const enclosure = document.createElement("div")
        const eclosureNumber = animal._enclosureId.toString()
        if(eclosureNumber){
            switch (eclosureNumber){
            case "0":
                enclosure.innerHTML = "Savanna"
                break
            case "1":
                enclosure.innerHTML = "Jugle"
                break
            case "2":
                enclosure.innerHTML = "Reptilhouse"
                break
            case "3":
                enclosure.innerHTML = "Aquarium"
                break  
                
            default:
                break;
        }
        }
        output.appendChild(card)
        showAllAnimals()
        displayAnimal()
    





    })

}


function displayAnimal(): void {
    if (savannahEnclosure && savannahAnimals){
        savannahEnclosure.innerHTML = "";
        savannahAnimals.forEach((animal: Animal, index) =>{
            const emojiDiv = document.createElement("div")
            emojiDiv.className = "Emoji toolip"
            const emoji = document.createElement("div")
            emoji.innerHTML = animal._emoji
            const currentYear = new Date().getFullYear()
            const age = currentYear - animal._yearOfBirth

            const
        })
    }
}

