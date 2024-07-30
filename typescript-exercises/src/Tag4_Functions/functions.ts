/* ***Functions-TS-Grundlagen-Level-1_4** */

function showHero(heroName: string, heroPower: string, heroEnemy:string): void {
    const nameOutput =  "mein Lieblingsheld ist " + heroName
    const powerOutput = "seine/ihre power ist" + heroPower
    const enemyOutput = "und der größte Gegner ist" + heroEnemy 
    console.log(`${nameOutput} ${powerOutput} ${enemyOutput}`)
}

showHero("Deadpool", "unsterblichkeit", "The Recruiter")

/* ***Functions-TS-Grundlagen-Level-1_6** */

function returnOne1(): number{
    return 1
}
let x1 = 1;
let y1 = returnOne1();
 if (x1 === y1){
    console.log("Wird das gedruckt?")
 }


function returnOne(): number{
    return 1 
}
const returnValue = returnOne()
const x = 1
const y = returnOne()
console.log(x)
console.log(y)

if (x === y){
    console.log("Wird es gedruckt?")
}



/* ***Functions-TS-Grundlagen-Level-1_7** */

function addTwo(zahl: number): number{
    const addition: number = zahl + 2
    console.log(addition)
    return addition
}
const twoVariable = addTwo(78)
console.log(addTwo(5) )


/* ***Functions-TS-Grundlagen-Level-1_8** */

function alter(aktuellsJahr: number, geburtsjahr: number): number{
    const alterBerechnen = aktuellsJahr - geburtsjahr
    return alterBerechnen
}

const meinAlter = alter(2024, 1997)
console.log(meinAlter)

const anderesAlter = alter(2024, 1994)
console.log(anderesAlter)

function differenz(): number{
    const altersunterschied = meinAlter - anderesAlter
    return altersunterschied
}

console.log(differenz())



function alterRechner(jahr: number): number {
    const aktuellesDatum: number = Number(newDate(2024))
    const birthYears: number = aktuellesDatum - jahr
    return birthYears
}

const returnAlter = alterRechner(1997)
console.log(returnAlter)

function alterVergleich(personOne: number, personTwo: number): number {
    const alterDifferenz: number = personOne - personTwo
    return alterVergleich
}

console.log()
