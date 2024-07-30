//! Loops - Schleifen



for(let index:number = 0; index <5; index ++){
    console.log("Hello World")
}

for (let i: number = 12; i < 24; i ++){
    console.log("aktueller Index:", i);
}

for(let i: number =0; i <= 30; i++){
    if(i % 3 === 0){
        console.log(i, "ist durch 3 teilbar")
    }
}

let sumOfNums: number = 0;
for (let i: number = 1; i <= 10; i++){
    console.log(`${sumOfNums} plus ${i}`);
    sumOfNums += i; //speichert den wert in der vorher definierten Variablen, hier wird gesagt dass die erst Variable = i ist aber auch gleich, dass sie es im anschluss + i rechnen soll. so 
    if(i === 10){
        console.log(`Wir sind am ende des Loops und haben den wert ${sumOfNums}`)
    }
    else{
        console.log(sumOfNums)
    }
}

let meinText: string = "Hier ein Mustertext einfügen";
let doubleText: string = ""

console.log("mein Text hat eine Länge von:", meinText.length, "zeichen");
console.log(meinText[2]);
console.log(meinText[3]);
console.log(meinText[6]);


for (let i: number = 0; i < meinText.length; i ++) {
    doubleText += meinText[i] +meinText[i]
}

console.log(doubleText)



const numbersToEleven: number[]  = [];

for (let i: number = 1; i <= 12; i++){
    numbersToEleven.push(i)
}


let counterForWhile: number = 0;

while (counterForWhile < 10) {
    console.log("hello world")
}
counterForWhile++

/* 
let userInput: string | null = "";

while (userInput !=="stop"){
 userInput = window.prompt("stop mich!")
} */

let specialCounter: number = 5;
// While ist eine Kopfgesteuerte schleife (von oben nach unten)
while (specialCounter < 5 {
    console.log ("hello from While")
    specialCounter ++;
})


// Do-While ist eine fußgesteuerte Schleife
do {
    console.log("hello from DO While");
} while (specialCounter < 5)

const meals: string[] = ["Döner", "Pizza", "Pasta", "Wrap", "Salat"]

for (const meal of meals) {
    console.log(meal)
}