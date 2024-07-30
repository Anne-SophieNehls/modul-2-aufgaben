//? Conditionals-Level-2_1

const John: number = 22*5 +170
const Meike: number = 34*5 +168
// John  170 cm   22 J  
// Meike  168 cm   34  J 
console.log(John)
console.log(Meike)

if (John > Meike){
    console.log("John gewinnt");
}
else if(John === Meike){
    console.log("Unentschieden");
}
else {
    console.log("Meike gewinnt");
}

//? Conditionals-TS-Level-2_3

//? Conditionals-TS-Level-2_4

const randomNumber1: number = Math.floor(Math.random() * 77 ) + 1
const randomNumber2: number = Math.floor(Math.random() * 77 ) + 1


if(randomNumber1 === randomNumber2){
    console.log(`Was für ein Zufall`)
}
else if (randomNumber1 > randomNumber2){
    console.log(`Die Erste Zahl ist größer als die Zweite`)
}
else{
    console.log(`Die Zweite Zahl ist größer als die Erste`)
}

//? Conditionals-TS-Level-2_8

//? Conditionals-TS-Level-1_5

//? Conditionals-TS-Level-3_1

//? Ternary-Operator-TS-Level-2_2

const randomLottoZahl: number = Math.ceil(Math.random() *49)
const lottoMassage: string = randomLottoZahl < 5 ? "too small number" : "bigger Nummber"
console.log({lottoMassage})