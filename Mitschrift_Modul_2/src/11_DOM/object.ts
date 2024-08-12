const accountBalance: number = 2584.55

// * Math.floor() damit die Zahl abgerundet wird
console.log(Math.floor(accountBalance));

// * Math.ceil() damit die Zahl aufgerundet wird
console.log(Math.ceil(accountBalance));



const randomZahlZwischen1_10: number = Math.ceil(Math.random() * 10)
console.log(randomZahlZwischen1_10);

// ! sie sind neu

// * Math.min() gib die minimum Zahl zurück

const zahlen: number[] = [33, 11, 44, 55, 1]
console.log(zahlen);

const minimumZahl = Math.min(...zahlen)
console.log(minimumZahl);

// * Math.max() gib die maximum Zahl zurück

const maxmimumZahl = Math.max(100, 20, 160, 3)
console.log(maxmimumZahl);


// * Math.pow() Potenz berechnen 2 hoch 3 => 2 * 2 * 2
let powerVariable = Math.pow(2, 3)
console.log(powerVariable);

let powerVariable2 = Math.pow(10, 4)
console.log(powerVariable2);

// * Math.sqrt() Wurzel berechnen

let square25 = Math.sqrt(25)
console.log(square25);


// ******** Object ********


const inputElement = document.createElement("input")
console.log(inputElement);

// ? wie schreibt man ein Object ?
// * Objekte werden immer mit geschweifte Klammern geschrieben. {}
// * sie bestehen aus Eigenschaften und deren Werte sind => Keys und values
// * Zuert kommt der Name der Eigenschaft, dann ein doppelpunkt und dann der Wert

// const userVorname = "Joe"
// const userNachname = "Doe"
// const age = 20
// const beruf = "trainer"

const user = {
    vorName: "Joe",
    nachName: "Doe",
    alter: 30,
    beruf: "trainer",
    address: "muster straße"
}

console.log({ user });

console.log(user.vorName);
console.log(user.beruf);
console.log(user.alter);

user.vorName = "Tolga"
// ? es wird per Referenz auf das Objekt zugegeriffen und damit immer das urspruchsobjekt verändert
user.alter = 20;

console.log(user);


const user2 = {
    vorName: "Marc",
    nachName: "mustermann",
    age: 42,
    beruf: "Lehrer",
    // ? Eigeschaften eines Obekts können entweder Objekte oder Arrays sein
    address: {
        stadt: "Berlin",
        strasse: "muster straße",
        plz: 10011
    },
}


console.log(user2);

console.log(user2.beruf);
console.log(user2.address.strasse);
console.log(user2.hobbies);

user2.hobbies.forEach((hobbie) => console.log(hobbie))

console.clear()

// ! es ist nicht möglich was im nachhinhein hingefügt zu werden
// user2.verheiratet = false


type Movie = {
    title: string, year: number, mainCharacter: string, categories: string[]
}



const movie1: Movie = {
    title: "The Godfather",
    year: 1972,
    mainCharacter: "Don Vito",
    categories: ["Action", "Drama"]
}

console.log(movie1.title);
console.log(movie1.categories);
movie1.categories.push("klassik")
console.log(movie1);


const movie2: Movie = {
    title: "Batman Begins",
    year: 2005,
    mainCharacter: 'Batman',
    categories: ["Adventure", "Drama", "Fantasy"]
}
 console.log(movie2);

const movie3: Movie = {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
    mainCharacter: 'Gollum',
    categories: ["Adventure", "Drama", "Fantasy"]
}

// ? wir können Objekte auch in einem Aray verwalten => Array von Objects
const movieCollection: Movie[] = [movie1, movie2, movie3]

console.log(movieCollection);


// ? Ich kann das Array von Objecten dann in einer Schleife durchlaufen und jeweils einzelne Eigenschaften ausgeben
movieCollection.forEach((movie) => {
    console.log("title", movie.title);
    console.log("year", movie.year);
})


movieCollection.sort((yearA, yearB) => {
    // ? hier wird die beiden Eigenschaften von unserem Object (Movie-Object) verglichen
    return yearA.year - yearB.year
})


console.log(movieCollection);


// **** Objekte durchlaufen *****


const sports: string[] = ["Hockey", "Tennis", "Soccer"]

// ! for of Schleife => das gehört nur zu Array
// for (let sport of sports) {
//     console.log(sport);
// }


// ! for in Schleife => das gehört nur zu Objecte
// ? keys
 for (let key in movie3) {
     console.log(key);
 }

// ? values
 for (let key in movie3) {
     console.log(movie3[key]);
}


// ? mit Object.keys können wir direkt die Keys (alle Eigenschaften) eines konkreten Objects als Array ausgeben lassen
console.log(Object.keys(movie3));


// ? mit Object.values können wir direkt die values (alle Eigenschaften) eines konkreten Objects als Array ausgeben lassen
console.log(Object.values(movie3));
