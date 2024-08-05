/// Aufgabe Tuple-TS-Level-1_1

const starWarsActor1: [string, string] = ["Luke Skywalker", "Mark Hamill"],
const starWarsActor2: [string, string] = ["Darth Vader", "James Earl Jones"],
const starWarsActor3: [string, string] = ["Yoda", "Frank Oz"],
const starWarsActor4: [string, string] = ["Han Solo", "Harrison Ford"],
const starWarsActor5: [string, string] = ["Princess Leia", "Carrie Fisher"]

console.log(starWarsActor1, starWarsActor2, starWarsActor3, starWarsActor4, starWarsActor5)

/// Aufgabe Tuple-TS-Level-2_1

let

console.log("%c Tuple-Level-2_1 ", "background: white; color: green");

type MitarbeiterVerwaltung = [
  nummer: number,
  name: string,
  abteilung: string,
  jahresgehalt: number
];

const mitarbeiter: MitarbeiterVerwaltung[] = [
  [1437, "Sahra Desert", "HR", 45370],
  [1439, "Sam Simonis", "Einkauf", 38572],
  [15201, "Constantin Schweiger", "Einkauf", 43573],
  [1385, "Jessica Parker", "Marketing", 63498],
  [1000, "Ben Benson", "Geschäftsführung", 162438],
];

console.log(mitarbeiter);


/// Enum-TS-Level-1_1


enum PizzaSize {
    Small,
    Medium,
    Large,
    Family
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