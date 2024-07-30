function addTwenty(zahl: number):number{
    const result = zahl +20
    console.log(result)
    return result
}

addTwenty(10)
addTwenty(100)

function addFunktion(zahl1: number, zahl2: number, zahl3: number): number {
    const resultadd = zahl1 + zahl2 +zahl3
    return resultadd
}

const addFunktionLernen = addFunktion(100, 60, 55)
console.log(addFunktionLernen)

const teileDurch = addFunktionLernen /10
console.log{ teileDurch}

function printMiString(zahl: number, message: string): number {
    const result = zahl +40
    console.log(message + result)
    return result
}

printMiString(200, "das Ergebnis ist ")

const resultVariable = printMiString(40, "Das Ergebnis ist ")
const summe =resultVariable +1000
console.log({summe})

function getOnline(istOnline: boolean): string {
    return istOnline ? "User is Online" : "User ist offline"

}

const gespeiechtereVariable = getOnline(false)
console.log({ gespeiechtereVariable })
console.log(typeof gespeiechtereVariable) //sagt einem was es ist (z.b. number string boolean, void) falls man sich mal unsicher ist, kann man es so testen :)

