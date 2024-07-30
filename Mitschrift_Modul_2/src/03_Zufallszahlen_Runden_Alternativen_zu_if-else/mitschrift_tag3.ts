const piZahl: number = Math.PI

console.log(piZahl)




// ! Math round    rundet immer auf ganze Zahl

console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.round(3.512342));


// ! Math.floor()  rundet immer ab auf die ganze Zahl

console.log(Math.floor(3.999));
console.log(Math.floor(3.0));
console.log(Math.floor(4.512342));

// ! Math.ceil()   runder immer die ganze Zahl auf

console.log(Math.ceil(3.4));
console.log(Math.ceil(3.5));
console.log(Math.ceil(3.512342));

//! Math.random()    gibt immer eine zufällige nachkommertahl, also zischen 0 und 0.9

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//! um jetzt eine höhere zahl zu bekommen, kann man hinterndie klammer einfach  *10 schreiben (jede anderzahl klappt auch)

console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);

//! um jetzt kiene kommerstellen sonder eine ganze zahl zu bekommen, kombiniert man das mit einer der vorherigen Methoden (floor) und die Random Zahl auf eine ganze zu Runden

const randomZahlGanz: number= Math.floor(Math.random() * 10)
console.log({randomZahlGanz})


// if-else



console.log(randomZahlGanz)

//! switch
// kann natürlich auch mit den booleans true und false angewendet werden


const booleanTest: boolean = Math.random() <=0.5
console.log({booleanTest})

if (booleanTest) {
    console.log("User ist online")
} else {
    console.log("User ist offline")
}

//?Abkürzung von if else

const message: string = booleanTest ? "user ist online" : "offline"
console.log({message})


const randomLottoZahl: number = math.ceil(Math.random() *49)
const lottoMassage: string = randomLottoZahl < 5 ? "too small number" : "bigger Nummber"
console.log({lottoMassage})


//! DATE

const heute = new Date()
console.log({heute})

const firstDate = new Date(0)
console.log({firstDate})

const birthdate = new Date("1997-01-10") // als string
console.log({birthdate})

const birthdateNumber = new Date(1997, 0, 10) // als number = hier beginnt er bei den monaten mit dem zählen bei der 0


//! Formatierung des datums darstellen

console.log("Lokal string DE", birthdateNumber.toLocaleString());
console.log("Lokal string GB", birthdateNumber.toLocaleString("en-GB"));
console.log("Lokal string US", birthdateNumber.toLocaleString("en-US"));

console.log("Lokal string DE mit UTC Zeit", birthdateNumber.toLocaleString("de-DE", {timeZone: "UTC"}));


//! nut den tag getDay => hohlt sich den Tag der angegeben woche

console.log("projekt start day of week", birthdate.getDay())

//! get Mounth()

console.log("Project start the month", birthdate.getMonth())

//! get Year()

console.log("Project start the year", birthdate.getFullYear())

//? bei get bekommt man die werte immer als number ausgegeben, d

//! getTime()
console.log("start date tim")

