//!___________________________________________ wiederholung
//Array - immer mit eckigen klmannern
const animals: string[] = ["Horse", "Dog", "Cat", "Mouse", "Lizzard"]

//Arrays in Arrays:
const gehege: (string| string[]) [][]=[
    ["Tiger1", "Tieger 2", "Tieger3",["kranker Tiger"]],
    ["Penguin1","Penguin2","Penguin3",["Turtle1", "Turltle2", "Turtle3"]]
]

console.log(gehege[0][2]) //Tieger3
console.log(gehege[1][3][0]) //Turtle1




//Objetcts - immer mit geschweiften klammern und immer key:value danach immer ein komma
const  ankor = {
    name: "Ankor",
    age: 5
}



//Functions - 
//* Normale Funktionen - erst schlagwort der Funktion, dann die runden klmammern mit möglichen parametern, danach die geschweiften klammern mit der logik der funktion

// diese funktion gibt nichts zurück
function showAnimal(): void {
    console.log("Hier Könnte ein Tier stehen")
}

showAnimal();

//diese Funktion gibt was zurück
function isFavoriteAnimal(animal: string): boolean{
    if(animal ==="Dog"){
        return true
    } else {
        return false
    }
}

const resultOfAnimalFav = isFavoriteAnimal("Cat")
console.log({resultOfAnimalFav})

const resultOfAnimalFav2 = isFavoriteAnimal("Dog")
console.log({resultOfAnimalFav2})



//Typ selbst erstellen
//bisher bei uns nur mit Objekten in verbindung angewendet
//mit geschweiften Klammern => Eigenschaften plus deren Datentypen und wird durch ein semikolon getrent
// best  practice: erster Buchstabe Groß geschrieben

type ZooAnimal = {
    name: string;
    country: string;
    continent: string;
    feedingTimes: string[];
}

// -> Typen zuweisen:

const ZooAnimals: ZooAnimal[] = [
    {
        name: "Elephant",
        country: "Tansania",
        continent: "Afrika",
        feedingTimes: ["Morgens", "Abends"]
    },
    {
        name: "Känguru",
        country: "Australien",
        continent: "Australien",
        feedingTimes: ["Morgens", "Abends"]
    },
    {
        name: "Giraffe",
        country: "Ghana",
        continent: "Afrika",
        feedingTimes: ["Morgens", "Abends"]
    },
    {
        name: "Tiger",
        country: "India",
        continent: "Asia",
        feedingTimes: ["Morgens", "Abends"]
    }
]
//- Auf die Werte zugreifen in objects:
console.log(ZooAnimals[1].feedingTimes[0])

//* forEach

ZooAnimals.forEach((zooAnimal: ZooAnimal) =>{
    console.log(`Erste Fütterungszeit von ${zooAnimal.name} ist ${zooAnimal.feedingTimes[0]}`)
})

//* map -> gibt ein neues Array zurück

const continents = ZooAnimals.map((zooAnimal: ZooAnimal) =>{
    return zooAnimal.continent
})

console.log(continents)

//!____________ Enums Aufgaben __________-

//? Aufgabe Enum TS Level 1_2

enum PizzaSize {
    Small, //0
    Medium, //1
    Large, //2
    Family //3
}

enum PizzaIngredients {
    Cheese,
    Mozzarella,
    Borkkoli,
    Holandaise,
    Onion,
    Salami,
    Sucuk,
    Pepperoni,
    Tomatos,
    Champions,
    Tuna,
    Ham
}

type Pizza = {
    size: PizzaSize,
    ingredients: PizzaIngredients[]
}

const meinePizza: Pizza ={
    size: PizzaSize.Medium,
    ingredients: [PizzaIngredients.Tomatos, PizzaIngredients.Borkkoli, PizzaIngredients.Champions, PizzaIngredients.Holandaise, PizzaIngredients.Mozzarella]
}

console.log(meinePizza)

console.log("Meine Pizza")
meinePizza.ingredients.forEach((singleIngredient) => {
    console.log(`Eine Zutat ist${PizzaIngredients[singleIngredient]}`)
}) //Hier werrden die Zutaten nicht mehr mit den nummern emienr positionen ausgegeben sondern werden in die Worte "zurückübersetzt"

//anderer weg mit for in schleife
for(let singleIngredeent in meinePizza.ingredients) {
    console.log(`${PizzaIngredients[singleIngredeent]}`)
}



//? Aufgabe Enum TS Level 2_2

enum ClosingColors{
    red= "#453466",
    yellow= "#FFFF00",
    orange= "#453466",
    pink= "#453466",
    blue= "#453466",
    green= "#453466",
    purple= "#453466",
    gray= "#453466",
}

const allColors: ClosingColors[] =[
    ClosingColors.yellow,
    ClosingColors.red,
    ClosingColors.blue,
    ClosingColors.purple,
    ClosingColors.gray,
    ClosingColors.pink
]
console.log(allColors);

const colorButton = document.querySelector("#color")

if(colorButton){
    allColors.forEach((hexColot: ClosingColors) =>{
        const button = document.createElement("button");
        button.innerText = hexColot;
        button.style.backgroundColor = hexColot;
        colorButton.appendChild(button)
    })
}
//                      i < 6
for(let i: number= 0; i < Object.keys(ClosingColors).length; i++) {
    const button = document.createElement("button");
        button.innerText = Object.keys(ClosingColors)[i];
        button.style.backgroundColor = Object.values(ClosingColors)[i];
       //console.log(Object.keys(ClosingColors))
}

colorButton?.innerHTML